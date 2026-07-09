import { Link } from "react-router-dom";
import ApiStatus from "../ApiStatus";
import useFetchPics, { useDeletePic } from "../hooks/PicHooks";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "../config/config";
import { Reorder } from "motion/react"
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Pic } from "../types/pic";

const PicList = () => {
    

    const { data, status, isSuccess } = useFetchPics(); 
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
      
          <Reorder.Group axis="y" values={localPics} onReorder={setLocalPics}>
            {localPics && localPics.map((p)=> (
                <Reorder.Item key={p.id} value={p}>
                <tr className="my-custom-row" key={p.id} >
                    <td>{p.filename}</td>
                    <td>{p.displayOrder}</td>
                    <td><img src={`${config.baseApiUrl}/Uploads/${p.filename}`} className="carouselThumbnail" alt={p.filename} /></td>
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
                </Reorder.Item>
            ))}
            </Reorder.Group>
           
      <Link to="/pic/add" className="btn btn-primary">Add Picture</Link>
    </div>
    );
};

export default PicList;