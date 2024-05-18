import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { uploadPhoto } from '../store';
import { useDispatch } from 'react-redux';

function UploadPhoto() {
    const [dropDown, setDropdown] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        setDropdown(!dropDown);
    };
    const fileChangeHandler = (event) => {
        const selectedFile = event.target.files[0];
        setSelectedFile(selectedFile);
        if (selectedFile) {
          const reader = new FileReader();
          reader.readAsDataURL(selectedFile); // Dosyayı url'e çevir
          reader.onload = () => {
            setPreviewUrl(reader.result); // url'i state'e at
          };
         
        }
      };


      const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('productImg', selectedFile);
        dispatch(uploadPhoto(formData));
      }; 
  return (
    <div className='container mb-5'>
         <div
        className="border bg-gray-100 p-5 flex justify-between mb-4"
        onClick={handleOpenModal}
      >
        <div></div>
        <h2 className="text-xl text-center">Add Product</h2>
        <div className="text-3xl">
          {!dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {dropDown && 
        <div >
            <form className='text-center'>
                <label>Product Photo</label>
                <input type='file' accept='image/*' onChange={fileChangeHandler} className='border-2 border-gray-300 p-2 m-2'/>
                {previewUrl &&<div className='flex justify-center'><img src={previewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} /> </div> }
                <button onClick={handleFormSubmit} className='bg-blue-500 text-white p-2 m-2'>Add Product</button>
            </form>
        </div>
      }







    </div>
  )
}

export default UploadPhoto