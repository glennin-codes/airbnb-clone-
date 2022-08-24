import { products } from "./main.props"
import './main.css'
export default  function Main(){
  
    return(
        <div className="app--items">
    {products.map(props=>
            <div key={props.id} className="container">
                 <div className="card--items">
                      <img
                                src={props.image}
                                alt={props.title}
                                className="card--img"
                   
                        />
                       <div className="card--description">
                                <h2 className="card--title">{props.title}</h2>
                                <p className="text--content">{props.description}</p>
                      </div>
                </div>
         </div>
    )}
   </div>
  )

}