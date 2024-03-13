import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const CDP = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="CDP"
        Pdescription="The Consultant Development Program"
      />
      <div className="cdp-section" style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
        <h1>Unique Benefits</h1>
        <p>In our Consultant Development Program, participants enjoy a comprehensive experience that includes weekly workshops following the general body meetings. These workshops, along with additional training sessions, exclusive networking opportunities, personalized mentorship, and hands-on experience through pro bono consulting for local companies, offer a well-rounded approach to developing consulting skills and knowledge.</p>
      </div>
      <div className="cdp-section" style={{ backgroundColor: '#f5f5f5', padding: '20px', marginBottom: '20px' }}>
        <h1>How to Join</h1>
        <p>Interested individuals should attend the first general body meetings, typically held at the beginning of the Fall semester. Additionally, they may choose to attend summer info sessions for more information. Applications typically open in the Fall semester and remain open until the 1st or 2nd general body meeting or after Business Bash. Applicants who meet the criteria will be offered interviews. Following the interview process, successful candidates will receive a formal invitation to the program. It's important to note that participation in the program is a year-long commitment, offering participants ample time to immerse themselves in the learning experience and make meaningful contributions. For any inquiries or questions, individuals can reach out via Instagram or email for assistance.</p>
      </div>
      <div className="cdp-section" style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
    <h1>FAQ</h1>
    <div className="faq-container">
        <div className="faq-question">
            <h2 style={{ fontSize: '18px' }}>Do you need previous consulting experience to join UCC or the CDP program?</h2>
            <p>Nope! Anyone can attend our GBMs, stay updated with our social media to know where and when they’ll be. And the vast majority of our consultants don’t have previous consulting experience. We’re mostly looking for passion and dedication in our CDP class.</p>
        </div>
        <div className="faq-question">
            <h2 style={{ fontSize: '18px' }}>Who is in UCC?</h2>
            <p>UCC is made up of a ton of students from different majors, backgrounds, and interests. UCC members are enthusiastic, passionate, and are problem-solvers and thinkers at their core.</p>
        </div>
        <div className="faq-question">
            <h2 style={{ fontSize: '18px' }}>If I have a question who can I contact?</h2>
            <p>You can email us at ufucc.president@gmail.com or DM us on Instagram at uf_ucc.</p>
        </div>
    </div>
	</div>

      <FooterTwo FooterData={FooterData} />
    </div>
  );
};

export default CDP;
