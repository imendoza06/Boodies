import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import './Home.css';
import Logo from "../Images/Logo.png";
import Test from "../Images/Test.jpg";
import Test2 from "../Images/Test2.jpg";
import Test3 from "../Images/Test3.jpeg";
import MenuIcon from "../Images/MenuIcon.png";
import Topreview from "./Topreview";

class Home extends React.Component {
    state = { selected: "Select Category", input: "", address: "" };

    handleSelect = e => {
        this.setState({
            selected: e.target.value
        });
    };
    handleSearch = e => {
        this.setState({
            input: e.target.value
        });
    };
    handleAddressSearch = e => {
        this.setState({
            address: e.target.value
        });
    };



    render() {
        const { selected, input, address } = this.state;
        const categories = ["Select Category", "Dance", "Art", "Photography"];


        return (
            <div>
                <div>
                    <div id="topbar">
                        <Link to={`/login`}><a class="hoverturn"><span data-title="Log In">Log In</span></a></Link>
                        <Link to={`/signup`}><a class="hoverturn"><span data-title="Sign Up">Sign Up</span></a></Link>
                    </div>
                <main class="wrapper">
                    <section class="section parallax bg1" id="homeheader">
                        <div id="header">
                        <svg  class="center" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 792" width="400px" >
                    <g id="R">
	                   <path class ="fadeInwards" d="M219.3,311.3c0,0-4.4-4.5-11.8-12c-35.5-36.3-138.9-142-138.9-142L65,634.7l63.7-61.3L124,396l68.7,110.7
		               l26-24.7l-45.3-86h45.3L219.3,311.3z M196,370l-84-13.3c0,0-0.3-21.7-0.6-43.7c-0.3-22.9-0.7-46.3-0.7-46.3L196,340V370z"/>
                    </g>
                    <g id="A">
	                   <path class ="fadeInwards2" d="M219.3,311.3L218.7,482l44.7-0.7v-44.7H344v44.7c0,0,0.2,0,0.7,0c5.6,0,44.7,0,44.7,0l0.7-170.7L219.3,311.3z
		               M344,396.7l-80.7-0.7l-0.7-52.7c0,0,73.5,0.6,81.3,0.7c0.4,0,0.7,0,0.7,0L344,396.7z"/>
                    </g>
                    <g id="S">
	                   <polyline class ="fadeInwards3" points="390,310.7 542,157.3 542.7,271.3 466,318.3 466,370 547,339.3 542.3,634.7 389.3,481.3 390,429.3 
		               463.3,473.3 462,421.3 390,396 390,310.7 	"/>
                    </g>
                    <g id="TL">
	                   <path class ="fadeInwards4" d="M131.9,157.3c-19.2,0-33.9,0-33.9,0l133.3,137.3l-12-137.3C219.3,157.3,167.8,157.3,131.9,157.3z"/>
                    </g>
                    <g id="TM">
	                   <polyline class ="fadeInwards5" points="241.3,157.3 254,294.7 354,294.7 368,157.3 241.3,157.3 	"/>
                    </g>
                    <g id="TR">
	                   <path class ="fadeInwards6" d="M475.8,157.3c19.2,0,33.9,0,33.9,0L376.4,294.7l12-137.3C388.4,157.3,439.9,157.3,475.8,157.3z"/>
                    </g>
                    <g id="DL">
	                   <path class ="fadeInwards7" d="M131.9,635.3c-19.2,0-33.9,0-33.9,0L231.3,498l-12,137.3C219.3,635.3,167.8,635.3,131.9,635.3z"/>
                    </g>
                    <g id="DM">
	                   <polyline class ="fadeInwards8" points="242.7,635.3 255.3,498 355.3,498 369.3,635.3 242.7,635.3 	"/>
                    </g>
                       <g id="DR">
	                <path class ="fadeInwards9" d="M475.8,635.3c19.2,0,33.9,0,33.9,0L376.4,498l12,137.3C388.4,635.3,439.9,635.3,475.8,635.3z"/>
                       </g>
                    </svg>
                            <h3 class="center fadeInwards10" id="homesub">Rent A Studio Efficiently</h3>
                            <div class="center" id="search">
                                <select onChange={this.handleSelect}>
                                    {categories.map(category => (
                                        <option value={category}>{category}</option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={input}
                                    onChange={this.handleSearch} />
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={address}
                                    onChange={this.handleAddressSearch} />
                                <button type="submit">Search</button>
                            </div>
                            <br />
                        </div>
                    </section>
                    <section class="section halfsection whitebg" id="homereview">
                        <h1>Top Reviewed This Week</h1>
                        <div id="homereviewlist">
                            <Topreview
                                image={Test}
                                header="Broadway Dance Center"
                                description="New York, NY"
                                bigdiv="reviewdiv"
                                worddiv="reviewword"
                                alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                            />
                            <Topreview
                                image={Test2}
                                header="Broadway Dance Center"
                                description="New York, NY"
                                bigdiv="reviewdiv"
                                worddiv="reviewword"
                                alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                            />
                            <Topreview
                                image={Test}
                                header="Broadway Dance Center"
                                description="New York, NY"
                                bigdiv="reviewdiv"
                                worddiv="reviewword"
                                alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                            />
                            <Topreview
                                image={Test3}
                                header="Broadway Dance Center"
                                description="New York, NY"
                                bigdiv="reviewdiv"
                                worddiv="reviewword"
                                alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                            />
                        </div>
                    </section>
                    <section class="section msection parallax bg2" id="homespotlight">
                        <h1>Spotlight</h1>
                        <div id="slspace">
                         <div id="slword">
                            <h3>Broadway Dance Center</h3>
                            <p>There are many great review for this place. Don't you think so?
                            </p>
                         </div>
                             <img src={Test}/>
                        </div>
                    </section>
                    <section class="section halfsection blackbg" id="homenew">
                        <h1> New and Upcoming Studios </h1>
                        <div id="homenewlist">
                            <Topreview
                                image={Test3}
                                header="Broadway Dance Center"
                                description="New York, NY"
                                bigdiv="newdiv"
                                worddiv="newword"
                                alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                            />
                            <Topreview
                                image={Test}
                                header="Broadway Dance Center"
                                description="New York, NY"
                                bigdiv="newdiv"
                                worddiv="newword"
                                alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                            />
                            <Topreview
                                image={Test2}
                                header="Broadway Dance Center"
                                description="New York, NY"
                                bigdiv="newdiv"
                                worddiv="newword"
                                alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                            />
                            <Topreview
                                image={Test}
                                header="Broadway Dance Center"
                                description="New York, NY"
                                bigdiv="newdiv"
                                worddiv="newword"
                                alink="https://nypost.com/2018/02/28/rent-the-runway-implements-no-fur-policy-peta/"
                            />
                        </div>
                    </section>
                </main>
                <div id="footer">
                    <Link to={`/contact`}><a class="hoverturn"><span data-title="Contact">Contact</span></a></Link>
                    <Link to={`/about`}><a class="hoverturn"><span data-title="About Us">About Us</span></a></Link>
                    <p>RAS @ 2018</p>
                </div>
            </div>
            </div >
        );
    }
}

export default Home;