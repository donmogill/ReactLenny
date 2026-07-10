import React, { useState } from 'react';
import { useUploadPic } from "../hooks/PicHooks";
import { useNavigate } from 'react-router-dom';
import PicUpload from './PicUpload';

const PicAdd = () => {
  const [file, setFile] = useState<File | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | undefined>();

  const navigate = useNavigate();

  const uploadMutation = useUploadPic();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setObjectUrl(URL.createObjectURL(selectedFile));
    }
  };  

  const handleUpload = (file:File | null) => {
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
    <PicUpload 
      objectUrl = {objectUrl} 
      file={file} 
      handleFileChange = {handleFileChange} 
      handleUpload = {handleUpload} 
      returnToList = {returnToList}
      uploadMutation = {uploadMutation}
    />
  );
};

export default PicAdd;
