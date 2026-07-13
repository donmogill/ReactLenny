import { useAddShow } from "../hooks/ShowHooks";
import { Show } from "../types/show"
import ValidationSummary from "../ValidationSummary";
import ShowForm from "./ShowForm";


const ShowAdd = () => {
    const addShowMutation = useAddShow();
    
    
    const today = new Date();
    const todayStringNice = today.toISOString().split('T')[0];    

    const show: Show = {
        id: 0,
        BandName: "",
        VenueId:0,
        date:todayStringNice,
        time:"21:00:00"
    };     

    return (
        <>
        {addShowMutation.isError &&
            (<ValidationSummary error={addShowMutation.error} />)
        }
        <h1 className="addShowTitle">Add New Show</h1>
        <ShowForm
            show={show}
            submitHandler={(show: Show) => addShowMutation.mutate(show)}                      
        />
        </>
    );
    
}

export default ShowAdd;