import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sticky from 'react-stickynode';

class CustomNavbar extends Component {
	render() {
		var { mClass, nClass, cClass, slogo} = this.props;
		return (
			<Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
				<header className="header_area">
					<nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
						<div className={`container ${cClass}`}>
						<Link className={`navbar-brand ${slogo}`} to="/">
							<img src={require('../img/ufucclogo.png')} alt="" style={{ width: 180, height: 42 }} />
							<img src={require('../img/ufucclogo.png')} alt="logo" style={{ width: 180, height: 42 }} />
						</Link>
							<button
								className="navbar-toggler collapsed"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="menu_toggle">
									<span className="hamburger">
										<span></span>
										<span></span>
										<span></span>
									</span>
									<span className="hamburger-cross">
										<span></span>
										<span></span>
									</span>
								</span>
							</button>

							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className={`navbar-nav menu ml-auto ${nClass}`}>
									<li className="nav-item">
										<Link to="/" className="nav-link">
											Home
										</Link>
									</li>

									<li className="nav-item">
										<Link to="/Team" className="nav-link">
											Team
										</Link>
									</li>

									<li className="nav-item">
										<Link to="/CDP" className="nav-link">
											CDP
										</Link>
									</li>

									<li className="nav-item">
										<Link to="/WUCC" className="nav-link">
											WUCC
										</Link>
									</li>

									{/* <li className="dropdown submenu nav-item">
										<Link
											to="./"
											title="Pages"
											className="dropdown-toggle nav-link"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Pages
										</Link>
										<ul role="menu" className=" dropdown-menu">
											<li className="nav-item">
												<NavLink
													exact
													title="About"
													className="nav-link"
													to="/About"
												>
													About
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													exact
													title="Process"
													className="nav-link"
													to="/Process"
												>
													Process
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													exact
													title="Team"
													className="nav-link"
													to="/Team"
												>
													Team
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													exact
													title="Price"
													className="nav-link"
													to="/Price"
												>
													Price
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													exact
													title="Faq"
													className="nav-link"
													to="/Faq"
												>
													Faq
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													exact
													title="SignIn"
													className="nav-link"
													to="/SignIn"
												>
													Sign In
												</NavLink>
											</li>
											<li className="nav-item">
												<NavLink
													exact
													title="SignUp"
													className="nav-link"
													to="/SignUp"
												>
													Sign Up
												</NavLink>
											</li>
										</ul>
									</li> */}

									<li className="nav-item">
										<NavLink title="Pricing" className="nav-link" to="/Contact">
											Contact
										</NavLink>
									</li>
								</ul>
								{/*<a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">
									Apply
								</a>*/}
							</div>
						</div>
					</nav>
				</header>
			</Sticky>
		);
	}
}

export default CustomNavbar;