import React from "react";
import s from "./Header.module.css";
import logo from "./../../Assets/logo.svg";
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__list}>
          <div className={s.header__list_logo}>
            <img className={s.header__list_logo_image} src={logo} alt="logo" />
            <span className={s.header__list_logo_text}>Agency</span>
          </div>
          <div className={s.header__list_link}>
            <a href={"/"}>About</a>
            <a href={"/"}>Services</a>
            <a href={"/"}>Pricing</a>
            <a href={"/"}>Blog</a>
          </div>
          <button className={s.header__list_button}>CONTACT</button>
        </div>
        <div className={s.header__info}>
          <span className={s.header__info_portfolio}>Portfolio</span>
          <span className={s.header__info_description}>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
