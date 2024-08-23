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
  // position: sticky;
  top: 0px;
  z-index: 1000;
  
}
  
.header{
  max-width: 1440px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;


  .menu-list{
    font-weight: 700;
    list-style: none;

    li{
      border-bottom: 3px solid #40b342;
      display: inline-block;
      width: 100px;
      padding: 5px 5px;
      margin : 0px 10px;
      text-align: center;
    }
  }

  .resume{
    width: 100px;
    button{
      border: none;
      background-color: #40b342;
      color: white;
      padding: 5px 20px;
      font-size: 1.2rem;
      border-radius: 22px ;
      font-weight: 600;

    }
  }
  

}


.logo{
  padding: 5px;
  font-size: 1.6rem;
  font-weight: 700;
}


`