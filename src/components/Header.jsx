
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart, FaShopify } from "react-icons/fa"; // using react-icons


function Header(){
const cartItems = useSelector((state)=>state.cart.items);
const wishlistItems = useSelector((state) => state.wishlist.items);

    // Header component that displays the main header of the page
    return(
      <div className="header">
        <Link to ="/" className="logo" ><FaShopify className="logo-icon"/>ShoppyGlobe</Link>
        <ul>
            <Link to ="/"><li>Home</li></Link>
            <Link to ="/wishlist"><li>Wishlist <FaHeart /><sup> {wishlistItems.length}</sup></li></Link>
          
            <Link to ="/cart" className="cart-icon"><li><FaShoppingCart /><sup> {cartItems.length}</sup></li></Link>
        </ul>
       
      </div>
    );
}
export default Header;
