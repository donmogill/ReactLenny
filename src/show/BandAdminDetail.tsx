import { Band } from "../types/band";
import { useDeleteBand } from "../hooks/BandHooks";

type Args = {
  band:Band  
  };

  // admins only
const BandAdminDetail = ({band}:Args) => {

    const deleteBandMutation = useDeleteBand();

    return (
        <div className="stop stopVenue" >
            <div className="stop-info">
            <span className="note">{band.name}</span>
            </div>
            <button 
                        className="deleteImageButton btn-danger"
                        onClick={() => {
                                if (window.confirm("Are you sure you want to delete this band?"))
                                    deleteBandMutation.mutate(band);                            
                            }}>
            Delete</button>

        </div>
    )
}

export default BandAdminDetail