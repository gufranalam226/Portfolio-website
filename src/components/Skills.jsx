import React from 'react'
import styled from 'styled-components'
import html from "../assets/html.svg"
import react from "../assets/react.svg"
import css from "../assets/css3.svg"
import javascript from "../assets/javascript.svg"
import node from "../assets/node.svg"
import express from "../assets/expressjs.svg"
import mongodb from "../assets/mongodb.svg"
import cpp from "../assets/cpp.svg"


function Skils() {
  return (
    <Container>
      <div className="skill-area">
        <div className="skills">
          <div className="title">Skills & Tools</div>
          <div className='skl-body'>
            <div className="skill-icon">
              <div className='skl-icon'><img src={node} alt="node" />Node.js</div>
              <div className='skl-icon'><img src={mongodb} alt="mongodb" />MongoDB</div>
              <div className='skl-icon'><img src={express} alt="express" />Express.js</div>
              <div className='skl-icon'><img src={html} alt="html" />HTML</div>
              <div className='skl-icon'><img src={javascript} alt="javascript" />Javascript</div>
              <div className='skl-icon'><img src={css} alt="css" />CSS3</div>
              <div className='skl-icon'><img src={react} alt="react" />React.js</div>
              <div className='skl-icon'><img src={cpp} alt="cpp" />c/c++</div>
            </div>
            <div className='middle'></div>
            
            <div className="tool-icon skill-icon">
            <div className='skl-icon'><img src={node} alt="node" />Node.js</div>
              <div className='skl-icon'><img src={mongodb} alt="mongodb" />MongoDB</div>
              <div className='skl-icon'><img src={express} alt="express" />Express.js</div>
              <div className='skl-icon'><img src={html} alt="html" />HTML</div>
              <div className='skl-icon'><img src={javascript} alt="javascript" />Javascript</div>
              <div className='skl-icon'><img src={css} alt="css" />CSS3</div>
              <div className='skl-icon'><img src={react} alt="react" />React.js</div>
              <div className='skl-icon'><img src={cpp} alt="cpp" />c/c++</div>
             
            </div>

          </div>
        </div>
      </div>
      
    </Container>
  )
}

export default Skils

const Container = styled.div`

skill-area{
  height: auto;
}

.skills{
  max-width: 1280px;
  margin : auto;
  padding: 50px; 
}

.title{
  text-align: center;
  font-weight: 700;
  font-size: 2.4rem;
  padding: 15px; 
}

.skl-icon{
  height: 98px;
  width: 80px;
  text-align: center;
  font-weight: 600;
  border-bottom: 3px solid #40b342;
}

.skl-body{
  display: flex;
  // width: 60%;
}

.skill-icon{
  box-sizing: border-box;
  padding: 30px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 35%;

}

.middle{
  width: 30%;
}

.tool-icon{
  width: 35%;
}

div{
  // border: 2px solid red;
}
`