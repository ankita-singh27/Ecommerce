import React from 'react'
import { useFilterContext } from '../context/filter_context';
import styled from 'styled-components';


const FilterSection = () => {

  const {
    filters: { text },updateFilterValue
  } = useFilterContext();
  

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
`;
export default FilterSection