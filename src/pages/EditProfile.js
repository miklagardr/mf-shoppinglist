import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { updateEmail, updatePassword , deleteUser} from "../store";
import { useDispatch } from "react-redux";
import { Alert } from "@mui/material";

export default function EditProfile() {
  const { user } = useSelector((state) => ({
    user: state.user.user,
  }));
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState(user.email);
  const [alert, setAlert] = React.useState();
  const [password, setPassword] = React.useState();
  const [newPassword, setNewPassword] = React.useState();
  const [deleteModal, setDeleteModal] = React.useState(false);

  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(updateEmail(email))
      .unwrap()
      .then((response) => {
        setAlert(<Alert severity="success">{response}</Alert>);
      })
      .catch((err) => {
        setAlert(<Alert severity="error">{err}</Alert>);
      });
  };

  const handlePassword = () => {
    if (!password || !newPassword) {
      setAlert(
        <Alert severity="error">Please fill in both password fields</Alert>
      );
      return; // Exit the function early
    }
    const data = {
      username: user.username,
      password: password,
      newPassword: newPassword,
    };
    dispatch(updatePassword(data))
      .unwrap()
      .then((response) => {
        setAlert(<Alert severity="success">{response}</Alert>);
      })
      .catch((err) => {
        setAlert(<Alert severity="error">Password is incorrect</Alert>);
      });
    setPassword("");
    setNewPassword("");
  };

  const handleClickOutsideModal = (e) => {
    if (e.target.classList.contains("bg-gray-500")) {
      setDeleteModal(false);
    }
  };

  React.useEffect(() => {
    if (deleteModal) {
      document.addEventListener("click", handleClickOutsideModal);
    } else {
      document.removeEventListener("click", handleClickOutsideModal);
    }
    return () => {
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, [deleteModal]);

  const handleDelete = () => {
    dispatch(deleteUser(user)).unwrap().then(() => {
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
    ).catch((err) => {
      setAlert(<Alert severity="error">{err}</Alert>);
    }
    );
  }

  setTimeout(() => {
    setAlert(null);
  }, 7000);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <h1 className="text-center text-3xl">Edit Profile</h1>
        <div className="grid grid-cols-2 text-center mt-12">
          <div className="col-span-1">
            <h3>Edit Email</h3>
            <div>
              <input
                type="email"
                placeholder={"Enter new email"}
                className="border border-gray-300 p-2 rounded-md w-80"
                value={email}
                onInput={handleInput}
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
              >
                Save
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <h3>Edit Password</h3>
            <div className=" flew-col">
              <div className="mb-2">
                <label htmlFor="password">Current Password : </label>
                <input
                  type="password"
                  className="border border-gray-300 p-2 rounded-md w-80"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div>
                <label htmlFor="password">Enter new password : </label>
                <input
                  type="password"
                  className="border border-gray-300 p-2 rounded-md w-80"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                />
              </div>

              <button
                onClick={handlePassword}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-2 "
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24 flex justify-center">
          <button
            onClick={() => {
              setDeleteModal(true);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
          >
            Delete Account
          </button>
        </div>
      </div>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
        {alert}
      </div>
      {deleteModal && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 flex items-center justify-center"
          onClick={handleClickOutsideModal}
        >
          <div
            className="bg-white p-8 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-center text-2xl">
              Are you sure you want to delete your account?
            </h2>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteModal(false)}
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
