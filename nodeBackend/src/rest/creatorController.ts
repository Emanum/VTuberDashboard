import {
    Controller,
    Get,
    Path,
    Route,
} from "tsoa";
import {CreatorService} from "../service/CreatorService";
import {Creator} from "../model/creator";

@Route("creators")
export class CreatorController extends Controller {
    @Get("{channelID}")
    public async getCreatorByID(
        @Path() channelID: string
    ): Promise<Creator> {
        return new CreatorService().getCreator(channelID);
    }

    @Get("")
    public async getCreators(
    ): Promise<Creator[]> {
        return new CreatorService().getHololiveCreators();
    }

}