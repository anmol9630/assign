import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./component/Post";
import PuffLoader from "react-spinners/PuffLoader";
import { FiMenu } from "react-icons/fi";
import { toast } from "react-toastify";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        toast.success("Data fetched successfully", { position: "top-center" });
      }, 1500);
    }
  };

  const newListHandler = () => {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    setValue(randomValue);
  };

  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col md:flex-row">
        <div className="bg-[#000A30] p-5 md:w-64 flex flex-col">
          <div className="flex items-center justify-between md:justify-center md:flex-col mb-4">
            <h1 className="text-white text-2xl font-semibold">Dashboard</h1>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <FiMenu className="text-white text-2xl" />
            </button>
          </div>
          <div
            className={`md:block ${
              isMenuOpen ? "block" : "hidden"
            } mt-4 md:mt-0`}
          >
            <button
              onClick={newListHandler}
              className={`px-4 py-2 mt-5 font-semibold text-white rounded ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              Create New List
            </button>
            <p className="text-white mt-5 font-semibold bg-[#152561] p-3 rounded-lg hover:bg-[#152561c6] ">
              Current Post: {value}
            </p>
          </div>
        </div>

        <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <PuffLoader loading={true} size={150} />
            </div>
          )}
          {!loading &&
            data.map((item, index) => (
              <Post email={item.email} body={item.body} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;

