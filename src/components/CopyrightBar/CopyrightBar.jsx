import React from 'react'

const CopyrightBar = () => {
  return (
    <div className="copyright-bar">
      <div className="container">
        <div className="copyright">
          <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
        </div>
        <div className="socialmedia-bar">
          <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  )
}

export default CopyrightBar