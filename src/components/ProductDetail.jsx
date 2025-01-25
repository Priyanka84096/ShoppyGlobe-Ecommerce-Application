
import {Link, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { FaArrowRight } from "react-icons/fa";

function ProductDetail(){
    // Get the productId from the route params using useParams
    const { productId } = useParams();
    // use custom hook to fetch product details using productId
    const { data: product, error, loading } = useFetch(
        `https://dummyjson.com/products/${productId}`);

    if (loading) return <p className="loading">Loading product details...</p>;
    if (error) return <p className="error">Error loading product details!</p>;
    if (!product) return <p className="not-found">Product not found!</p>;
    
    //renders product details
    return(
    <div className="product-detail">
      <div className="image-container">
          <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="content-detail">
          <h2>{product.title}</h2>
          <p className='product-description'>{product.description}</p>
          <p className="item-price">Price: ${product.price}</p>
          <p className="item-rating">Rating: {product.rating}</p>
          <p className="item-brand">Brand: {product.brand}</p>
          <Link to="/">Back <FaArrowRight /></Link>
      </div>
    </div>
    
    );
}
export default ProductDetail;