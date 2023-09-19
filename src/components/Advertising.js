/* Баннер рекламы*/

import React from "react";
import PropTypes from "prop-types";

export default function Advertising(props) {
  const { img, href } = props;
  return (
    <React.Fragment>
      <a href={href}>
        <img src={img} alt="Advertising" />
      </a>
    </React.Fragment>
  );
}

Advertising.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
};