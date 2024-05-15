import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser , deleteUserByAdmin } from "../store";
import { LiaTimesSolid } from "react-icons/lia";


function UserInfos() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [deletedUser, setDeletedUser] = useState("");
  const { users, user } = useSelector((state) => {
    return {
      users: state.users.users,
      user: state.user.user,
    };
  });
  useEffect(() => {
    dispatch(getAllUser(user.username));
  },[]);

  const handleClickOutsideModal = (e) => {
    if (e.target.classList.contains("bg-gray-500")) {
      setModal(false);
    }
  };

  const handleDeleteUserAccount = () => {
    dispatch(deleteUserByAdmin({username : user.username, userusername : deletedUser}))
    .unwrap()
    .then(() => {
        setDeletedUser("")
        setModal(false)
    })
  };



  const renderedUsers = users.map((suser, index) => {
    return (
      <div className="border rounded-md flex justify-between" key={index}>
        <div className="grid p-2">
          <span>Username : {suser.username}</span>
          <span>Email : {suser.email}</span>
          <span>Membership : {suser.membership ? "Premium" : "Standart"}</span>
          <span>Password : {suser.password}</span>
        </div>
        <div className="flex justify-center mr-10">
          <button
            onClick={() => {
              setModal(true);
              setDeletedUser(suser.username);
            }}
            className="text-2xl"
          >
            <LiaTimesSolid />
          </button>
        </div>
      </div>
    );
  });

  return (
  
      <div className="container my-3">
        {renderedUsers}
        {modal && (
          <div
            className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex items-center justify-center"
            onClick={handleClickOutsideModal}
          >
            <div
              className="bg-white p-8 rounded-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-center text-2xl">
                Are you sure you want to delete this user's account?
              </h2>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleDeleteUserAccount}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => setModal(false)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}

export default UserInfos;
