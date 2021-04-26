import * as hololive from '../resources/hololive.json';
import '../types/creator';
import {Creator} from "../types/creator";

export class CreatorService {

    getCreators() : Creator[]{
        return hololive.creators;
    }

    getCreator(channelID: string) : Creator{
         let result = hololive.creators.find(creator => creator.channelID == channelID);
         if(result != undefined){
             return result;
         }else{
             return {name:"",channelID:"",platform:""};
         }
    }

}