import { useParams } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import {useFetchBands} from "../hooks/BandHooks";
import { Band } from "../types/band";
import BandDetail from "./BandDetail";

const UpcomingShowList = () => {

    const { data: bands, status, isSuccess } = useFetchBands(); 
    const { user } = useParams();
    

    if (!isSuccess) 
        return <ApiStatus status={status} />;    

    return(
        
        <div className="shows">
            <div className="section-tag subHeader">Where they're playing</div>
                
            {bands && bands.map((band: Band) => (            
            <>
                <BandDetail user={user} band={band} key={band.id}/>
            </>
            ))}                    
        </div>       
    )

}

export default UpcomingShowList