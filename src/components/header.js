// import logo from "../images/logo512.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlane,faSitemap,faArchive} from "@fortawesome/free-solid-svg-icons";
import {faaboutus} from "@fortawesome/free-brands-svg-icons";

import './header.css';
 import logo from"../images/airbnb-logo_brandlogos.net_vb6uh.png"
export default function Header(){
    return (
          <header className="app--header">
                    <img
                         src={logo}
                         alt="app logo"
                         className="app--logo"
                    />
                    <h1 className="app--name">airbnb</h1>
                    <h2 className="app--title">
                         <a href="/travel/"> 
                             <FontAwesomeIcon
                                    icon={faPlane} 
                                    style={{fontSize:"100%",color:"crimson",paddingRight:"10px"}}>
                              </FontAwesomeIcon>
                                    Travel with us
                         </a>
                    </h2>
                    <h2 className="app--title">
                         <a href="/about us/">
                              <FontAwesomeIcon
                                      icon={faSitemap}
                                      style={{fontSize:"100%",color:"crimson" ,paddingRight:"10px"}}>
                              </FontAwesomeIcon>
                                    sites
                         </a>
                              
                    </h2>
                    <h2 className="app--title">
                         <a href="/about us/">
                                  <FontAwesomeIcon
                                      icon={faArchive}
                                      style={{fontSize:"100%",color:"green" ,paddingRight:"10px"}}>
                                 </FontAwesomeIcon>
                                      obout us
                          </a>
                    </h2>
               
                    <h4 className="project--info">project-002</h4>
          </header>
     )
}

