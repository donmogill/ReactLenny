import { Link, useParams } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import {useFetchShows} from "../hooks/ShowHooks";
import { Show } from "../types/show";
import UpcomingShowDetail from "./UpcomingShowDetail"

const UpcomingShowListx = () => {

    const { data: shows, status, isSuccess } = useFetchShows(); 
    const { user } = useParams();
    

    if (!isSuccess) 
        return <ApiStatus status={status} />;    

    return(
        
        <div className="shows">
            <div className="section-tag">Where they're playing</div>
            <h2>Psychedelic Roadshow</h2>           
            {shows && shows.map((show: Show) => (            
            <UpcomingShowDetail user={user} show={show} key={show.id}/>
            ))}        
            { 
                user == "admin" ? <Link to="/show/add">Add Show</Link> : ''
            }
        </div>
       
    )

}

export default UpcomingShowList