import React, { useState } from 'react';


import { useUploadPic } from "../hooks/PicHooks";

const PicAdd = () => {
  const [file, setFile] = useState(null);

  const uploadMutation = useUploadPic();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) uploadMutation.mutate(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div className="mt-2">
        <img src={file ? URL.createObjectURL(file) : ''} className="carouselThumbnail" alt="Preview" />
      </div>
      <button onClick={handleUpload} disabled={uploadMutation.isPending}>
        {uploadMutation.isPending ? 'Uploading...' : 'Upload File'}
      </button>
      {uploadMutation.isError && <p>Error uploading file.</p>}
      {uploadMutation.isSuccess && <p>Upload complete!</p>}
    </div>
  );
};

export default PicAdd;
