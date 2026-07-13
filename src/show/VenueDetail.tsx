import { Venue } from "../types/venue";

type Args = {
    venue:Venue,
    key:number
}
const VenueDetail = ({venue, key}:Args) => {

    return (
        <div className="stop stopVenue" key={key}>
            <div className="stop-info">
            <span className="venue">{venue.name}</span>
            </div>
            <span className="venue">{venue.address}</span>
            <span className="venue">{venue.city}</span>
        </div>
    )
};


export default VenueDetail;