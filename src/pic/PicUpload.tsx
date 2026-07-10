import { UseMutationResult } from "@tanstack/react-query";

type Args = {
  objectUrl:string | undefined;
  file: File | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpload: (file:File | null) => void;
  returnToList: () => void;
  uploadMutation: UseMutationResult<File, Error, File, unknown>;
};

const PicUpload = ({objectUrl, handleFileChange, handleUpload, file, uploadMutation, returnToList }:Args) => {
    
    return(
        <div>
      <div className="uploadPicTop">
        Add an image to the front page of the website...
      </div> 
      <div className="uploadPic">
        <label>Click "Choose file" to select an image:</label><br/>
        <input type="file" className="custom-file-input" onChange={handleFileChange} />
      </div>  
      { file &&
      <div className="uploadPic">
        <img src={ objectUrl } className="carouselThumbnail" alt="Preview" />
      </div>
      }
      <div className="uploadPic navlinks">
      <button className="btn btn-primary" onClick={() => handleUpload(file)} disabled={uploadMutation.isPending}>
        {uploadMutation.isPending ? 'Uploading...' : 'Submit'}
      </button>
      <button className="btn btn-secondary" onClick={returnToList}>Cancel</button>
      {uploadMutation.isError && <p>Error uploading file.</p>}
      {uploadMutation.isSuccess && <p>Upload complete!</p>}
      </div>
    </div> 
    );
};

export default PicUpload;