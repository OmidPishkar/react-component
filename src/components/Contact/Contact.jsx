import React from 'react'
import ContactImg from '../../img/contact.png'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-us'>
        <h1 className='title'>
            Contact Us
        </h1>

        <div className='main'>
            <form>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Phone number'/>
                <input type="text" placeholder='Interested product/service'/>
                <textarea cols="30" rows="10" placeholder='Message'></textarea>

                <p className='form-paraph'>
                    By submitting an application you agree with<br/>politics privacy
                </p>

                <button type='submit'>
                    SEND
                </button>            

            </form>

            <div className='contact-img'>
                <img src={ContactImg} alt="contact img" />
            </div>
        </div>

    </div>
  )
}
export default Contact