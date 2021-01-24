import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

import { Icone } from "./styles"
class Sidebar extends React.Component {
  render() {
    return (
      <div>

        <div>
          <Icone>
            <img src="https://avatars2.githubusercontent.com/u/65553049?s=460&u=7616301b1e4aad0c062411c373c9c42c7f2ec8ef&v=4" />
          </Icone>
        </div>


        <div>
          <p> Daniel Cunha</p>
        </div>

        <div>
          <label> <AiFillGithub /> </label>
          <a href="https://github.com/dandankarai">Github</a> <br />
        </div>

        <div>
          <label> <AiFillLinkedin /> </label>
          <a href="https://www.linkedin.com/in/daniel-cunha-4b0a56162/">Linkedin</a>
        </div>
      </div >
    )
  }
}

export default Sidebar;