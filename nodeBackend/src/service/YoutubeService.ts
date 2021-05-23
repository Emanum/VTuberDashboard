import youtube from 'scrape-youtube';
import {Show} from "../model/Show";
import {LiveStream} from "scrape-youtube/lib/interface";

export class YoutubeService {

    public getLiveVideos(channelID: string) : Promise<Show[]>{
        return youtube.search(channelID, { type: 'live' }).then(searchResults => {
            return searchResults.streams.map(streamResult => {
                return YoutubeService.buildShowFromLiveStream(streamResult, channelID)
            })
        });
    }

    public getLiveVideosList(channelIDs: string[]) : Promise<Show[]>[]{
        return channelIDs.map(channelID => {
            return this.getLiveVideos(channelID)
        });
    }

    /**
     * Builds our internal Show object from the API based LiveStream object
     */
    private static buildShowFromLiveStream(streamResult: LiveStream, channelID: string) : Show {
        return {
            id: streamResult.id, title: streamResult.title, channelID: channelID, platform: "youtube",
            link: streamResult.link, thumbnail: streamResult.thumbnail
        };
    }

}