import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="./images/image6.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/image3.jpeg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/image5.gif"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/image4.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="./images/image1.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
    transition: transform 0.3s ease-in-out;
  }
  img:hover {
    transform: scale(1.1);
    filter: brightness(50%);
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
`;

export default Trusted;
