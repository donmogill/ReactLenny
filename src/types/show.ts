import { Venue } from "./venue";

export type Show = {
    id: number;
    bandId: number;
    venueId: number;
    venue?: Venue;
    date: string;
    time: string; 
};
