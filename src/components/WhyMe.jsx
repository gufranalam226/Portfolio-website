import React from 'react'
import styled from 'styled-components'


function WhyMe() {
  return (
    <Container>
      <div className="whyme-area">
        <div className="whyme">
          <div className="title">Why I'm the Fit for This Opportunity?</div>
          <div className='-body'>
            
           

          </div>
        </div>
      </div>
      
    </Container>
  )
}

export default WhyMe



const Container = styled.div`

whyme{
  height: auto;
}

.whyme{
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
//   border: 2px solid red;
}
`