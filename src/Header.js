import React from "react";
import './header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import P17 from './p17.png'
import HomeIcon from '@mui/icons-material/Home';
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {             
    if (user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={P17}
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon/>
        
      </div>

      <div className="header__nav">
        <Link id="lin" to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email }</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link id="lin" to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <Link to= "/" className="header__option">
          <HomeIcon/>
        </Link>
        <Link to= "/buyers" className="header__option">
          <p>Become a seller</p>
        </Link>

        
        <Link id="lin" to="/checkout">
          <div className="header__optionBasket">
          <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;