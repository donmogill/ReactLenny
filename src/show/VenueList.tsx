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
            <h2>Venues</h2>           
            {data && data.map((venue: Venue) => (            
            <VenueDetail venue={venue} key={venue.id}/>
            ))}        
            { 
                <Link to="/venue/add">Add Show</Link>
            }
        </div>
       
    )
    


}

export default VenueList;