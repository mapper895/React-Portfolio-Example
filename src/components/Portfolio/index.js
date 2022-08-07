import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const renderPortfolio = (portfolio) => (
    <div className="images-container">
      {portfolio.map((port, idx) => (
        <div className="image-box" key={idx}>
          <img src={port.cover} alt={port.title} className="portfolio-image" />
          <div className="content">
            <p className="title">{port.title}</p>
            <h4 className="description">{port.description}</h4>
            <button className="button" onClick={() => window.open(port.url)}>
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
