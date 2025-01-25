
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../utils/wishlistSlice";
import { PiSmileySadDuotone } from "react-icons/pi"; //uses react icon

function WishList() {
    // Use useSelector hook to access the wishlist items from the appstore
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const dispatch = useDispatch(); // Use dispatch hook to get redux dispatch function
    function handleRemoveFromWishlist(itemId) {
        dispatch(removeFromWishlist(itemId))
    }
    // if there are no wishlisted items then render message
    if (wishlistItems.length === 0) {
        return <div className="empty-wishlist"><PiSmileySadDuotone className="wishlist-icon"/><p>Your Wishlist is Empty!</p></div>;
    }
    // Main return statement that renders the wishlist items
    return (
        <div className="wishlist-container">
            <h2>Your Wishlist</h2>
           
            {wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item">
                    <div className='image-container'>
                        <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className='content-container'>
                        <h4 className='item-title'>{item.title}</h4>
                        <p className='item-price'>Price: ${item.price}</p>
                        <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>


        
    );
}
export default WishList;