import React from "react";
import useFetch from "../../data/usefetch";
import Card from "../cards/Card";
import Newslist from "../cards/Newslist";
import Heading from "../heading/heading";

const Sports = () => {
  const apikey = "fb7adad0035f4e3c965f9d1ba5ab3a9f";
  const sportnewsurl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=sports`;

  const [data, loading] = useFetch(sportnewsurl);

  return (
    <div>
      <div className="container py-4 py-xl-5 pt-xl-4">
        <Heading title={"News"} loading={loading} />
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <Newslist news={data} />
        </div>
      </div>
    </div>
  );
};

export default Sports;
