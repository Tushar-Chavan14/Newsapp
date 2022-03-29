// https://newsapi.org/v2/top-headlines?country=in&apiKey=fb7adad0035f4e3c965f9d1ba5ab3a9f

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NewsList from "../newsCardlist/newsList";

export default function News() {
  const [news, setnews] = useState();
  const [loading, setloading] = useState(true)

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=fb7adad0035f4e3c965f9d1ba5ab3a9f"
      )
      .then((res) => {

        setnews(res.data.articles)

        setloading(false)
        
      })
      .catch((err) => {
        console.log(err);
      });

      
  }, []);

  

  if(loading){
    console.log(news)
      return(
          <p>loading...</p>
      )
  }

  return (
    <>
      <NewsList news={news} />
    </>
  );
}
