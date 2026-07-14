import { useDeleteVenue } from "../hooks/VenueHooks";
import { Venue } from "../types/venue";

type Args = {
    venue:Venue    
}
const VenueDetail = ({venue}:Args) => {

    const deleteVenueMutation = useDeleteVenue();
    return (
        <div className="stop stopVenue" >
            <div className="stop-info">
            <span className="venue">{venue.name}</span>
            </div>
            <span className="venue">{venue.address}</span>
            <span className="venue">{venue.city}</span>
            <button 
                        className="deleteImageButton btn-danger"
                        onClick={() => {
                                if (window.confirm("Are you sure you want to delete this venue?"))
                                    deleteVenueMutation.mutate(venue);                            
                            }}>
            Delete</button>

        </div>
    )
};


export default VenueDetail;