import React from 'react'
import './contact.css'
import theme from '../assests/theme.svg'
import linkedin from '../assests/linked.svg'
import insta from '../assests/insta.svg'
import git from '../assests/github (1).png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ea707763-5c74-4132-831a-21c809a31274");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully.I'll reach You soon!")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contactme'>
        <div className="contact-title">
            <h1>Getintouch</h1>
            <img src={theme} alt="" />

        </div>
        <div className="contact-sec">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <div className="con-detail1">
                    <div className="con-detail">
                        <a href="https://github.com/santhosh-v11" target="_blank" rel="noopener noreferrer">
                            <img src={git} alt="" />
                        </a>
                    </div>
                    <div className="con-detail">
                        <a href="https://www.linkedin.com/in/santhosh-v11/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                    <div className="con-detail">
                        <a href="https://instagram.com/sandy_santhosh_v" target="_blank" rel="noopener noreferrer">    
                            <img src={insta} alt="" />
                        </a>
                    </div>
                </div>
            </div>
                <div>
                    <form onSubmit={onSubmit} className="cont-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter Your Name' name="name" id="" />
                        <label htmlFor="">Your Mailid</label>
                        <input type="email" placeholder='Enter Your email' name="email" id="" />
                        <label htmlFor="">Write Your Message</label>
                        <textarea placeholder='Enter Your Message' name="message" id="" rows="8"></textarea>
                        <button type='submit' className='submit'>Submit Now</button>
                    </form>
                </div>
            
        </div>
    </div> 
  )
}

export default Contact