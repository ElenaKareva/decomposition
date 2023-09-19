/* eslint-disable jsx-a11y/alt-text */
/*дополнительный информационный блок с продуктом поисковика*/

import React from "react";
import PropTypes from "prop-types";

export default function AdditionalBlock(props) {
  const { img, href, title, text } = props;

  return (
    <React.Fragment>
      <a href={href}>
        <img src={img} />
        <h2>{title}</h2>
      </a>
      <span>{text}</span>
    </React.Fragment>
  );
}

AdditionalBlock.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};