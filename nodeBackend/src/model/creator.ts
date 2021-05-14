export interface Creator {
    name: string;
    platform: "youtube" | "twitch" | "custom";
    channelID: string;
}

//TODO
// export enum Platform {
//     youtube,
//     twitch,
// }