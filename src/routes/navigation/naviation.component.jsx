import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './navigation.styles.scss';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';

const Navigation = ()=> {
    return(
      <Fragment>
        <div className="navigation">
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
        </div>
        <div className="nav-links-container">
            <Link className="nav-link" to='/contact'>
                CONTACT
            </Link>
        </div>
        <div className="nav-links-container">
            <Link className="nav-link" to='/signin'>
                SIGN IN
            </Link>
        </div>
        <div className="nav-links-container">
            <Link className="nav-link" to='/buy'>
                <ShoppingBag className="shopping-bag-icon"/>
            </Link>
        </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;