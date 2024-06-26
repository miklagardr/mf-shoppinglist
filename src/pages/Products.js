import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store';
import Navbar from '../components/Navbar';
import Alert from '@mui/material/Alert';
import { addOrderList, createOrderList } from '../store'; // Removed fetchSingleProduct import as it's not used
import { useNavigate } from 'react-router-dom';

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibleProduct, setVisibleProduct] = useState(10);
  const [addedToCart, setAddedToCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { products, shop, user } = useSelector((state) => ({
    products: state.products.products,
    shop: state.shop,
    user: state.user.user,
  }));

  const handleAddCart = (product) => {
    const productArr = [product];
    const orderCreate = {
      username: user.username,
      products: productArr,
      ordertotalprice: product.price,
    };
    const orderAdd = {
      username: user.username,
      product: product,
      ordertotalprice: product.price,
    };
    if (shop.shop.length === 0) {
      dispatch(createOrderList(orderCreate));
    } else {
      dispatch(addOrderList(orderAdd));
    }
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 5000);
  };

  const handleSingleProduct = (productID) => {
    navigate(`/singleproduct/${productID}`);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Decide which products to render based on search query
  const renderedProducts = (searchQuery ? filteredProducts : products)
    .slice(0, visibleProduct)
    .map((product) => {
      return (
        <div key={product._id} className='my-4 mx-2 border rounded grid grid-rows-1 text-center p-2 h-72 justify-center'>
          <img onClick={() => handleSingleProduct(product.productID)} className='row-span-2 h-full justify-center text-center mx-auto cursor-pointer' src={product.thumbnail} alt={product.name} />
          <div className='items-center mt-3'>
            <h2 className='text-xl font-bold'>{product.title}</h2>
            <p className='text-gray-600'>Price: {product.price}</p>
            <button onClick={() => handleAddCart(product)} className='bg-blue-500 text-white px-4 py-2 rounded mt-2 w-44'>Add to Cart</button>
          </div>
        </div>
      );
    });

  return (
    <div>
      <Navbar />
      <div className={`grid ${searchQuery && 'h-[600px]'}`}>
        <div className='flex justify-center text-center'>
          <span className='mx-2 text-gray-500 text-opacity-70'>Visible products : {visibleProduct}</span>
          <span className='mx-2 text-gray-500 text-opacity-70'>Total products : {products.length}</span>
        </div>
        <input
          type='text'
          placeholder='Search products...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='my-4 mx-auto w-64 px-4 py-2 border rounded h-10'
        />
        <div className='grid grid-cols-3 container gap-4'>{renderedProducts}</div>
        { visibleProduct < products.length &&  (
          <div className='text-center'>
            <button onClick={() => setVisibleProduct((prev) => prev + 10)} className='bg-blue-500 text-white px-4 py-2 rounded my-2 w-44 mx-auto '>Load More</button>
          </div>
        )}
        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 w-96'>
          {addedToCart && (
            <Alert severity='success' className='w-full'>
              Ürün sepete eklendi!
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
