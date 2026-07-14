import { Link, useNavigate } from "react-router-dom";
import { useFetchShows } from "../hooks/ShowHooks";
import { Show } from "../types/show";
import UpcomingShowDetail from "./UpcomingShowDetail";
import { Band } from "../types/band";
import ApiStatus from "../ApiStatus";

type Args = {
  band:Band,
  user:string|undefined
  };

const BandDetail = ({band, user}:Args) => {

    const { data: shows, status, isSuccess } = useFetchShows();

    if (!isSuccess) 
        return <ApiStatus status={status} />;    

        
    return (
        <div className="shows">
           <div className="section-tag">Where they're playing</div>
           <h2>{band.name}</h2>           

            {shows && shows.map((show: Show) => (            
                <UpcomingShowDetail user={user} show={show} key={show.id}/>
            ))}        
            { 
                user == "admin" ? <Link to="/show/add">Add Show</Link> : ''
            }
        </div>
    )
}

export default BandDetail