import { useNavigate } from "react-router-dom";
import { useDeleteShow } from "../hooks/ShowHooks";
import { Show } from "../types/show";
import TimeConverter from "./TimeConverter";

type Args = {
  show:Show,
  user:string|undefined
  };

const UpcomingShow = ({show, user}:Args) => {

    const deleteShowMutation = useDeleteShow();
    const nav = useNavigate();
    
    const niceTime = TimeConverter(show.time)

    return (
        <>
        <div className={user == "admin" ? "stop stopWithDelete" : "stop"} key={show.id}>
                <span className="stop-date mono">{show.date} {niceTime} </span>
                <div className="stop-info">
                <span className="venue">{show.venue && show.venue.name}</span>
                <span className="note">{show.venue && show.venue.address}</span>
                </div>
                <span className="stop-tag">No cover!</span>
                {user == "admin" && 
                    <button 
                        className="editImageButton btn-danger"
                        onClick={() => {                                
                                   nav(`/show/edit/${show.id}`);                            
                            }}>
                        Edit</button>
                }
                {user == "admin" && 
                    <button 
                        className="deleteImageButton btn-danger"
                        onClick={() => {
                                if (window.confirm("Are you sure you want to delete this show?"))
                                    deleteShowMutation.mutate(show);                            
                            }}>
                        Delete</button>
                }
        </div>
        </>
    )
}

export default UpcomingShow