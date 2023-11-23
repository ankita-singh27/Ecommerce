import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import { Container } from "./styles/Container";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://productdecisiveduck.onrender.com/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    title,
    price,
    numVotes,
    description,
    rating,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div  style={{color:"blue", fontSize:"5rem",textAlign:"center",marginTop:"5rem"}}>Loading.....</div>;
  }

  return (
    <Wrapper>
     
      <PageNavigation title={title} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <img src={image} alt={title}/>
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{title}</h2>
            <Star rating={rating} reviews={numVotes} />

            <p className="product-data-price">
              MRP:
              <del> {price + 250}</del> 
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: {price}
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Fast Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {numVotes> 100 ? "In Stock" : "Not Available"}</span>
              </p>
          
              <p>
                no of votes :<span> {numVotes} </span>
              </p>
            </div>
            <hr />
             <AddToCart product={singleProduct} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images img{
    height:100%;
    width:100%;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  

  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
