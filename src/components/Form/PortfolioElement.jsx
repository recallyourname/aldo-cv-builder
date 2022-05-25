import React from "react";
import style from "./PortfolioElement.module.css";
import image from "../../assets/lab.jpg";

export default function PortfolioElement() {
  return (
    <div className={style.container}>
      <img src={image} alt="portfolio_image" />
      <div className={style.content}>
        <h4>Student Labs</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit placeat dolores quis incidunt enim obcaecati qui sapiente quia nisi quisquam, accusamus aut fugit soluta, distinctio, quas voluptate ullam aspernatur.</p>
      </div>
    </div>
  );
}
