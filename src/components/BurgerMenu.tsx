
import classnames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";

import {
  Logo,
  LogoSize,
  Button,
  ButtonSizes,
  ButtonStyles,
} from "@Components";

const BurgerMenu: React.FC<any> = ({ type }) => {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = () => {
    setIsOpen(false);
  };

  const openNav = () => {
    setIsOpen(true);
  };

  const handleButtonClick = () => {
    router.push("/signin");
  };

  const redirectToMain = () => {
    router.push("/");
  };

  return (
    <>
      <div
        className={classnames(
          "burger-menu",
          isOpen ? "open" : "close",
          `${type}-menu`
        )}
      >
        <div className="mobile-side-nav">
          <div>
            <Logo
              size={LogoSize.NONE}
              customClassName="mobile-header-logo"
              onLogoClick={redirectToMain}
            />
          </div>
          <img
            src="/images/close-header.svg"
            alt="close-header-icon"
            onClick={closeNav}
          />
        </div>
        <div className="content">
          <a href="/">Главная</a>
          <a href="/documentation">Разработчикам</a>
          <a href="/support">FAQ</a>
          <Button
            style={ButtonStyles.LIGHT}
            size={ButtonSizes.M}
            onClick={handleButtonClick}
          >
            Войти
          </Button>
        </div>
      </div>
      <div className={classnames("mobile-header", `${type}-header`)}>
        <div>
          <Logo
            size={LogoSize.NONE}
            customClassName="mobile-header-logo"
            onLogoClick={redirectToMain}
          />
        </div>
        <img
          src="/images/burger-menu.svg"
          alt="burger-menu-icon"
          onClick={openNav}
        />
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default BurgerMenu;
