import {
  Button,
  ButtonSizes,
  ButtonStyles,
  // Input,
  // InputStyle,
} from "@Components";
import { useRouter } from 'next/router'
import React from "react";

export type DocumentationHeaderProps = {
  className?: string;
  logoClassName?: string;
  logoText?: string;
  buttonClassName?: string;
  buttonText?: string;
};

const DocumentationHeader: React.FC<DocumentationHeaderProps> = () => {

  const router = useRouter()
  return (
  <div className="documentation-header">
    <div className="search-container">
      {/* <Input
        inputStyle={InputStyle.SEARCH}
        placeholder="Поиск"
        containerClassName="search-input-comp"
      /> */}
    </div>
    <div className="links">
      <a href="/support" className="link">
        FAQ
      </a>
      <Button
        size={ButtonSizes.M}
        style={ButtonStyles.LIGHT}
        className="button"
        onClick={() => router.push('https://merchant.ioka.kz/signin')}
      >
        Войти
      </Button>
    </div>
  </div>
  )
}

/* eslint-disable */
export default DocumentationHeader
