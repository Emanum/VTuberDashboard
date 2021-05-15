export interface Show {
    platform: "youtube" | "twitch" | "custom";
    id: string;
    title: string;
    link: string;
    thumbnail: string;
    channelID: string;
}