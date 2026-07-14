import { Link } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import { useFetchVenues } from "../hooks/ShowHooks";
import { Venue } from "../types/venue";
import VenueDetail from "./VenueDetail";

const VenueList = () =>
{
    const { data, status, isSuccess } = useFetchVenues(); 
    
    if (!isSuccess) 
        return <ApiStatus status={status} />;

    return(
        
        <div className="shows">
            <h1>Venues</h1>           
            <div className="addButton">
            <Link  to="/venue/add">Add Venue</Link>
            </div>
            {data && data.map((venue: Venue) => (            
            <VenueDetail venue={venue} key={venue.id}/>
            ))}        
        </div>
       
    )
    


}

export default VenueList;