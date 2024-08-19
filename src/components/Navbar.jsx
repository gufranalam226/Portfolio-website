import React from 'react'
import styled from "styled-components"

function Navbar() {
  return (
    <Container>
      <div className="header-area">
        <div className="header">
          <div className="logo">
            Portfolio
          </div>
          <div className="nav-menu">
            <ul className='menu-list'>
              <li>Projects</li>
              <li>Skills</li>
              <li>About Me</li>
              <li>Contact Me</li>
            </ul>
          </div>
          <div className="resume"><button>Resume</button></div>
        </div>
      </div>      
    </Container>
  )
}

export default Navbar

const Container = styled.div`
.header-area{
  background-color: #dddddd;
  width : 100%;
  height: 80px;
  position: sticky;
  top: 0px;
  z-index: 1000;
  
}
  
.header{
  max-width: 1280px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  ul{
    list-style: none;
    
    li{
      display: inline-block;
      padding: 10px 20px;
    }
  }

}



`