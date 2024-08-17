import React from 'react'
import styled from 'styled-components'


function Projects() {
  return (
    <Container>
      <div className="project-area">
        <div className="project">
          <div className="title">My Projects</div>
          <div className='proj-show'>
            <div className='project-card'>
                <div className='proj-img'>
                    <img src="" alt="" />
                </div>
                <div className="proj-title"></div>
                <div className="proj-desc"></div>
            </div>
            
           

          </div>
        </div>
      </div>
      
    </Container>
  )
}

export default Projects



const Container = styled.div`

project{
  height: auto;
}

.project{
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




div{
  border: 2px solid red;
}
`