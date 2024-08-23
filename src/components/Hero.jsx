import React from 'react'
import styled from 'styled-components'
import new_tab from "../assets/new-tab.svg"
function Hero() {
  return (
    <Component>
      <div class="dot-background">
      {/* hero section start here */}
        <div className='hero-container'>
          {/* hero section with max width of 1280px */}
            <div className='hero'>
              {/* Hero content section */}
              <div className='hero-content box-w'>
                <div className="welcome"><span className='wlcm-txt'>Hi there!</span></div>
                <div className="title">
                  <span>Crafting Code</span> <br/>
                  <span>for the Connected World</span>
                </div>
                <div className="desc">
                  As a developer, I am the unseen force driving innovation, turning complex problems into elegant solutions. With every challenge, I grow stronger, more precise, and more visionary...
                </div>
                <div className="btns">
                  <span className='btn'>
                    <button>Contact Me</button>
                  </span>
                  <span>Projects <img src={new_tab} alt="" /> </span>
                </div>
                


              </div>

              <div className='hero-image box-w'>
                <div className='bg-rec hw-set'></div>
                <div className='bg-border-up hw-set'></div>
                <div className='bg-border-dw hw-set'>
                  <div className='social-icon'>G</div>
                  <div className='social-icon'>L</div>
                  <div className='social-icon'>I</div>
                  <div className='social-icon'>L</div>
                </div>
                <div className='bg-img hw-set'></div>

              </div>

            </div>

        </div>
        </div>
    </Component>
  )
}

export default Hero


const Component = styled.div`

.dot-background {
    position: relative;
    overflow: hidden;
}

.dot-background::before,
.dot-background::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 50px 20px, red 5px, transparent 0),
                      
                      radial-gradient(circle at 110px 140px, blue 7px, transparent 0),
                     
                      radial-gradient(circle at 110px 220px, green 12px, transparent 0);
                      background-size: 500px 800px;
                      animation: randomMove 20s linear infinite;
}

.dot-background::after {
    opacity: 0.6;
    transform: scale(2);
}

@keyframes randomMove {
    0% {
        background-position: 0 0, 50px 50px, 100px 100px, 150px 150px, 200px 200px;
    }
    25% {
        background-position: 10px 30px, 60px 20px, 120px 80px, 140px 160px, 210px 190px;
    }
    50% {
        background-position: 20px 60px, 70px 90px, 110px 110px, 160px 130px, 230px 150px;
    }
    75% {
        background-position: 30px 90px, 80px 40px, 140px 120px, 180px 140px, 250px 170px;
    }
    100% {
        background-position: 0 0, 50px 50px, 100px 100px, 150px 150px, 200px 200px;
    }
}


div{
  // border: 2px solid red;
}

.hero-container{
  height: 100vh;
  box-sizing: border-box;

  .hero{
    height: 100%;
    max-width: 1440px;
    margin: auto;
    display: flex;

    .box-w{
      width: 50%;
      display: block;
      align-content: center;
      padding: 20px;

      
    }




    ////////// hero content sectton ///////////////
    .hero-content{
      .wlcm-txt{
        font-size: 1.8rem;
        font-weight: 700;
        border-bottom : 5px solid #40b342;
        border-radius: 4px; 
      }

      .title{
        font-size: 3rem;
        font-weight: 650;
        margin-top: 10px;
      }

      .desc{
        font-size: 1.1rem;
        padding-left: 10px;
      }
      .btns{
        margin-top: 10px;
        font-size: 1.4rem;
        .btn>button{
          font-size: 1.3rem;
        
          background-color: #40b342;
          height: 50px;
          display: block; 
          text-align: center;
          align-items: cente;
          color: white;
          padding: 5px 15px;
          border: none;
          border-radius: 30px;
          font-weight: 700;
          
        }
      }
      
      }
      /////////// image section css ////////////
      .hero-image{
        position: relative;
        
        .hw-set{
          height: 300px;
          width: 300px;
          }
        .bg-rec{


        background-color: #40b342;
        font-size: 3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        }
        
        .bg-border-dw{
          border: 4px solid red;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-20%, -20%);
          border-bottom-right-radius: 20px;
          display: flex;
          justify-content: space-around;
          align-items: end;

          .social-icon{

            height: 35px;
            width: 35px;
          }
          
        }
        .bg-border-up{
            
          border: 4px solid blue;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-80%, -80%);
          border-top-left-radius: 20px;
        }
      }
     
    }
  }
          
`