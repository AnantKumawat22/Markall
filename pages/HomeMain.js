import React from 'react';
import styles from '../styles/Homemain.module.css';
import ContactNow from '../components/ContactNow';
import Navbar from '../components/Navbar.js';
import Link from 'next/link';
import Image from 'next/image';

const HomeMain = () => {
  return (
    <>
      <Navbar/>

      <div className={styles.getStartedDiv}>
        <div className={styles.getStartedDiv1}>
          <p>Reach your - audience & convert your leads</p>
          <span>Get your customers with SEO, rank your business with email marketing, build sales leads</span>
          <div className={styles.btnDiv}>
            <button className={styles.btnGetStarted}>Get Started</button>
            <button className={styles.watchDemo}><i className={`fa fa-play`}></i> Watch Demo</button>
          </div>
        </div>
        <div className={styles.getStartedDiv2}>
          <Image src='/Marketing1.png' alt="" priority className={styles.marketingImg} width={578} height={386}/>
        </div>
      </div>

      <div className={styles.ourFeaturesDiv}>

        <div className={styles.ourFeaturesDiv1}>

          <div className={styles.knowYourAudienceDiv}>
            <p>Our Features</p>
            <h1>Know your audience and boost sales</h1>
          </div>
          <div className={styles.DesciptionDiv}>
            <p>Effective emails convey the most significant substance to a client at the proper time which is our marketing approaches include scheduled emails.</p>
          </div>

        </div>

        <div className={styles.ourFeaturesDiv2}>
          <div className={styles.savePreciousTimeDiv}>
            <h1>Save precious time with automation</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa leo purus cras commodo. Volutpat massa fusce sit libero ut mollis risus.</p>
            <Link href="#">Learn More <i className={`fas fa-long-arrow-alt-right`}></i></Link>
          </div>
          <div className={styles.savePreciousTimeImgDiv}>
            <Image src='/Automation1.png' priority alt="" className={styles.marketingImg} width={578} height={386}/>
          </div>
        </div>

      </div>

      <div className={styles.happyCstmDiv}>
        <div className={styles.happyCstmDiv1}>
          <p>OUR HAPPY CUSTOMERS</p>
          <h1>What our customers say about us</h1>
        </div>
        <div className={styles.happyCstmDescDiv}>
          <Image src='/Vector1.png' priority alt="" style={{marginRight: '10px'}} width={60} height={60}/> 
          <div className={styles.happyCstmDescDiv1}>
            <p>Lorem ipsum dolor sit amet consectetur. In praesent ac sit scelerisque lacus. Faucibus tincidunt commodo mi.</p>
            <h1>Jane Doe</h1>
            <p style={{color: 'rgba(50, 88, 74, 0.7)'}}>Product Specialist, Lorem Co.</p>
          </div>
          
        </div>
      </div>

      <ContactNow/>
    </>
  )
}

export default HomeMain;
