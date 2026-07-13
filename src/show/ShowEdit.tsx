import { useParams } from "react-router-dom";
import { useFetchShow, useUpdateShow } from "../hooks/ShowHooks";
import ValidationSummary from "../ValidationSummary";
import ApiStatus from "../ApiStatus";
import ShowForm from "./ShowForm";
import { Show } from "../types/show";

const ShowEdit = () => {
    
    const {id} = useParams();
    if (!id) throw Error("Need a show id");
    const { data, status, isSuccess } = useFetchShow(parseInt(id));
    const editShowMutation = useUpdateShow();

    if (!isSuccess) return <ApiStatus status={status} />;        

    return (
        <>
        {editShowMutation.isError &&
            (<ValidationSummary error={editShowMutation.error} />)
        }
        <h1 className="addShowTitle">Edit Show</h1>
        <ShowForm
            show={data}
            submitHandler={(show: Show) => editShowMutation.mutate(show)}
        />
        </>
    );    

};

export default ShowEdit;