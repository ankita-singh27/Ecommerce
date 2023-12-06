import React from "react";
import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";

const FilterSection = () => {
  const {
    all_products,
    updateFilterValue,
    clearFilters,
    filters: { text, category, price, maxPrice, minPrice },
  } = useFilterContext();

  // get the unique values of category
  const getUniqueData = (data) => {
    let newVal = data.map((curElem) => {
      return curElem.category;
    });

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of category in an array format
  const categoryData = getUniqueData(all_products);

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search Here..."
            autoComplete="off"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Filter By Price</h3>
        <div className="filter-min-max-price">
          <p>
          <FormatPrice price={minPrice} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
          <p>
            <FormatPrice price={price} />
          </p>
        </div>
      </div>

       <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div> 

    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .filter-search {
    input {
      padding: 0.8rem 1rem;
      width: 90%;
    }
  }

  .filter-category {
    h3 {
      padding: 2rem 0;
      font-size: bold;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
    .filter-min-max-price {
      display: flex;
      align-items: center;
    }
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .filter-category {
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.4rem;
      }
    }
  }
`;
export default FilterSection;
