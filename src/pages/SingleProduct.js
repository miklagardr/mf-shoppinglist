import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderList, fetchSingleProduct, createOrderList } from "../store";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
function SingleProduct() {
  const { user, shop } = useSelector((state) => ({
    user: state.user.user,
    shop: state.shop,
  }));
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  const { productID } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(fetchSingleProduct(productID)).unwrap();
      setProduct(response);
    };
    fetchData();
  }, [dispatch, productID]);

  const handleAddCart = (product) => {
    if (shop.shop.length === 0) {
      const productArr = [];
      productArr.push(product);
      const orderCreate = {
        username: user.username,
        products: productArr,
        ordertotalprice: product.price,
      };
      dispatch(createOrderList(orderCreate));
    } else {
      const orderAdd = {
        username: user.username,
        product: product,
        ordertotalprice: product.price,
      };
      dispatch(addOrderList(orderAdd));
    }
  };
  console.log("selam", product);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              className="object-cover w-full md:w-3/4 mx-auto border rounded"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-3xl font-bold mb-4 border-b">{product.title}</h2>
            <p className="text-xl font-thin text-gray-700 mb-4 border-b">{`Price : ${product.price}`}</p>
            <p className="text-xl font-thin text-gray-700 border-b mb-4">{`Category: ${product.category}`}</p>
            <p className="text-xl font-thin text-gray-700 border-b mb-4">{`Brand: ${product.brand}`}</p>
            <button
              onClick={() => handleAddCart(product)}
              className="border-solid p-3 border rounded-full my-10 bg-slate-50 hover:bg-slate-500 transition duration-200 text-xl bg-opacity-70"
            >
              Add to Cart
            </button>
          </div>
        </div>
       
        <div className="mt-2">
          <h1 className="text-2xl font-bold mb-4 text-center border-b">Product Details</h1>
            <div className="grid grid-cols-3">
              <div className="border text-center my-10">
                <h2 className="border-b bg-slate-200">Product Description</h2>
                <p className="p-5">{product.description}</p>
              </div>
              <div className="border text-center my-10">
                <h2 className="border-b bg-slate-200">Product Rating</h2>
                <p className="p-5">{product.rating}</p>
              </div>
              <div className="border text-center my-10">
                <h2 className="border-b bg-slate-200">Product Stock</h2>
                <p className="p-5">{product.stock}</p>
              </div>
            </div>
        </div>
        <div className="mt-2">
          <h1 className="text-2xl font-bold mb-4 text-center border-b">Product Images</h1>
          <div className="flex justify-center p-3 my-5">
          <img
            className="object-contain w-44 mx-auto border rounded"
            src={product.images && product.images[0]}
            alt={product.title}
          />
          <img
            className="object-cover w-44 mx-auto border rounded"
            src={product.images && product.images[1]}
            alt={product.title}
          />
           <img
            className="object-cover w-44 mx-auto border rounded"
            src={product.images && product.images[2]}
            alt={product.title}
          />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
