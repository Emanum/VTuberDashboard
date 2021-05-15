import youtube from 'scrape-youtube';
import {Show} from "../model/Show";

export class YoutubeService {

    getLiveVideos(channelID: string) : Promise<Show[]>{
        return youtube.search(channelID, { type: 'live' }).then(results => {
            let liveStream = results.streams[0];
            return [{id:liveStream.id, title:liveStream.title, channelID:channelID,platform:"youtube",
                link:liveStream.link, thumbnail: liveStream.thumbnail}];
        });
    }

}