import React from "react";
import  ReactDOM  from "react-dom";
import image1 from "../../../media/10.jpg";
import image2 from "../../../media/0011.jpg";
import image3 from "../../../media/0012.jpg";
import image4 from "../../../media/0013.jpg";
import image5 from "../../../media/0014.jpg";
function Card(props) {
    return(
        <div className='card'>
            <div className="component">
                <h5> {props.name}</h5>
                <img src={props.img} alt=""   />
                <p>{props.description}</p>
                <p>{props.phone}</p>
            </div>
            {/* <div className="component">
                <h5>lloyd tony</h5>
                <img src={image2} alt="avatar"   />
                <p>description</p>
                
            </div>
            <div className="component">
                <h5>lloyd tony</h5>
                <img src= {image3} alt="avatar"   />
                <p>description</p>
                
            </div>
            <div className="component">
                <h5>lloyd tony</h5>
                <img src= {image5} alt="avatar"   />
                <p>description</p>
                
            </div>
            <div className="component">
                <h5>lloyd tony</h5>
                <img src={image1} alt=""   />
                <p>description</p>
                
            </div>
            <div className="component">
                <h5>lloyd tony</h5>
                <img src={image2} alt="avatar"   />
                <p>description</p>
                
            </div>
            <div className="component">
                <h5>lloyd tony</h5>
                <img src= {image3} alt="avatar"   />
                <p>description</p>
                
            </div>
            <div className="component">
                <h5>lloyd tony</h5>
                <img src= {image5} alt="avatar"   />
                <p>description</p>
                
            </div> */}
        </div>
    );
}
export default Card ;