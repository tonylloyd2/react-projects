import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pathReservations from "tar/lib/path-reservations";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list:[]
    }
  }
//creating an object
  addItem(todovalue){
    if (todovalue !=="") {
      const newItem = {
        id:Date.now(),
        value : todovalue,
        isDone : false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }  
  }
  
  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({list:updatedlist});
  }
  updatedInput(input){
    this.setState({newItem:input});
  }

  render(){

    return( 
    <div className="container">
      
      <h1 className="header">Recreate the ui/ux</h1>
      <img src={logo} width="300" height="300" className="logo"/>
      <br/>
      <div className="body-section">
        <input  type="text" 
         placeholder="write to do "
         className="input-text" 
         required
         value={this.setState({newItem:input})}
         onChange={e => this.updatedInput(e.target.value)}
         />
        <br/>
        <button 
         type="submit"
         className="add-btn"
         onClick={() => this.addItem(this.state.newItem)}
         disabled={!this.state.newItem.length} >
            Click Me
        </button>
        <div className="list">
          <ul>
            <li>
              <input type="checkbox" name="" id="" className="input-checkox"/>
              <label className="label-checkbox">check box one</label>          
              <button type="submit" className="delete-btn" >delete</button>
            </li>
          </ul>
        </div>
      </div>

    </div>
    );

  }

}
export default App;











































































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
