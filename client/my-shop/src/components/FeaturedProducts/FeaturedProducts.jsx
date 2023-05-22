import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Welcome to our shopping website, where you can explore a world of trending and exciting products.
        We pride ourselves on curating a wide selection of items that cater to diverse tastes and interests. 
        Whether you're searching for the latest fashion trends,cutting-edge gadgets, or unique home decor, our website 
        offers a vast array of available products to suit every need. Stay ahead of the curve by browsing our trending 
        section,which showcases the most popular and sought-after items of the moment. With our user-friendly interface 
        and seamless shopping experience, finding your perfect purchase has never been easier.Discover the hottest 
        trends and explore a world of possibilities on our shopping website today.

        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;