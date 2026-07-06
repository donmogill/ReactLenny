import { Link } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import useFetchPics, { useDeletePic } from "../hooks/PicHooks";
import "bootstrap/dist/css/bootstrap.min.css";

const PicList = () => {
    const { data: pics, status, isSuccess } = useFetchPics(); 
    const deleteHouseMutation = useDeletePic(); 

    if (!isSuccess) 
        return <ApiStatus status={status} />;

    return (
        <div>           


      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Pictures in the Slider (display order is used to determine which picture is shown first)
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr className="my-custom-row">
            <th>File Name</th>
            <th>Display Order</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {pics && pics.map((p)=> (
                <tr  className="my-custom-row" key={p.id} >
                    <td>{p.filename}</td>
                    <td>{p.displayOrder}</td>
                    <td><img src={`./${p.filename}`} className="carouselThumbnail" alt={p.filename} /></td>
                    <td>
                        <button                          
                            className="btn btn-danger"
                            onClick={() => {
                                if (window.confirm("Are you sure you want to delete this picture?"))
                                    deleteHouseMutation.mutate(p);                            
                            }}>
                            Delete
                        </button>                        
                    </td>
                </tr>
            ))}
        </tbody>
      </table>      
      <Link to="/pic/add" className="btn btn-primary">Add Picture</Link>
    </div>
    );
};

export default PicList;