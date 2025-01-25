
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice'; // Importing addItem action creator from cartSlice
import { addToWishlist, removeFromWishlist } from '../utils/wishlistSlice'; // Importing addToWishlist & removeFromWishlist action creator from wishlistSlice
import { FaHeart, FaRegHeart  } from "react-icons/fa";

function ProductItem({ product }) {
    const dispatch = useDispatch(); // gets dispatch function from redux.
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const isWishlisted = wishlistItems.some((item) => item.id === product.id);
 
    // Handle adding the product to cart
    function handleAddItem(){
        dispatch(addItem(product));
    };
    
    // handle adding the product to wishlist
    function handleAddToWishlist(){
        if (isWishlisted) {
          dispatch(removeFromWishlist(product.id));
        } else {
           dispatch(addToWishlist(product));
        }
      };
    return (
        <div className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
             <button onClick={handleAddItem}>Add to Cart</button>

             <button
             onClick={handleAddToWishlist}
               className={isWishlisted ? 'wishlisted' : ''} >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
        </div>
    );
}
export default ProductItem;