import React from 'react'
import './Sidebar.css'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"



class Sidebar extends React.Component {
  render() {
    return (

      <div className="Sidebar">

        <div className="icon">
          <img src="https://avatars2.githubusercontent.com/u/65553049?s=460&u=7616301b1e4aad0c062411c373c9c42c7f2ec8ef&v=4" alt="LOGO" className="img" />
        </div>

        <div className="info">
          <label className="name" > Daniel Cunha</label>

          <div className="git-icon">
            <AiFillGithub />
            <a href="https://github.com/dandankarai">Github</a> <br />
          </div>

          <div className="linkedin-icon">
            <AiFillLinkedin />
            <a href="https://www.linkedin.com/in/daniel-cunha-4b0a56162/">Linkedin</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Sidebar;