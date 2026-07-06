import { useState } from "react";
import type { Pic } from "../types/pic";

type Args = {
    pic: Pic;
    submitHandler: (pic: Pic) => void;
  };

const PicForm   = ({ pic, submitHandler }: Args) => {
  const [picState, setPicState] = useState({...pic});

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    submitHandler(picState);
  };

  return (
    <form className="mt-2">
    <div className="form-group">
        <label htmlFor="filename">File Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="FileName"
          value={picState.filename}
          onChange={(e) =>
            setPicState({ ...picState, filename: e.target.value })
          }
        />
    </div>        
    <button
        className="btn btn-primary mt-2"
        disabled={!picState.filename}
        onClick={onSubmit}>Submit
    </button>

    </form>
  );
};

export default PicForm;