import {Controller, Get, Path, Route,} from "tsoa";
import {Show} from "../model/Show";
import {YoutubeService} from "../service/YoutubeService";
import {CreatorService} from "../service/CreatorService";

@Route("liveshows")
export class LiveShowController extends Controller {

    youtubeService : YoutubeService;
    creatorService : CreatorService;
    hololiveIDs : string[];

    constructor() {
        super();
        this.youtubeService = new YoutubeService();
        this.creatorService = new CreatorService();
        this.hololiveIDs = this.creatorService.getHololiveCreators().map(creator => {
            return creator.channelID
        });
    }

    @Get("hololive")
    public async getHololiveLiveshows(): Promise<Show[]> {
        return new Promise(resolve => {
            let liveVideosList: Promise<Show[]>[] = this.youtubeService.getLiveVideosList(this.hololiveIDs);
            Promise.all(liveVideosList).then(promiseList => {
                let erg : Show[] = [];
                promiseList.forEach(innerList => {
                    innerList.forEach(show => {
                        erg.push(show);
                    })
                })
                resolve(erg);
            })
        })
    }

    @Get("{channelID}")
    public async getLiveShowsByChannelID(
        @Path() channelID: string
    ): Promise<Show[]> {
        return this.youtubeService.getLiveVideos(channelID);
    }

}