import { Venue } from "./venue";

export type Show = {
    id: number;
    bandName: string;
    venueId: number;
    venue?: Venue;
    date: Date | string;
    time: string; 
};
