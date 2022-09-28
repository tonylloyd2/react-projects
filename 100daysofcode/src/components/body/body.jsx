import React from "react";
import ReactDOM from "react-dom";
import List from "./componets/list";
import  Note  from "./componets/note";
import Card from "./componets/reusable_card";
import image1 from "../../media/10.jpg";
import image2 from "../../media/0011.jpg";
function Body() {
     
    return(
        <div>
        <h3>My Contacts</h3>
        {/* <List /> */}
        {/* <div className="card">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div> */}
        <div className="card">
            <Card 
                name="Beyonce"
                img= {image1}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image2}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image1}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image1}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image2}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image2}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image1}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image1}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image2}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image2}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image1}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image1}
                description="hello new world"
                phone="9876543"
             />
             <Card 
                name="Beyonce"
                img= {image2}
                description="hello new world"
                phone="9876543"
             />
        </div>
        </div>
    );
        
}
export default Body;
