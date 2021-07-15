import React from 'react';

function Header() {
    return (
      <>
      <div className="jumbotron">
        <h1 className="display-4 customheadertext">Asha Sanford</h1>
        <hr className="my-4"></hr> 
        </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#aboutme">About Me</a>
        <a className="nav-link" href="#contactme">Contact Me</a>
        <a className="nav-link" href="#workheader">Work</a>
      </div>
    </div>
  </div>
</nav>
      </>
    );
  }




export default Header;
