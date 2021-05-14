export interface Creator {
    name: string;
    platform: "youtube" | "twitch" | "custom";
    channelID: string;
}