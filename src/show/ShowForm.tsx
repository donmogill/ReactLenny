import { useState } from "react";
import { Show } from "../types/show";
import { Venue } from "../types/venue";
import { useFetchVenues } from "../hooks/ShowHooks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

type Args = {
    show: Show;
    submitHandler: (show: Show) => void;       
}

const ShowForm = ({ show, submitHandler  }: Args) => {

    const navigate = useNavigate();

    const [showState, setShowState] = useState({...show});

    const {data:venues} = useFetchVenues();

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        submitHandler(showState);
    };    

    const cancelReturnToList = () => { navigate("/upcomingShows/admin")  }  

    return (
        <form className="addShowForm">
            <div className="form-group">
                <label htmlFor="BandName">Band Name</label>
                <input
                    type="text"
                    id="BandName"
                    className="form-control"
                    value={showState.bandName}
                    onChange={(e) =>
                        setShowState({ ...showState, bandName: e.target.value })
                    }
                />
            </div>   
            <div className="form-group">
                <label>
                    Venue
                    <select 
                        name="venue"
                        value={showState.venueId} 
                        onChange={(e) => setShowState({ ...showState, venueId: Number(e.target.value) })}>
                    <option value="">--Please choose one--</option>
                    {venues && venues.map((venue: Venue) => (            
                        <option key={venue.id} value={venue.id}>{venue.name}</option>
                    ))}        
                    </select>
                </label>
            </div>   
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <DatePicker name="date" 
                    dateFormat="yyyy-MM-dd"                     
                    selected = {new Date(`${showState.date}T12:00:00-00:00`)}                    
                    onChange={(date) => setShowState({ ...showState, date: date && date.toISOString().split('T')[0]   })} />
            </div>  
            <div className="form-group">
                <label htmlFor="time">Time</label>
                <input value={showState.time} name="time" aria-label="Time" type="time"  onChange={(e) =>
                        setShowState({ ...showState, time: e.target.value })
                    }/>
            </div>   
            <div className="addShowButtons navlinks">
            <button
                className="btn btn-primary"
                disabled={!showState.bandName}
                onClick={onSubmit}>Submit
            </button>  
            <button
                className="btn btn-secondary"                
                onClick={cancelReturnToList}>Cancel
            </button>  
            </div>
        </form>
    );
};

export default ShowForm;