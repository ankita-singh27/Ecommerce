import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="common-heading">Top Rated Products</div>
        <Carousel responsive={responsive}>
          <div className="slides">Bookshelf</div>
          <div className="slides">Wardrobe</div>
          <div className="slides">Drawers</div>
          <div className="slides">Leather Sofa</div>
          <div className="slides">Hiking Boots</div>
          <div className="slides">Gaming Headset</div>
          <div className="slides">Bluetooth Earbuds</div>
          <div className="slides">Recliner Chair</div>
        </Carousel>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .slides {
    height: 15rem;
    width: 23rem;
    font-size: 3rem;
    border: 2px solid black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    &:hover {
      border: 2px solid red;
      color: red;
      transition: 0.3s ease-in-out;
    }
  }
`;
export default TopProducts;
