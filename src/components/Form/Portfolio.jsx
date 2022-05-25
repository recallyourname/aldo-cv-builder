import React from 'react'
import PortfolioElement from './PortfolioElement'
import style from "./Portfolio.module.css"

export default function Portfolio() {
  return (
    <div className={style.container}>
        <PortfolioElement className="col"/>
        <PortfolioElement className="col"/>
        <PortfolioElement className="col"/>
        <PortfolioElement className="col"/>
    </div>
  )
}
