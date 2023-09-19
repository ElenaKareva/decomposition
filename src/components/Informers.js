/* eslint-disable jsx-a11y/anchor-is-valid */
/* Информация о курсе валют */

import React from "react";

export default function Informers() {
  return (
    <React.Fragment>
      <a href="#">USD MOEX</a>
      <span className="informer-value">63.52</span>
      <span className="informer-change">+0.09</span>
      <a href="#">EUR MOEX</a>
      <span className="informer-value">70.86</span>
      <span className="informer-change">+0.14</span>
      <a href="#">Нефть</a>
      <span className="informer-value">64.90</span>
      <span className="informer-change">+1.63%</span>
    </React.Fragment>
  );
}