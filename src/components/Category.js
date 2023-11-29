import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
    <Wrapper>
        <div className='container'>
        <div className="common-heading">Shop By Category</div>
        <div className="top-category-image">
        <figure>
        <img src='./images/furniture.png' alt="furniture"/>
        <figcaption className="fig-caption">furniture</figcaption>
        </figure>
        <figure>
        <img src='./images/shoes.png' alt="shoes"/>
        <figcaption className="fig-caption">shoes</figcaption>
        </figure>
        <figure>
        <img src='./images/Laptops.png' alt="laptop"/>
        <figcaption className="fig-caption">Laptops</figcaption>
        </figure>
        <figure>
        <img src='./images/books.png' alt="books"/>
        <figcaption className="fig-caption">books</figcaption>
        </figure>
        <figure>
        <img src='./images/bags.png' alt="bags"/>
        <figcaption className="fig-caption">bags</figcaption>
        </figure>
        <figure>
        <img src='./images/headphones.jpg'className='headphone-image' alt="headphone"/>
        <figcaption className="fig-caption">headphone</figcaption>
        </figure>
        
        </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

.top-category-image{
  display:flex;
}

  figure {
    position: relative;
  
  }
    .fig-caption {
      position: absolute;
      top: 5%;
      left: 8%;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
       background-color: ${({ theme }) => theme.colors.black};
      padding: 0.8rem 2rem;
      font-size: 1.6rem;
      font-weight: bold;
      border-radius: 2rem;
    }
  
    img{
    padding:0 1rem;
    width:21rem;
    height:24rem;

    &:hover{
      scale:1.03;
      transition: all 0.5s linear;
    }
  }
  

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 0 2.4rem;

    .top-category-image{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:2rem;  
    }

    .common-heading{
      margin-top:3rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;

    .top-category-image{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:2rem;
    }

    .common-heading{
      margin-top:3rem;
    }
  }


`
export default Category