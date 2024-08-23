import React from 'react'
import styled from 'styled-components'

function footer() {
  return (
    <Component>
      <div className="footer-area">
        <div className="footer">
          <div className="designed-by">Designed and developed by Gufran Alam</div>
          <div className="crt">&copy;2024, All Rights Reserved </div>
          <div className="social">
            <div className='social-icon'>G</div>
            <div className='social-icon'>L</div>
            <div className='social-icon'>I</div>
            <div className='social-icon'>L</div>
          </div>

        </div>
      </div>
    </Component>
  )
}

export default footer


const Component = styled.div`
.footer-area{
  height: 40px;
  font-size: 1.1rem;

  .footer{
    max-width: 1440px;
    border-top: 1px solid grey;
    margin: auto;
    display: flex;
    justify-content: space-between;
    
    .social{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      // align-items: end;

      .social-icon{

        height: 35px;
        width: 35px;
        margin: 0px 10px;
      }
    }
  }
}
`