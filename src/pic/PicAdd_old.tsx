import { useAddPic } from "../hooks/PicHooks";
import type { Pic } from "../types/pic";
import ValidationSummary from "../ValidationSummary";
import PicForm from "./PicForm";

const PicAddOld = () => {
    const addPicMutation = useAddPic();

    const pic: Pic = {
        id: 0,
        filename: "",
        displayOrder: 0
    };

    return (
        <>
        {addPicMutation.isError &&
            (<ValidationSummary error={addPicMutation.error} />)
        }
        <PicForm
            pic={pic}
            submitHandler={(pic: Pic) => addPicMutation.mutate(pic)}
        />
        </>
    );
    
}

export default PicAdd;