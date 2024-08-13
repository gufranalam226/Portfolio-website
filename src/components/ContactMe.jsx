import React from 'react'
import styled from 'styled-components'

function ContactMe() {
  return (
    <Component>
      <div className="contact-area">
        <div className="contact">
            <h2>Connect with me...</h2>
            <div className="info">
                <div className="call">
                    <img src="" alt="" />
                    <div><b>Call Me</b></div>
                    <div>+917015066854</div>
                </div>
                <div className="mail">
                    <img src="" alt="" />
                    <div><b>Email Me</b></div>
                    <div>gufranalam225@gmail.com</div>
                </div>
                <div className="address">
                    <img src="" alt="" />
                    <div><b>Address</b></div>
                    <div>Panipat(132103) Haryana</div>
                </div>
            </div>
            <div className="contact-form">
                <form action="" id='form'>
                    <div className="form">
                        <div>Nmae :  <input type="text" /></div>
                        <div>Email : <input type="email" /></div>
                        <div>Message : <input type="text-area" /></div> 
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
      </div>
    </Component>
  )
}

export default ContactMe

const Component = styled.div`
.contact-area{
    height: auto;
    margin: 80px 0px 120px 0px;
}

.contact{

    h2{
        font-size: 2.8rem;
    }

    max-width: 1280px;
    margin: auto;
    font-size: 1.1rem;

    h2{
        text-align: center;
    }
}

.info{
    height: 80px;
    margin-top: 30px;
    margin-bottom: 50px;
    display : flex;
    justify-content: space-around;
}


#form{
    margin-top: 30px;
}

.form{
    display: flex;
    display : flex;
    justify-content: space-around;
   
}


`