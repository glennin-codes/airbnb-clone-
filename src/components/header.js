// import logo from "../images/logo512.png"
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
                    <h2 className="app--title"><a href="/travel/">Travel with us</a></h2>
                    <h2 className="app--title"><a href="/about us/">sites</a></h2>
                    <h2 className="app--title"><a href="/about us/">obout us</a></h2>
               
                    <h4 className="project--info">project-002</h4>
          </header>
     )
}

