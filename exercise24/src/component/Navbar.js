import React from 'react';


const Navbar = () => {
  return (
       <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <a className="navbar-brand" href="/">CatLovers</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
  aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
</button>


<div className="collapse navbar-collapse" id="collapsibleNavId">

    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
        <li className="nav-item">
            <a className={`nav-link active`} href="/" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/aboutus">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cats">Cats</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contactus">Contact Us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/faq">FAQ</a>
  </li>

    </ul>


  <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
  Login
  </button>
  </div>
  </nav>
  )
}

export default Navbar;