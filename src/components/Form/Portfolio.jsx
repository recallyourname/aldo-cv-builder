import React from 'react'
import PortfolioElement from './PortfolioElement'
import style from "./Portfolio.module.css"

export default function Portfolio(props) {
  return (
    <div className={style.container}>
        {props.portfolio.map((obj) => (
          <PortfolioElement key={obj.projectName} portfolioElement={obj} className="col"/>
        ))}
    </div>
  )
}
