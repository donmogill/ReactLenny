import { useState } from "react";
import type { Venue } from "../types/venue"

type Args = {
    venue: Venue;
    submitHandler: (venue: Venue) => void;
  };

const VenueForm   = ({ venue, submitHandler }: Args) => {
  const [venueState, setPicState] = useState({...venue});

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    submitHandler(venueState);
  };

 

  return (
    <form className="addShowForm">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={venueState.name}
          onChange={(e) =>
            setPicState({ ...venueState, name: e.target.value })
          }
        />
    </div>            
    <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          className="form-control"
          value={venueState.address}
          onChange={(e) =>
            setPicState({ ...venueState, address: e.target.value })
          }
        />
    </div>            
    <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          className="form-control"
          value={venueState.city}
          onChange={(e) =>
            setPicState({ ...venueState, city: e.target.value })
          }
        />
    </div>            
    <button
        className="btn btn-primary mt-2"
        disabled={!venueState.name}
        onClick={onSubmit}>Submit
    </button>

    </form>
  );
};

export default VenueForm;