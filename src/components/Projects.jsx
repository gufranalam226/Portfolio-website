import React from 'react'
import styled from 'styled-components'
import delhivery from '../assets/delhivery-api-integration.png'


function Projects() {
  return (
    <Container>
      <div className="project-area">
        <div className="project">
          <div className="title">My Projects</div>
          <div className='proj-show'>

            <div className='project-card'>
              <div className='proj-img'>
                  <img src={delhivery} alt="project preview" />
              </div>
              <div className="proj-title">Delhivery AAPI Integration</div>
              <div className="proj-desc">Integrated the delhivery client portel API, fetching data from the Delhivery One site. Functionality of check serviceability, fetch waybills, calculate cost, trackshipment and download shipping invoice</div>
            </div>
            <div className='project-card'>
              <div className='proj-img'>
                  <img src={delhivery} alt="project preview" />
              </div>
              <div className="proj-title">Delhivery AAPI Integration</div>
              <div className="proj-desc">Integrated the delhivery client portel API, fetching data from the Delhivery One site. Functionality of check serviceability, fetch waybills, calculate cost, trackshipment and download shipping invoice</div>
            </div>
            <div className='project-card'>
              <div className='proj-img'>
                  <img src={delhivery} alt="project preview" />
              </div>
              <div className="proj-title">Delhivery AAPI Integration</div>
              <div className="proj-desc">Integrated the delhivery client portel API, fetching data from the Delhivery One site. Functionality of check serviceability, fetch waybills, calculate cost, trackshipment and download shipping invoice</div>
            </div>
            <div className='project-card'>
              <div className='proj-img'>
                  <img src={delhivery} alt="project preview" />
              </div>
              <div className="proj-title">Delhivery AAPI Integration</div>
              <div className="proj-desc">Integrated the delhivery client portel API, fetching data from the Delhivery One site. Functionality of check serviceability, fetch waybills, calculate cost, trackshipment and download shipping invoice</div>
            </div>
            <div className='project-card'>
              <div className='proj-img'>
                  <img src={delhivery} alt="project preview" />
              </div>
              <div className="proj-title">Delhivery AAPI Integration</div>
              <div className="proj-desc">Integrated the delhivery client portel API, fetching data from the Delhivery One site. Functionality of check serviceability, fetch waybills, calculate cost, trackshipment and download shipping invoice</div>
            </div>
            <div className='project-card'>
              <div className='proj-img'>
                  <img src={delhivery} alt="project preview" />
              </div>
              <div className="proj-title">Delhivery AAPI Integration</div>
              <div className="proj-desc">Integrated the delhivery client portel API, fetching data from the Delhivery One site. Functionality of check serviceability, fetch waybills, calculate cost, trackshipment and download shipping invoice</div>
            </div>
            <div className='project-card'>
              <div className='proj-img'>
                  <img src={delhivery} alt="project preview" />
              </div>
              <div className="proj-title">Delhivery AAPI Integration</div>
              <div className="proj-desc">Integrated the delhivery client portel API, fetching data from the Delhivery One site. Functionality of check serviceability, fetch waybills, calculate cost, trackshipment and download shipping invoice</div>
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
  max-width: 1440px;
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

.proj-show{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  box-sizing: border-box;
  overflow: scroll;
}

.project-card{
  height: 400px;
  width: 280px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.proj-img{
  img{
    width: 100%;
    height: 200px;
    object-fit: contain;
  }

}


`