import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Subscribe extends Component {
	render() {
		//let FooterData = this.props.FooterData;
		return (
			<React.Fragment>
				<section className="seo_partner_logo_area sec_pad">
					<div className="container">
						<div className="seo_sec_title text-center mb_70">
							<Fade bottom>
								<h2>
									UCC members & alumni
									<br />
									are prepared to find success in industry.
								</h2>
							</Fade>
						</div>
						<div className="partner_logo_area_four">
							<div className="row partner_info">
								<img src={require('../img/companies/companies.png')} alt="" />
								{/* <div className="logo_item">
									<img src={require('../img/companies/google.png')} alt="" />
								</div>
								<div className="logo_item">
									<img src={require('../img/companies/pwc.png')} alt="" />
								</div>
								<div className="logo_item">
									<img src={require('../img/companies/fanduel.png')} alt="" />
								</div>
								<div className="logo_item">
									<img
										src={require('../img/companies/capitalOne.png')}
										alt=""
									/>
								</div>
								<div className="logo_item">
									<img
										src={require('../img/companies/oliverWyman.png')}
										alt=""
									/>
								</div>
								<div className="logo_item">
									<img src={require('../img/companies/USAA.png')} alt="" />
								</div> */}
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Subscribe;
