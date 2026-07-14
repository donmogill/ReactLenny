import { Link } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import { useFetchBands } from "../hooks/BandHooks";
import { Band } from "../types/band";
import BandAdminDetail from "./BandAdminDetail";

// admins only
const BandList = () =>
{
    const { data, status, isSuccess } = useFetchBands(); 
    
    if (!isSuccess) 
        return <ApiStatus status={status} />;

    return(
        
        <div className="shows">
            <h1>Bands</h1>           
            <div className="addButton">
            <Link  to="/band/add">Add Band</Link>
            </div>
            {data && data.map((band: Band) => (            
            <BandAdminDetail band={band} key={band.id} />
            ))}        
        </div>
       
    )
    


}

export default BandList;