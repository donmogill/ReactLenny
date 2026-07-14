import { useAddVenue } from "../hooks/VenueHooks";
import ValidationSummary from "../ValidationSummary";
import {Venue} from "../types/venue";
import VenueForm from "./VenueForm";

const VenueAdd = () => {
    const addVenueMutation = useAddVenue();

    const venue: Venue = {
        id: 0,
        name: "",
        address: "",
        city: ""
    };

    return (
        <>
        {addVenueMutation.isError &&
            (<ValidationSummary error={addVenueMutation.error} />)
        }
        <h1 className="addShowTitle">Add New Venue</h1>
        <VenueForm
            venue={venue}
            submitHandler={(venue: Venue) => addVenueMutation.mutate(venue)}
        />
        </>
    );
    
}

export default VenueAdd;