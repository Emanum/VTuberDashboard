import {Controller, Get, Path, Route,} from "tsoa";
import {Show} from "../model/Show";
import {YoutubeService} from "../service/YoutubeService";

@Route("liveshows")
export class LiveShowController extends Controller {
    @Get("{channelID}")
    public async getCreatorByID(
        @Path() channelID: string
    ): Promise<Show[]> {
        return new YoutubeService().getLiveVideos(channelID);
    }

}