import React from 'react'
import styled from 'styled-components'
import call from '../assets/call.svg'
import mail from "../assets/mail.svg"
import address from '../assets/location.svg'


function ContactMe() {
  return (
    <Component>
      <div className="contact-area">
        <div className="contact">
            <div className='title'>Connect with me...</div>
            <div className="info">
                <div className="call">
                    <div><img src={call} alt="" /></div>
                    <div>
                        <div><b>Call Me</b></div>
                        <div><a href="tel:+917015066854">+917015066854</a></div>
                    </div>
                </div>
                <div className="mail">
                    <div><img src={mail} alt="" /></div>
                    <div>
                        <div><b>Email Me</b></div>
                        <div><a href="mailto:gufranalam225@gmail.com">gufranalam225@gmail.com</a></div>
                        
                    </div>
                </div>
                <div className="address">
                    <div><img src={address} alt="" /></div>
                    <div>
                        <div><b>Address</b></div>
                        <div>Panipat(132103) Haryana</div>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <form action="" id='form'>
                    <div className="form">
                        <div>Name :  <input type="text" /></div>
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

    .title{
        text-align: center;
    font-weight: 700;
    font-size: 2.4rem;
    padding: 15px; 
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

    a{
        text-decoration: none;
        color: black;
    }


    .call, .mail, .address{
        display: flex;
        align-items: center;

    }
    img{
        height: 30px;
        width: 30px;
        margin-right: 10px;
    }
}


#form{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    button{
        margin: auto;
        margin-top : 20px;
        height: 40px;
        width: 120px;
        font-weight: 700;
        font-size: 1.3rem;
        color: white;
        background-color: #40b342;
        border: none;
        border-radius: 20px;
        display : block;
        align-items: center; 
    }
}

.form{
    display: flex;
    display : flex;
    justify-content: space-around;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top : 20px;
    padding: 20px;

    input{
        border: none;
        border-bottom: 2px solid #40b342;
        outline-color: #40b342;
    }
   
}


`