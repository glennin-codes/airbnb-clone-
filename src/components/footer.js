import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faGooglePlus,faLinkedin,faTwitter,faInstagram,faYoutube, faPinterest} from '@fortawesome/free-brands-svg-icons'


import  './footer.css';
export default  function Footer(){
    return(
<footer>
  <div className='wrapper'>
    <div className='seperator padded'>
      <div className='col-2'>
        <select>
          <option>English</option>
          <option>Espaniol</option>
          <option>French</option>
        </select>
        <select>
          <option>INR</option>
        </select>
      </div>
      <div className='col-1 first'>
        <h3>Company</h3>
        <ul className="list-layout">
          <li><a href="/about/about-us" className="link-contrast">About</a></li>
          <li><a href="/careers" className="link-contrast">Careers</a></li>
          <li><a href="/press/news" className="link-contrast">Press</a></li>
          <li><a href="http://blog.airbnb.com" className="link-contrast">Blog</a></li>
          <li><a href="/help?from=footer" className="link-contrast">Help</a></li>
          <li><a href="/policies" className="link-contrast">Policies</a></li>
          <li><a href="/disaster-response" className="link-contrast">Disaster Response</a></li>
          <li><a href="/terms" className="link-contrast">Terms &amp; Privacy</a></li>
        </ul>
      </div>
      <div className='col-1'>
        <h3>Discover</h3>
        <ul className="list-layout">
          <li><a href="/trust" className="link-contrast">Trust &amp; Safety</a></li>
          <li><a href="/invite?r=6" className="link-contrast">Travel Credit</a></li>
          <li><a href="/gift" className="link-contrast">Gift Cards</a></li>
          <li><a href="/wishlists/airbnb_picks" className="link-contrast">Airbnb Picks</a></li>
          <li><a href="/mobile" className="link-contrast">Mobile</a></li>
          <li><a href="https://www.airbnbaction.com?utm_source=airbnb&amp;utm_medium=footer&amp;utm_campaign=product" className="link-contrast" >Airbnb Action</a></li>
          <li><a href="/business-travel?s=footer" className="link-contrast">Business Travel</a></li>
          <li><a href="/sitemaps" className="link-contrast">Site Map</a></li>
        </ul>
      </div>
      <div className='col-1'>
        <h3>Hosting</h3>
        <ul className="list-layout">
          <li><a href="/host" className="link-contrast">Why Host</a></li>
          <li><a href="/hospitality" className="link-contrast">Hospitality</a></li>
          <li><a href="/help/responsible-hosting" className="link-contrast">Responsible Hosting</a></li>
          <li><a href="/home-safety" className="link-contrast">Home Safety</a></li>
          <li><a href="/host/instant" className="link-contrast">Instant Book</a></li>
        </ul>
      </div>
    </div>
    <div className='seperator column text-center'>
      <h2 className='margin-below-1'>Join Us on</h2>
      <div className='smedialinks'>
      <i> <FontAwesomeIcon icon={faFacebook} style={{color:"blue", backgroundColor:"blue",fontSize:"25px" }}></FontAwesomeIcon></i>
      <i><FontAwesomeIcon icon={faTwitter} style={{color:"blue", backgroundColor:"blue",fontSize:"25px"}} ></FontAwesomeIcon></i>
      <i> <FontAwesomeIcon icon={faLinkedin} style={{color:"blue", backgroundColor:"blue",fontSize:"25px" }}></FontAwesomeIcon></i>
      <i><FontAwesomeIcon icon={faPinterest} style={{color:"blue", backgroundColor:"red",fontSize:"25px" }}></FontAwesomeIcon> </i>
      <i><FontAwesomeIcon icon={faGooglePlus} style={{color:"white", backgroundColor:"brown",fontSize:"25px"}}></FontAwesomeIcon> </i>
      <i><FontAwesomeIcon icon={faInstagram} style={{color:"white", backgroundColor:"crimson",fontSize:"25px"}}></FontAwesomeIcon> </i>
      <i><FontAwesomeIcon icon={faYoutube} style={{color:"white", backgroundColor:"red",fontSize:"25px"}}></FontAwesomeIcon> </i>
      </div>
    </div>
  </div>
  <p className='copyright'>Airbnb made by GLENNIN TECH's</p>
</footer>
)
}