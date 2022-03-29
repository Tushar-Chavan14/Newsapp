import React from "react";
import Newsitems from "./newsItems";

export default function NewsList({ news }) {

    console.log(news[0].title)

  return news.map((newsl) => (
    <Newsitems
      key={newsl.title}
      title={newsl.title}
      imgurl={newsl.urlToImage}
      desp={newsl.description}
      source={newsl.source.name}
      url={newsl.url}
    />
  ));
}
