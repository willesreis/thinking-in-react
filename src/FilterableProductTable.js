import { useState } from "react";
import './FilterableProductTable.css';

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = (props) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const handleFilterTextChange = (filterText) => setFilterText(filterText);
  const handleInStockChange = (inStockOnly) => setInStockOnly(inStockOnly);

  return (
    <fieldset className="FilterableProductTable">
      <legend>Filter products</legend>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={handleFilterTextChange}
          onInStockChange={handleInStockChange} />
        <ProductTable
          products={props.products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
    </fieldset>
  );
}

export default FilterableProductTable;
