import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { fetchSingleProduct } from "../store";
import { useDispatch } from "react-redux";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getRandomNumber = (usedNumbers) => {
      let number;
      do {
        number = Math.floor(Math.random() * 100) + 1;
      } while (usedNumbers.includes(number));
      return number;
    };
  
    // Kullanılan sayıları takip etmek için bir dizi
    const usedNumbers = [];
  
    // 8 tane rastgele sayı üret
    const randomNumbers = Array.from({ length: 20 }, () => {
      const randomNumber = getRandomNumber(usedNumbers);
      usedNumbers.push(randomNumber);
      return randomNumber;
    });
  
    // Her bir sayı için fetchSingleProduct'i çağır ve products state'ini güncelle
    Promise.all(
      randomNumbers.map((number) =>
        dispatch(fetchSingleProduct(number)).unwrap()
      )
    )
      .then((responses) => {
        // responses içinde her bir fetchSingleProduct çağrısının sonuçları bulunuyor
        setProducts(responses);
      })
      .catch((error) => {
        // Hata yönetimi burada yapılabilir
        console.error("Hata oluştu:", error);
      });
  }, []);
  
  
  const handleProduct = (productID) => {
    navigate(`/singleproduct/${productID}`)
  }

  const sliderRef = useRef();
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="justify-center bg-gray-100">
        <div className=" text-center">
          <div>
            <h1 className="text-6xl font-thin tracking-wider mb-4 p-2">
              Welcome to PrestigeBazaar
            </h1>
            <p className="text-gray-600 mb-4">The best place to buy products</p>
          </div>
          <div>
            <img
              style={{ height: "500px" }}
              className="object-cover w-full mx-auto"
              src="https://chargebacks911.com/wp-content/uploads/2023/08/Online-vs-In-Store-Shopping-blog.jpg"
              alt="products"
            />
          </div>
          <div>
            <h2 className="text-4xl font-thin tracking-wider my-4 p-2 uppercase">
            featured products
            </h2>
          </div>
          <div className="container mx-auto my-8 relative">
            <div className="flex overflow-x-auto" ref={sliderRef}>
              {products.map((product, index) => (
                <div
                  key={product.productID}
                  className="flex-none w-64 h-60vh mx-2 bg-white rounded-md shadow-md flex flex-col"
                >
                  <img
                    src={product.thumbnail}
                    alt={`Product ${index + 1}`}
                    className="w-full h-36 object-cover rounded-t-md"
                  />
                  <div className="p-4 grid grid-row-3 flex-grow">
                    {" "}
                    {/* flex-grow ekledik */}
                    <h3 className="text-lg font-semibold uppercase">
                      {product.title}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  <div className="mt-auto">
                    <button onClick={() => handleProduct(product.productID)} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">
                      Go to product
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-3">
              <button
                className="text-white bg-gray-800 px-4 py-2 rounded-full"
                onClick={scrollLeft}
              >
                <FcPrevious />
              </button>
              <button
                className="text-white bg-gray-800 px-4 py-2 rounded-full"
                onClick={scrollRight}
              >
                <FcNext />
              </button>
            </div>
          </div>

          <button className="border-solid p-3 border rounded-full my-10 bg-slate-50 hover:bg-slate-500 transition duration-200 text-xl bg-opacity-70">
            <Link to="/products">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full text-white text-xl">
                Get Started
              </button>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
