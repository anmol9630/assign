import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./component/Post";
import PuffLoader from "react-spinners/PuffLoader";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(false);

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
      },1500);
    }
  };

  const newListHandler = () => {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    setValue(randomValue);
    console.log(randomValue);
  };

  useEffect(() => {
    fetchData(value);
  }, [value]);

  return (
    <>
      <div className="w-full h-screen bg-white  grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 bg-[#000A30]   p-5 md:w-64 ">
          <h1 className="text-white text-2xl  font-semibold mb-4">DashBoard</h1>
          <button
            onClick={newListHandler}
            className={
              " text-white mt-5 font-semibold bg-[#152561] p-3 rounded-lg " +
              (loading ? " disabled " : "")
            }
          >
            Create New List
          </button>
          <p className="text-white mt-5 font-semibold bg-[#152561] p-3 rounded-lg w-36">
            Current Post : {value}
          </p>
        </div>

        <div className="col-span-1 md:col-span-3 w-full h-screen pr-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {loading ? (
            <div className="col-span-full flex items-center justify-center w-full h-screen bg-white">
              <PuffLoader loading={true} size={150} />
            </div>
          ) : (
            data.map((item, index) => (
              <Post email={item.email} body={item.body} key={index} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
