import { useState } from "react";
import type { Band } from "../types/band"
import { useNavigate } from "react-router-dom";

type Args = {
    band: Band;
    submitHandler: (band: Band) => void;
  };

const BandForm   = ({ band, submitHandler }: Args) => {
  const [bandState, setPicState] = useState({...band});

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    submitHandler(bandState);
  }; 

  const navigate = useNavigate();
  
  const cancelReturnToList = () => { navigate("/bands")  } 

  return (
    <form className="addShowForm">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={bandState.name}
          onChange={(e) =>
            setPicState({ ...bandState, name: e.target.value })
          }
        />
    </div>    
    <div className="addShowButtons navlinks">
    <button
        className="btn btn-primary mt-2"
        disabled={!bandState.name}
        onClick={onSubmit}>Submit
    </button>
    <button
        className="btn btn-secondary mt-2"        
        onClick={cancelReturnToList}>Cancel
    </button>
    </div>
    </form>
  );
};

export default BandForm;