import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
import Reveal from 'react-reveal';
const AppTeam =()=>{
    return(
        <section className="experts_team_area sec_pad" id="team">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Team" tClass="t_color3" TitleP="UCC Executive Board"/>
                <Reveal bottom cascade>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="team_01.jpg" memberN="Aarsh Chokshi" memberd="Co-president"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="team_02.jpg" memberN="Ryan Popov" memberd="Co-president"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="team_03.jpg" memberN="Donovan Spall" memberd="director"/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Teamitem teamImage="team_04.jpg" memberN="William Teke" memberd="Marketer"/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <a href=".#" className="learn_btn">Meet All Team <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
        
    )
}
export default AppTeam;