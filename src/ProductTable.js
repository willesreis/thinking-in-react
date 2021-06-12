import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

const ProductTable = (props) => {
  const rows = []
  let lastCategory = null
  props.products.forEach((product) => {
    if (product.name.indexOf(props.filterText) === -1) {
      return
    }
    if (props.inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} category={product.category} />
      )
    }
    rows.push(
      <ProductRow key={product.name} product={product} />
    )
    lastCategory = product.category
  })

  return (
    <table>
      <thead>
        <tr>
          <th><i>Name</i></th>
          <th><i>Price</i></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable