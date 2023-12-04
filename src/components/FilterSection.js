import React from 'react'
import { useFilterContext } from '../context/filter_context';
import styled from 'styled-components';


const FilterSection = () => {

  const {
    all_products,updateFilterValue,
    filters: { text, category },
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
            autoComplete='off'
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
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

    </Wrapper>
  )
}

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

  @media (max-width: ${({ theme }) => theme.media.mobile}) {

    .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.4rem;
    }
  }

`;
export default FilterSection