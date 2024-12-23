import { useState } from 'react'
import data from './data.js'

function App() {

  return (
    <>
        <Header />
      <div className='container'>
        <InputArea />
        <ResultArea />
      </div>
    </>
  )
}

function Header() {
  return (
    <div className="header">
        <h1>Where in the world?</h1>
      <div className="header-right-side">
        <div><img src="./assets/img/black-moon.png" alt="" /></div>
        <div><h3>Dark Mode</h3></div>
      </div>
    </div>
  )
}

export default App

function InputArea() {
  return (
    <div className="searching-area">
      <input placeholder='Search for a country…' type="text" />
    </div>
  )
}

function ResultArea() {
  return (
    <div className="cart-inner">
      {data.map((country) =>
        <GetInfo key={country.cca2} country={country} />
      )}
    </div>
  )
}

function GetInfo({ country }) {
  const formattedPopulation = new Intl.NumberFormat("en-US").format(country.population);

  return (
    <div className='country'>
      <img src={country.flags.png} />
      <h1>{country.name.common}</h1>
      <h2>Population:{formattedPopulation}</h2>
      <h2>Region: {country.region}</h2>
      <h2>Capital: {country.capital}</h2>
    </div>
  )
}

