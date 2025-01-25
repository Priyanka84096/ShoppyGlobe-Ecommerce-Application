
import { useState } from "react";
import ProductItem from "./ProductItem"
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function ProductList(){
    // Local state to manage search input
    const [searchText, setSearchText] = useState("");
    // const [filteredProducts, setFilteredProducts] = useState([]);
     
    // using custom hook to fetch the products from dummyjson API.
    const { data: productsData , error, loading }= useFetch(
      "https://dummyjson.com/products");

      // const cartItems = useSelector((state) => state.cart.items);

    const filteredProducts = productsData ? productsData.products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
      ): [];
    // if there is error show error message
    if (error){
        return<p className="error">Error in loading products: {error}</p>;
    }
    // if loading show loading message
    if (loading){
        return <p className="loading">Loading..</p>
    }
      
    //return statement that renders the ProductList component
     return (
         <div className="product-list-container">
 
          <div className="search-container">
            <input
              type="text" placeholder="Search Products.."
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} ////  onchange of search input, sets the value in local state
            />
          </div>

         <div className="product-list">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                 <ProductItem key={product.id} product={product}/>
                </Link>
               ))
              ) :(<center><p className="noproduct">No products found</p></center>)}
         </div>
        </div>
     );
}
export default ProductList;
