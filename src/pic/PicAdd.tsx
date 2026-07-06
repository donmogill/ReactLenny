import { useAddPic } from "../hooks/PicHooks";
import type { Pic } from "../types/pic";
import PicForm from "./PicForm";

const PicAdd = () => {
    const addPicMutation = useAddPic();

    const pic: Pic = {
        id: 0,
        filename: "",
        displayOrder: 0
    };

    return (
        <PicForm
            pic={pic}
            submitHandler={(pic: Pic) => addPicMutation.mutate(pic)}
        />
    );
    
}

export default PicAdd;