import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.comp";
import CartDropdown from "../cart-dropdown/cart-dropdown.comp";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  const dispatch = useDispatch();
  const signOutHandler = () => dispatch(signOutStart());

  return (
    <div className="h-16 mb-6 mt-3 w-full flex justify-between items-center relative">
      <Link to="/" className="h-12 w-fit">
        <Logo />
      </Link>

      <div className="flex-grow h-full flex items-center justify-end gap-x-2 sm:gap-x-4 md:gap-x-7 py-2.5">
        <Link to="/shop">SHOP</Link>
        <Link to="/shop">CONTACT</Link>
        {currentUser ? (
          <div className="cursor-pointer" onClick={signOutHandler}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/login">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
