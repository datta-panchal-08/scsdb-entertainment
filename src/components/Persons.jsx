import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import Card from './partials/Card';
import Topnav from './partials/Topnav';
import { useNavigate } from 'react-router-dom';
import Spinner from './partials/Spinner';

const Persons = () => {
  const [persons, setPersons] = useState([]);
  const navigation = useNavigate();
  document.title = "SCSDB | People";

  const getPersons = async () => {
    try {
      let { data } = await axios.get(`/person/popular`);
      setPersons(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    getPersons();
  }, []);

  return persons.length > 0 ? (
    <div className="w-screen h-screen overflow-y-auto bg-[#1F1E24]">
      {/* Top Navigation */}
      <div className="w-full flex items-center justify-between p-[2%]">
        <h1 className="md:text-2xl text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigation(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          People
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full p-[2%] text-white">
        <h1 className="text-3xl font-bold mb-5">Popular People</h1>

        {/* Card Component */}
        <Card data={persons} title={"person"} />
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Persons;
