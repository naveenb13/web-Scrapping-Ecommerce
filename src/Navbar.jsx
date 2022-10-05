import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Web Scraping</a>
        <Link to={"/"} type="button" class="btn btn-dark">Sign Out</Link>
      </div>
    </nav>
  )
}

export default Navbar