import React from "react";
import { product } from "../data/products";
import { useParams } from "react-router-dom";
export const ShopSingle = () => {
  const object = useParams();
  const data = product.find((item) => item.name === object.id);
  return (
    <div className="container">
      <h3>{data.category}</h3>
      <img src={data.image} alt="" />
      <h1>{data.name}</h1>
      <hr />
      <div className="flex">
        {" "}
        <p>{data.firstPrice}</p>
        <p>{data.secondPrice}</p>
        <samp>{data.rating}</samp>
      </div>
    </div>
  );
};
