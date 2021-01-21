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
          <p className="name"> Daniel Cunha</p>

          <div className="git-icon">
            <label> <AiFillGithub /> </label>
            <a href="https://github.com/dandankarai">Github</a> <br />
          </div>

          <div className="linkedin-icon">
            <label> <AiFillLinkedin /> </label>
            <a href="https://www.linkedin.com/in/daniel-cunha-4b0a56162/">Linkedin</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Sidebar;