import { Venue } from "./venue";

export type Show = {
    id: number;
    BandName: string;
    VenueId: number;
    venue?: Venue;
    date: Date;
    time: string; 
};
