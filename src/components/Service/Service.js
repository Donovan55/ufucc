import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service = () => {
	return (
		<React.Fragment>
			<section className="seo_service_area sec_pad">
				<div className="container">
					<SeoTitle
						Title="What We Do"
						// TitleP="We focus on different aspects of product "
					/>
					<div className="row seo_service_info">
						<Fade bottom duration={500}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon1.png')} alt="" />
									<h4>Workshop</h4>
									<p>
									Engage in interactive workshops to enhance your consulting 
									abilities, facilitated by experienced club members. Delve into practical 
									case studies, strategic methodologies, and collaborative problem-solving sessions, 
									empowering you to thrive in the consulting field.
									</p>
								</div>
							</div>
						</Fade>
						<Fade bottom duration={700}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon2.png')} alt="" />
									<h4>Network</h4>
									<p>
									Build valuable connections and expand your professional network. Connect 
									with industry leaders, influential alumni, and like-minded peers passionate about consulting, 
									opening doors to mentorship, career opportunities, and lasting relationships.
									</p>
								</div>
							</div>
						</Fade>
						<Fade bottom duration={1000}>
							<div className="col-lg-4 col-md-6">
								<div className="seo_service_item">
									<img src={require('../../img/seo/icon5.png')} alt="" />
									<h4>Implement</h4>
									<p>
									Empower your consulting skills through action. Navigate
									through stimulating case competitions, deliver impactful presentations, and serve pro bono clients.
									Here, you'll apply theory to practice, making a tangible impact while honing your expertise.
									</p>
								</div>
							</div>
						</Fade>
						{/* <div className="col-lg-12 text-center mt_40">
							<a href=".#" className="seo_btn seo_btn_one btn_hover">
								All Features
							</a>
						</div> */}
					</div>
				</div>
			</section>
			<section className="seo_features_one sec_pad">
				<div className="container">
					<div className="row flex-row-reverse">
						<div className="col-lg-6">
							<div className="seo_features_img">
								<div className="round_circle"></div>
								<div className="round_circle two"></div>
								<img
									src={require('../../img/uccadditions/UCCICON2.png')}
									alt=""
									style={{ width: '450px', height: 'auto' }}
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<Fade bottom cascade>
								<div className="seo_features_content">
								<h2>Ignite your passion for consulting and grow with us</h2>
								<p>
									At UF's Undergraduate Consulting Club, we strive to cultivate future leaders in consulting
									by gaining hands-on experience in our client projects as well as embodying
									a sense of collaboration, innovation, and development—our three core values
									that we prioritize across our organization.
								</p>
								<p>
									Embark on various consulting pathways by joining us in our general body meetings
									or actively engaging in our consultant development program. In these gatherings, you'll tackle real-world
									challenges and provide actionable strategies using your consulting expertise.
								</p>
									{/* <div className="media seo_features_item">
										<div className="icon">
											<img src={require('../../img/seo/icon4.png')} alt="" />
										</div>
										<div className="media-body">
											<h3>Reporting & Analysis</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt
											</p>
										</div>
									</div>
									<div className="media seo_features_item">
										<div className="icon two">
											<img src={require('../../img/seo/icon3.png')} alt="" />
										</div>
										<div className="media-body">
											<h3>Reporting & Analysis</h3>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt
											</p>
										</div>
									</div> */}
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
			<section className="seo_features_one sec_pad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="seo_features_img seo_features_img_two">
								<div className="round_circle"></div>
								<div className="round_circle two"></div>
								<img
									src={require('../../img/uccadditions/CDPICON.png')}
									alt=""
									style={{ width: '450px', height: 'auto' }}
								/>
							</div>
						</div>
						<div className="col-lg-6 d-flex align-items-center">
							<Fade bottom cascade>
								<div className="seo_features_content">
									<h2 className="wow fadeInUp">Consultant Development Program</h2>
									<h6 className="wow fadeInUp">
										Join our dynamic Consultant Development Program and prepare for career recruitment and interviews.
									</h6>
									<p className="wow fadeInUp">
										Our development program kicks off in the Fall and concludes at the end of Spring, offering you the opportunity to immerse yourself in consulting fundamentals and connect with fellow aspiring consultants. Through mentorship and hands-on training, you'll be equipped to excel in professional settings, whether it's securing your first consulting internship or transitioning into a full-time role.
									</p>
									{/* <a
										href=".#"
										className="seo_btn seo_btn_one btn_hover wow fadeInUp"
									>
										Learn More
									</a> */}
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Service;
