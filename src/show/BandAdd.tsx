import { useAddBand } from "../hooks/BandHooks";
import ValidationSummary from "../ValidationSummary";
import {Band} from "../types/band";
import BandForm from "./BandForm"

const BandAdd = () => {
    const addBandMutation = useAddBand();

    const band: Band = {
        id: 0,
        name: ""
    };

    return (
        <>
        {addBandMutation.isError &&
            (<ValidationSummary error={addBandMutation.error} />)
        }
        <h1 className="addShowTitle">Add New Band</h1>
        <BandForm
            band={band}
            submitHandler={(band: Band) => addBandMutation.mutate(band)}
        />
        </>
    );
    
}

export default BandAdd;