import React, {useState} from 'react';
import Image from 'next/image';
import styles from '../styles/ContactNow.module.css';

const ContactNow = () => {

    const [contactdata, setcontactdata] = useState({
        name: "",
        email: "",
        phnumber: "",
        message: ""
    });

    const formSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`https://markall.vercel.app/api/contact`, {
            method: 'POST',
            body: JSON.stringify({ 
                name: contactdata.name, 
                email: contactdata.email, 
                phnumber: contactdata.phnumber,
                message: contactdata.message
            }),
            headers: {
              'Content-Type': 'application/json',
              Accept: "application/json"
            }
        });
        // const data = await response.json();
    }

    const inpChange = (e) => {
        setcontactdata({...contactdata, [e.target.name]: e.target.value});
    }

  return (
    <>
      <div className={styles.contactUs}>
        <div className={styles.contactDetails}>
            <div>
                <h1>
                    <Image src='/Vector2.png' priority alt="" style={{marginRight: '10px'}} width={30} height={30}/> 
                    Call Us
                </h1>
                <p>+91 1234567891</p>
            </div>
            <div>
                <h1>
                    <Image src='/Vector3.png' priority alt="" style={{marginRight: '10px'}} width={30} height={30}/> 
                    Loaction
                </h1>
                <p>Ghaziabad, Uttar Pradesh</p>
            </div>
            <div>
                <h1>
                    <Image src='/Vector4.png' priority alt="" style={{marginRight: '10px'}} width={30} height={30}/> 
                    Mail Us
                </h1>
                <p>info@markall.in</p>
            </div>
        </div>

        <div className={styles.conatctUsForm}>
            <h1>Contact Now</h1>
            <p>In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.</p>

            <form onSubmit={formSubmit}>
                <input value={contactdata.name} onChange={inpChange} type="text" name="name" id="name" placeholder='Name *' />
                <input value={contactdata.email} onChange={inpChange} type="email" name="email" id="email" placeholder='Email *' />
                <input value={contactdata.phnumber} onChange={inpChange} type="tel" name="phnumber" id="phnumber" placeholder='Phone *' />
                <input value={contactdata.message} onChange={inpChange} type="text" name="message" id="message" placeholder='Message' />
                <button type="submit" className={styles.btnSubmitForm}>Submit Form</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default ContactNow
