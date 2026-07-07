import React, { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import config from '../config/config';

import { useUploadPic } from "../hooks/PicHooks";

const PicAdd = () => {
  const [file, setFile] = useState(null);

  const uploadMutation = useUploadPic();

  /*
  const uploadMutation = useMutation({
    mutationFn: async (fileToUpload) => {
      const formData = new FormData();

      formData.append('file', fileToUpload);

      
      const response = await fetch(`${config.baseApiUrl}/api/Upload`, {
        method: 'POST',
        body: formData        
      });

      if (!response.ok) throw new Error('Upload failed');
      return response.json();
      
    },
    onSuccess: (data) => {
      console.log('File uploaded successfully:', data);
    },
  });
  */

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
