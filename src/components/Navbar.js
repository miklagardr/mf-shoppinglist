import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { LiaProductHunt } from "react-icons/lia";
import { BiCategory } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, shop } = useSelector((state) => {
    return {
      user: state.user.user,
      shop: state.shop.shop,
    };
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="bg-gradient-to-r from-red-500 via-blue-200 to-red-500 border-b border-black">
      <div className="flex items-center h-28">
        <div className="container flex items-center justify-between">
          <a href="/" className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="120"
              height="120"
              viewBox="0 0 500.000000 500.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path d="M1790 3098 c-87 -29 -171 -110 -188 -181 l-13 -48 -26 32 c-15 17 -42 38 -60 45 -44 19 -145 18 -191 -2 -37 -15 -37 -15 -16 -32 12 -9 40 -43 63 -74 23 -32 50 -62 60 -68 26 -13 80 -13 120 1 l31 11 -22 40 c-27 48 -69 82 -118 96 -23 7 -28 11 -14 11 59 3 135 -47 159 -104 30 -72 30 -75 -9 -75 l-36 0 -1 -97 0 -98 -20 45 c-29 65 -64 106 -113 135 -80 47 -182 43 -260 -10 l-36 -24 0 24 c0 25 -1 25 -85 25 l-85 0 0 -385 0 -385 85 0 85 0 0 150 c0 83 1 150 3 150 1 0 24 -11 51 -25 62 -31 160 -34 222 -6 49 22 110 91 135 151 l18 45 0 -102 1 -103 85 0 85 0 0 140 c0 150 11 199 48 219 26 14 107 14 132 1 17 -9 24 -2 56 62 34 67 35 73 19 84 -10 7 -38 16 -62 20 l-45 6 30 32 c37 38 55 74 77 151 9 33 27 80 41 104 13 24 24 47 24 52 0 18 -163 9 -230 -13z m29 -66 c-88 -57 -159 -169 -159 -252 0 -24 -4 -30 -21 -30 -20 0 -21 4 -16 55 10 103 68 179 175 231 65 32 75 30 21 -4z m-49 -285 c0 -1 -16 -17 -35 -36 l-35 -33 0 36 c0 34 2 36 35 36 19 0 35 -1 35 -3z m-480 -155 c63 -47 61 -153 -3 -192 -79 -49 -172 -8 -184 79 -15 109 99 178 187 113z" />
                <path d="M3198 3041 c-28 -25 -33 -36 -33 -75 0 -36 6 -51 28 -73 22 -22 37 -28 73 -28 39 0 50 5 75 33 42 46 40 93 -5 138 -45 45 -92 47 -138 5z" />
                <path d="M2898 2853 l-3 -98 -65 2 c-243 8 -233 9 -282 -15 -61 -30 -88 -73 -88 -140 0 -69 35 -109 136 -153 67 -30 75 -36 72 -59 -4 -37 -63 -40 -125 -5 -53 29 -54 29 -97 -47 l-27 -46 23 -16 c47 -33 116 -48 206 -44 144 6 202 49 210 155 6 93 -33 135 -170 184 -49 17 -58 24 -58 45 0 22 4 24 49 24 26 0 63 -5 81 -12 29 -9 35 -9 47 7 11 16 13 17 13 3 0 -12 11 -18 38 -20 l37 -3 5 -140 c6 -156 18 -193 77 -228 29 -17 47 -18 202 -11 l171 7 1 116 c1 91 3 108 10 78 20 -86 80 -162 151 -191 54 -23 172 -21 226 4 l42 19 0 -25 c0 -45 -26 -90 -63 -107 -61 -29 -137 -19 -185 26 l-22 21 -70 -34 c-39 -19 -70 -37 -70 -42 0 -17 76 -91 113 -110 87 -44 263 -39 351 10 97 55 126 127 126 316 1 99 1 100 16 66 22 -50 81 -109 139 -136 60 -29 176 -33 246 -9 48 17 112 64 129 96 9 16 3 22 -51 49 l-61 31 -37 -25 c-55 -38 -132 -37 -172 3 -16 16 -29 39 -29 50 0 21 4 21 185 21 l185 0 0 38 c0 54 -24 127 -54 167 -14 18 -50 45 -80 60 -143 70 -311 23 -386 -107 l-30 -53 0 88 0 87 -90 0 c-84 0 -90 -1 -90 -20 0 -20 -1 -20 -43 5 -147 85 -331 2 -373 -168 -12 -52 -12 -51 -13 65 l-1 117 -137 3 -138 3 -3 98 -3 97 -84 0 -84 0 -3 -97z m1404 -223 c14 -11 28 -29 31 -40 5 -19 1 -20 -94 -20 -54 0 -99 4 -99 9 0 5 12 23 26 40 21 26 33 31 69 31 27 0 51 -7 67 -20z m-1126 -23 c2 -7 3 -67 1 -133 -2 -75 -6 -111 -11 -97 -7 18 -12 20 -32 13 -19 -8 -29 -5 -44 10 -17 17 -20 34 -20 120 l0 100 50 0 c33 0 52 -5 56 -13z m540 -3 c42 -20 64 -59 64 -115 0 -33 -6 -47 -34 -75 -29 -29 -41 -34 -81 -34 -60 0 -101 28 -115 79 -17 64 9 123 65 147 40 18 60 17 101 -2z" />
                <path d="M2113 2760 c-17 -4 -52 -19 -76 -34 -154 -90 -182 -291 -57 -416 57 -57 103 -74 205 -78 86 -4 93 -2 154 30 35 18 75 47 88 65 l25 32 -65 32 -65 32 -32 -26 c-45 -38 -125 -38 -169 -1 -19 16 -31 35 -31 50 l0 24 185 0 185 0 0 33 c0 18 -7 58 -16 88 -39 129 -185 204 -331 169z m142 -135 c47 -46 36 -55 -70 -55 -106 0 -117 9 -70 55 34 35 106 35 140 0z" />
                <path d="M2470 2005 c-102 -13 -189 -24 -194 -24 -9 -1 -2 -109 8 -118 3 -3 45 -1 93 4 48 6 90 9 92 7 3 -3 -117 -244 -129 -257 -4 -5 -42 71 -85 167 -43 97 -79 176 -81 176 -2 0 -36 -14 -75 -32 -57 -25 -70 -35 -66 -50 5 -17 1 -18 -36 -13 -50 8 -126 -15 -176 -52 -45 -34 -81 -114 -81 -180 l0 -52 -42 19 c-52 24 -135 26 -186 4 -65 -27 -142 -119 -142 -169 0 -9 -4 -15 -9 -13 -4 2 -61 60 -126 130 l-117 127 -59 -51 c-33 -28 -59 -54 -59 -58 0 -4 122 -138 271 -299 l272 -292 58 57 c55 54 58 59 42 76 -15 17 -15 18 3 18 73 0 162 62 195 135 10 22 19 61 19 87 l0 46 31 -15 c96 -48 237 -7 285 83 18 33 19 34 34 15 15 -19 16 -19 70 3 41 18 107 29 264 47 115 13 214 28 220 34 7 9 19 5 44 -12 69 -46 150 -55 221 -23 l43 20 -6 -24 c-7 -28 -5 -29 88 -45 62 -11 75 -6 76 29 0 8 11 -8 24 -37 41 -87 141 -143 231 -128 32 5 38 4 28 -6 -22 -22 -15 -36 30 -63 24 -14 73 -54 108 -90 l64 -66 102 95 c57 52 114 97 129 101 41 10 89 -18 110 -65 13 -28 24 -39 34 -35 8 3 41 12 73 21 31 9 57 20 57 25 0 5 -9 26 -20 48 -28 54 -72 83 -137 88 l-54 5 22 23 22 24 -49 54 c-27 30 -54 54 -60 55 -6 1 -19 -9 -30 -20 -10 -12 -63 -62 -116 -111 l-98 -90 85 148 c94 166 94 152 4 203 -51 28 -58 29 -70 15 -11 -14 -15 -11 -31 20 -10 19 -33 46 -51 60 -109 83 -243 73 -332 -26 l-36 -39 7 38 c3 21 13 69 20 107 8 38 13 71 11 72 -7 7 -152 32 -159 27 -5 -2 -8 -12 -8 -20 0 -13 -6 -11 -27 9 -36 33 -60 45 -119 58 -149 34 -293 -106 -282 -272 4 -55 3 -57 -21 -62 -60 -12 -141 -18 -141 -11 0 5 41 86 90 181 50 95 90 175 90 178 0 10 -66 5 -260 -19z m591 -158 c23 -14 49 -60 49 -86 0 -105 -121 -157 -194 -84 -21 20 -26 35 -26 72 0 27 7 56 16 70 33 46 105 59 155 28z m-971 -126 c14 -10 31 -36 38 -59 12 -35 11 -45 -3 -76 -17 -35 -65 -66 -105 -66 -57 0 -110 59 -110 123 0 52 78 112 130 101 14 -3 36 -13 50 -23z m1480 -56 c53 -27 73 -91 46 -143 -46 -90 -160 -88 -205 3 -29 59 33 155 100 155 17 0 43 -7 59 -15z m-1914 -249 c28 -28 34 -42 34 -76 0 -34 -6 -48 -34 -76 -28 -28 -42 -34 -76 -34 -34 0 -48 6 -76 34 -29 29 -34 41 -34 79 0 37 5 51 31 76 25 26 39 31 76 31 38 0 50 -5 79 -34z" />
              </g>
            </svg>
          </a>
          <div className="flex items-center">
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none p-2"
              >
                <VscThreeBars />
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-2xl p-2">
            <Link to="/" className="nav-link transition duration-500">
              <GoHome />
            </Link>
            <Link to="/products" className="nav-link transition duration-500">
              <LiaProductHunt />
            </Link>
            <Link to="/categories" className="nav-link transition duration-500">
              <BiCategory />
            </Link>
            <Link
              to="/cart"
              className="nav-link transition duration-500 relative"
            >
              {shop.length > 0 && (
                <span className="absolute -top-4 left-4 border text-gray-900 rounded-2xl px-1 text-sm ">
                  {shop.length}
                </span>
              )}
              <HiOutlineShoppingBag />
            </Link>
            <Link
              to="/profile"
              className="nav-link transition duration-500 relative"
            >
              <CgProfile />
            </Link>
            <Link
              onClick={handleLogout}
              to="/"
              className="nav-link transition  duration-500"
            >
              <IoIosLogOut />
            </Link>
            <div className="flex items-center border uppercase p-1 rounded-full text-sm">
              <p className="text-white">{user.username}</p>
            </div>
          </div>
        </div>
      </div>

      {isOpen && window.innerWidth <= 768 && (
        <div className="flex justify-center space-x-4 p-4 md:hidden">
          <Link to="/" className="nav-link border border-blue-950 rounded p-1">
            Home
          </Link>
          <Link
            to="/products"
            className="nav-link border border-blue-950 rounded p-1"
          >
            Products
          </Link>
          <Link
            to="/categories"
            className="nav-link border border-blue-950 rounded p-1"
          >
            Categories
          </Link>
          <Link
            to="/cart"
            className="nav-link border border-blue-950 rounded p-1"
          >
            Cart
          </Link>
          <Link
            onClick={handleLogout}
            to="/"
            className="nav-link border border-blue-950 rounded p-1"
          >
            Logout
          </Link>
          <Link
            
            to="/profile"
            className="nav-link border border-blue-950 rounded p-1"
          >
            Profile
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
