import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addProduct } from '../store';

function UploadPhoto() {
    const [dropDown, setDropdown] = useState(false);
    const [photoUrls, setPhotoUrls] = useState([]);
    const initialProduct = {
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: [],
        productID: 0,
        quantity: 1
    };

    const [product , setProduct] = useState(initialProduct);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setDropdown(!dropDown);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddPhoto = () => {
        if (inputValue.trim() !== '') {
            setPhotoUrls([...photoUrls, inputValue]);
            setInputValue('');
        }
    };

    const handleRemovePhoto = (index) => {
        const updatedUrls = [...photoUrls];
        updatedUrls.splice(index, 1);
        setPhotoUrls(updatedUrls);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (["price", "discountPercentage", "rating", "stock", "quantity"].includes(name)) {
            setProduct({ ...product, [name]: parseFloat(value) });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, images: photoUrls, productID: generateRandomID() };
        dispatch(addProduct(updatedProduct))
        .unwrap()
        .then(() => {
            setProduct(initialProduct);
            setPhotoUrls([]);
        });
    }

    const generateRandomID = () => {
        return Math.floor(Math.random() * 1000000) + Date.now();
    }

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
                <div>
                    <form className='text-center' onSubmit={handleSubmit}>
                        <label>Enter Product Photo URL</label>
                        <input
                            type='text'
                            value={inputValue}
                            onChange={handleInputChange}
                            className='border-2 border-gray-300 p-2 m-2 w-[70vh]'
                        />
                        <div className='text-center'>
                            <button type="button" onClick={handleAddPhoto} className='bg-green-500 text-white p-2 m-2'>Add Photo</button>
                        </div>
                        <div className='grid grid-cols-3'> 
                            {photoUrls.map((url, index) => (
                                <div key={index} className="mb-4">
                                    <div className=''>
                                        <img className='object-cover' src={url} alt="Preview" style={{ maxWidth: '100%', height: '300px' }} />
                                    </div>
                                    <button type="button" onClick={() => handleRemovePhoto(index)} className='bg-red-500 text-white p-2 m-2 flex justify-center'>Remove</button>
                                </div>
                            ))}
                        </div>
                        <div className='mb-4'>
                            <label>Title</label>
                            <input
                                type='text'
                                name='title'
                                value={product.title}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Description</label>
                            <input
                                type='text'
                                name='description'
                                value={product.description}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Price</label>
                            <input
                                type='number'
                                name='price'
                                value={product.price}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Discount Percentage</label>
                            <input
                                type='number'
                                name='discountPercentage'
                                value={product.discountPercentage}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Rating</label>
                            <input
                                type='number'
                                name='rating'
                                value={product.rating}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Stock</label>
                            <input
                                type='number'
                                name='stock'
                                value={product.stock}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Brand</label>
                            <input
                                type='text'
                                name='brand'
                                value={product.brand}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Category</label>
                            <input
                                type='text'
                                name='category'
                                value={product.category}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label>Thumbnail URL</label>
                            <input
                                type='text'
                                name='thumbnail'
                                value={product.thumbnail}
                                onChange={handleChange}
                                className='border-2 border-gray-300 p-2 m-2 w-full'
                            />
                        </div>
                        <button type='submit' className='bg-green-500 text-white p-2 m-2'>Upload Product</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default UploadPhoto;
