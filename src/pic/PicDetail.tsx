import config from "../config/config";
import { Pic } from "../types/pic";
import { useDeletePic } from "../hooks/PicHooks";

type Args = {
  detail:Pic
};

const PicItem = ({detail}:Args) => {

    const deleteHouseMutation = useDeletePic(); 

    return (
        <div>
            
          <div className="">
          <img draggable={false} src={`${config.baseApiUrl}/Uploads/${detail.filename}`} className="carouselThumbnail" 
            alt={detail.filename} />
          </div>
          <div className="deleteImageButtonDiv"></div>
          <span>{detail.filename}</span>
          <button                          
              className="deleteImageButton btn-danger"
              onClick={() => {
                                if (window.confirm("Are you sure you want to delete this picture?"))
                                    deleteHouseMutation.mutate(detail);                            
                            }}>
              Delete
          </button>   
        </div>        
    );
}

export default PicItem