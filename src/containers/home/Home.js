import React, { useState } from "react";
import "./Home.css";
import { InstagramLogo, LinkedInLogo } from "../../components/icons";
import profilePicture from "../../assets/photos/profilePicture.jpg";
import peopleCover from "../../assets/photos/people-cover.jpg";
import travelCover from "../../assets/photos/travel-cover.jpg";
import urbanCover from "../../assets/photos/urban-cover.jpg";
import bwCover from "../../assets/photos/bw-cover.jpg";
import experimentalCover from "../../assets/photos/experimental-cover.jpg";

const ProfileCard = ({ coor }) => <div id="wrapper" className="wrapper" >
    <div className="card">
        <img className="me" alt="profile" src={profilePicture} />
        <h1 className="text">
            J¥J
        </h1>
    </div>
</div>

export default function Home() {
    let lFollowX = 5;
    let lFollowY = 10;
    let lMouseX;
    let lMouseY;
    const friction = 1 / 13;
    const types = [ {id: 'people', text: 'People'},
                    {id: 'travel', text: 'Travel'},
                    {id: 'urban', text: 'Urban'},
                    {id: 'bw'   , text: 'Black and White'},
                    {id: 'experimental', text: 'Experiemental'}]
    const [coor, setCoor] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
        e.preventDefault();
        lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
        lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
        lFollowX = (12 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        lFollowY = (10 * lMouseY) / 100;
        const xcoor = coor.x + (lFollowX - coor.x) * friction;
        const ycoor = coor.y + (lFollowY - coor.y) * friction;
        let elem = document.getElementById("wrapper");
        setCoor({ x: xcoor, y: ycoor });
        elem.style.transform = `translate(-50%, -50%) perspective(600px) rotateY(${-coor.x}deg) rotateX(${coor.y}deg)`;
    };

    function handleSelect() {
        // document.getElementById("header").style.zIndex = -1;
    }

    function handleMouseIn(id) {
        document.getElementById(id).style.opacity = 1;
    }

    function handleMouseOut(id) {
        document.getElementById(id).style.opacity = 0;
    }

    return (
        <div className="Home">
            <div className="header-container">
                <div id="header" className="header" coor={coor} onMouseDown={handleSelect} onMouseMove={handleMouseMove}>
                    <ProfileCard />
                </div>
                <div className="sub-header">
                    <div className="hello" >
                        <span id="hellomsg">
                            Bello, my name is Young Joo<br />
                            I do creative work<br />
                            scroll down <br />
                            to see more<br />
                            of my work <br />
                            thanks for stopping by.<br />
                        </span>
                        <div id="selectmsg" className="select">
                            so you are &nbsp; &nbsp; &nbsp; &nbsp; <br />
                        that kind of person &nbsp; &nbsp; &nbsp; <br />
                        that love to select  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
                        everything &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
                        in a website. &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; <br />
                        think about it. &nbsp; &nbsp; &nbsp; &nbsp; <br />
                        </div>
                    </div>
                    <section className="socialSection">
                        <a href="https://www.instagram.com/inmyjuniverse" title="Follow my contents on Instagram">
                            <InstagramLogo />
                        </a>
                        <a href="https://www.linkedin.com/in/young-joo-jun-051608179/" title="Connect with me on LinkedIn">
                            <LinkedInLogo />
                        </a>
                    </section>
                </div>


            </div>
            <div className="body">
                <div id="img-wrap" className="img-wrap">
                    <img id="people" alt="people" src={peopleCover} />
                    <img id="travel" alt="travel" src={travelCover} />
                    <img id="urban"  alt="urban" src={urbanCover} />
                    <img id="bw"     alt="blackandwhite" src={bwCover} />
                    <img id="experimental" alt="something" src={experimentalCover} />
                </div>
                <div className="section">
                    <ul className="slide-buttons">
                        {types.map((r,i) => 
                            <li key={r.id} className="">
                                <a onMouseEnter={_ => handleMouseIn(r.id)} onMouseLeave={_ => handleMouseOut(r.id)} href="https://inmyjuniverse.squarespace.com/people"  className="hover-target" data-hover={r.id}>{r.text}</a>
                            </li>)}
                    </ul>
                </div>

            </div>
        </div>
    );
}