import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Salesforce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/contact">Contacts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/opportunity">Opportunities</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header