import React from "react";
import { FaRegFolderOpen, FaPlus, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogAreaTwo = () => {
  return (
    <>
      {/*===================== Blog Area Two start =====================*/}
      <div className='blog-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>RECENT BLOGS</h6>
                <h2 className='title'>
                  Discover a World of Sustainable Alternatives
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-2'>
                <div className='thumb'>
                  <img src='assets/img/blog/4.png' alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li className='date'>01 JAN</li>
                    <li>
                      <FaRegUser /> By MyHCM Admin
                    </li>
                    <li>
                      <FaRegFolderOpen /> Business
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='#'>
                      The Future of HR: How Innovative Software is Shaping the Workplace
                    </Link>
                  </h5>
                  <Link className='read-more-text' to='/blog-details'>
                    Discover More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-2'>
                <div className='thumb'>
                  <img src='assets/img/blog/5.jpg' alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li className='date'>07 JAN</li>
                    <li>
                      <FaRegUser /> MyHCM Admin
                    </li>
                    <li>
                      <FaRegFolderOpen /> Software
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='#'>
                      Choosing the Right HR Software: A Comprehensive Guide
                    </Link>
                  </h5>
                  <Link className='read-more-text' to='/blog-details'>
                    Discover More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-2'>
                <div className='thumb'>
                  <img src='assets/img/blog/6.png' alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li className='date'>15 JAN</li>
                    <li>
                      <FaRegUser /> MyHCM Admin
                    </li>
                    <li>
                      <FaRegFolderOpen /> Cloud
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='#'>
                      Overcoming HR Challenges with Cloud-Based Solutions
                    </Link>
                  </h5>
                  <Link className='read-more-text' to='/blog-details'>
                    Discover More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== BlogAreaTwo End =====================*/}
    </>
  );
};

export default BlogAreaTwo;
