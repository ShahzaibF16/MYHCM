import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarTwo = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log("hell");
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? "td-search-popup active" : "td-search-popup "}
        id='td-search-popup'
      >
        <form action='/' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div>
      {/* ==================== Navbar Two Start ====================*/}
      <nav className='navbar navbar-area navbar-area-2 navbar-expand-lg'>
        <div className='container nav-container'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              <img src='assets/img/logo.png' alt='img' />
            </Link>
          </div>
          <div className='nav-right-part nav-right-part-mobile'>
            <span className='search-bar-btn' onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>
              <li className=''>
                <Link to='/'>Home</Link>
              </li>
              <li className=''>
                <Link to='/'>Why MyHCM</Link>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Modules</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='#'>Employee Profile</Link>
                  </li>
                  <li>
                    <Link to='#'>Employee Self Service</Link>
                  </li>
                  <li>
                    <Link to='#'>HR Analytics & Reports</Link>
                  </li>
                  <li>
                    <Link to='#'>Learning Management</Link>
                  </li>
                  <li>
                    <Link to='#'>Mobile App</Link>
                  </li>
                  <li>
                    <Link to='#'>Recruitment</Link>
                  </li>
                  <li>
                    <Link to='#'>Time Management</Link>
                  </li>
                  <li>
                    <Link to='#'>Organizational Charts</Link>
                  </li>
                  <li>
                    <Link to='#'>Leave Absence Management</Link>
                  </li>
                  <li>
                    <Link to='#'>Performance Management</Link>
                  </li>
                  <li>
                    <Link to='#'>Payroll</Link>
                  </li>
                  <li>
                    <Link to='#'>Voice Enabled Mobile Services</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/team'>Team</Link>
              </li>
              <li>
                <Link to='#'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className='nav-right-part nav-right-part-desktop align-self-center'>
            <Link className='btn btn-border-base' to='/contact'>
              Contact Us <FaPlus />
            </Link>
          </div>
        </div>
      </nav>
      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarTwo;
