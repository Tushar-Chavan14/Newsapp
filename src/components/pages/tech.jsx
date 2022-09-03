import React from "react";
import Heading from "../heading/heading";
import useFetch from "../../data/usefetch";
import Newslist from "../cards/Newslist";

const Tech = () => {
  const apikey = "fb7adad0035f4e3c965f9d1ba5ab3a9f";
  const technewsurl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=technology`;

  const [data, loading] = useFetch(technewsurl);

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

export default Tech;
