import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
const Team =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Team" tClass="t_color3" TitleP="UCC Executive Board"/>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_01.jpg" memberN="Aarsh Chokshi" memberd="Co-president"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="zsachs.jpg" memberN="Zoe Sachs" memberd="Co-president"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_03.jpg" memberN="Donovan Spall" memberd="Senior Advisor"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="atran.jpg" memberN="Austin Tran" memberd="Ops & Programming"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="zpatel.jpg" memberN="Zeal Patel" memberd="CDP & Pro-bono"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="jwang.jpg" memberN="Joyce Wang" memberd="Pro Dev & Case Prep"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="rramesh.jpg" memberN="Rineha Ramesh" memberd="Treasurer & Strategy"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="nlert.jpg" memberN="New Lert" memberd="Community & Outreach"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="sjayakody.jpg" memberN="Samantha Jayakody" memberd="Marketing"/>
                    </div>
                     {/*
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_9.jpg" memberN="Max Conversion" memberd="Social Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_10.jpg" memberN="Jake Weary" memberd="UI/UX designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_9.jpg" memberN="Justin Case" memberd="Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_12.jpg" memberN="Norman Gordon" memberd="Web developer"/>
                    </div>
                    */}
                </div>
            </div>
            
        </section>
        
    )
}
export default Team;