import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
    const navigation = useNavigate();
  return (
    <div className="bg-black w-screen text-white h-screen p-6 overflow-auto">
       <Link className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigation(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          <small className="ml-1 font-semibold text-sm"></small>
        </Link>
      
      <main className="max-w-4xl mx-auto py-10">
        <section className="text-center">
          <h2 className="text-2xl font-semibold">Welcome to SCSDB</h2>
          <p className="mt-4 text-gray-300">
            Your ultimate destination for discovering movies, TV shows, celebrities, and entertainment news!
          </p>
        </section>
        
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Who We Are</h2>
          <p className="mt-2 text-gray-400">
            SCSDB is a comprehensive and user-friendly platform designed for movie and TV enthusiasts. Whether you're looking for the latest blockbusters, binge-worthy series, or insights into your favorite actors, we’ve got you covered.
          </p>
        </section>
        
        <section className="mt-10">
          <h2 className="text-xl font-semibold">What We Offer</h2>
          <ul className="mt-4 text-gray-300 list-disc list-inside">
            <li><strong>Movie & TV Show Database</strong> – Explore an extensive collection of films and shows.</li>
            <li><strong>Celebrity Profiles</strong> – Learn more about actors, directors, and industry professionals.</li>
            <li><strong>Trending & Popular Content</strong> – Stay updated with the latest entertainment news.</li>
          </ul>
        </section>
        
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-gray-400">
            At SCSDB, we aim to enhance your entertainment experience by providing a vast, well-organized, and easy-to-use platform for movie lovers, critics, and casual viewers alike.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
