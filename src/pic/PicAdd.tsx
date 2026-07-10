import React, { useState } from 'react';
import { useUploadPic } from "../hooks/PicHooks";
import { useNavigate } from 'react-router-dom';

const PicAdd = () => {
  const [file, setFile] = useState<File | null>(null);
  const [objectUrl, setObjectUrl] = useState<string>();

  const navigate = useNavigate();

  const uploadMutation = useUploadPic();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setObjectUrl(URL.createObjectURL(selectedFile));
    }
  };  

  const handleUpload = () => {
    if (file)
    {
        uploadMutation.mutate(file);
        URL.revokeObjectURL(objectUrl ?? "");         
    } 
  };

  const returnToList = () => {
     navigate("/pics");
  }  

  return (
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
      <button className="btn btn-primary" onClick={handleUpload} disabled={uploadMutation.isPending}>
        {uploadMutation.isPending ? 'Uploading...' : 'Submit'}
      </button>
      <button className="btn btn-secondary" onClick={returnToList}>Cancel</button>
      {uploadMutation.isError && <p>Error uploading file.</p>}
      {uploadMutation.isSuccess && <p>Upload complete!</p>}
      </div>
    </div>
  );
};

export default PicAdd;
