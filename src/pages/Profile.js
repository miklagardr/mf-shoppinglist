import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => ({
    user: state.user.user,
  }));
  console.log(user);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              className="object-contain md:w-3/4 rounded-full h-[150px] w-[150px]"
              src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="profile"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-3xl font-bold mb-4 border-b">User Profile</h2>
            <p className="text-xl font-thin text-gray-700 mb-4 border-b">
              Username: {user.username}
            </p>
            <p className="text-xl font-thin text-gray-700 border-b mb-4">
              Email: {user.email}{" "}
            </p>
            <p className="text-xl font-thin text-gray-700 border-b mb-4">
              Membership: {user.membership ? "Premium" : "Standart"}
            </p>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-44">
                    <a href="/editprofile">Edit Profile</a>
                </button>
            </div>
           { user.username === "Admin" && <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-44">
                    <a href="/admin">Go to Admin Panel</a>
                </button>
            </div>}
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-44">
                    <a href="/orders">My orders</a>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
