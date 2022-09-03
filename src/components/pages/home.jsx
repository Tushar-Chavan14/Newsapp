import React, { useEffect, useState } from "react";
import Newslist from "../cards/Newslist";
import Heading from "../heading/heading";
import axios from "axios";
import useFetch from "../../data/usefetch";

const Home = () => {
  const apikey = "fb7adad0035f4e3c965f9d1ba5ab3a9f";
  const apiurl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;

  const [data, loading] = useFetch(apiurl);

  return (
    <>
      <div className="container py-4 py-xl-5 pt-xl-4">
        <Heading title={"News"} loading={loading} />
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <Newslist news={data} />
        </div>
      </div>
    </>
  );
};

export default Home;
