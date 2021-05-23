import * as hololive from '../resources/hololive.json';
import '../model/creator';
import {Creator} from "../model/creator";

export class CreatorService {

    getHololiveCreators() : Creator[]{
        // @ts-ignore
        return hololive.creators;
    }

    getCreator(channelID: string) : Creator{
         // @ts-ignore
        let result : Creator = hololive.creators.find(creator => creator.channelID == channelID);
         if(result != undefined){
             return result;
         }else{
             return {name:"",channelID:"",platform:"custom"};
         }
    }

}