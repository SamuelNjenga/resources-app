import React from 'react';
function Navbar(){
return(
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
<a className="navbar-brand text-white" href="/">Njenga Tours Application</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span>
    <i className="fas fa-bars" style={{color:'#fff'}}></i>
  </span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav m-auto">
    <li className="nav-item active">
      <a className="nav-link text-white text-uppercase ml-5" href="/">Home&nbsp;<i class="fas fa-home"></i><span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white text-uppercase ml-5" href="/categories">Category</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white text-uppercase ml-5" href="/expenses">Expenses</a>
    </li>
   
    
  </ul>
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  <ul className="navbar-nav m-auto">
    <li className="nav-item">
      <a className="nav-link text-white text-uppercase ml-5" href="/news">Join</a>
    </li>
    <li className="nav-item" >
      <a className="nav-link text-white text-uppercase ml-5" href="/contacts">Log In</a>
    </li>
   
    
  </ul>
</div>
</nav>);
}

export default Navbar;