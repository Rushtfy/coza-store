import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo-01.png.webp'
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

    const navigation = useNavigate();

    const goCart = () => {
        navigation("/basket");
    }
    const goWishlist = () => {
        navigation("/wishlist");
    }


  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logoAndNavbar}>
                <a href="/"><img src={logo} alt="logo" /></a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className={styles.icons}>
                <IoSearch />
                <FaCartShopping onClick={goCart}/>
                <FaRegHeart onClick={goWishlist}/>
                <GiHamburgerMenu className={styles.burger}/>
            </div>
        </div>
    </div>
  )
}

export default Header