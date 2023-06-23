import React from "react";
import {
  box,
  flag,
  offer,
  car,
  headphon,
} from "../styles/components/assets/icons";

const TransectionSection = () => {
  const arrayofobj = [
    {
      title: "Locally Owned",
      para: "We have local business and sell best quality clothes",
      img: flag,
    },
    {
      title: "Fast Delivery",
      para: "We provide fast delivery to our customers",
      img: car,
    },
    {
      title: "Easy Return",
      para: "We provide easy return policy. ",
      img: box,
    },
    {
      title: "Online Support",
      para: "We give 24/7 online support",
      img: headphon,
    },
    {
      title: "Best Offers",
      para: "We give best offers to our customers",
      img: offer,
    },
  ];

  return (
    <>
      {arrayofobj.map((el) => {
        return (
          <div className="section-main-wrapper">
            <div className="transaction-wrapper">
              <div className="transaction-icon">
                <img
                  src={el.img}
                  alt={el.title + "-img"}
                  className="card-image-deals"
                />
              </div>
              <span className="heading font-weight-700">{el.title}</span>
              <p className="content mt-4">{el.para}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TransectionSection;
