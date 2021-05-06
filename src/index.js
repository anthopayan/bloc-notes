import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import View from './components/View';
const Appli = () => (
    <div style={{color: "white", backgroundColor: "black"}}>
      <h1></h1>
      <App />
      <View />
      <ul>

    </ul>
    </div>
    
  );


  ReactDOM.render(<Appli />, document.getElementById('root'));