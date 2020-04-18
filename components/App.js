import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from '../components/UI/Theme';
import Header from '../components/UI/Header';
import Footer from '../components/UI/Footer';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme = {theme}> 
     
     <BrowserRouter>
      <Header  value = {value} setValue = {setValue} selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/> 
        <Switch>
          <Route exact path = "/" component = {()=> <div style = {{height: "2000px"}}>home</div>}/>
          <Route exact path = "/services" component = {()=> <div style = {{height: "2000px"}}>services</div>}/>
          <Route exact path = "/customsoftware" component = {()=> <div style = {{height: "2000px"}}>custom software</div>}/>
          <Route exact path = "/mobileapps" component = {()=> <div style = {{height: "2000px"}}>mobileapps</div>}/>
          <Route exact path = "/websites" component = {()=> <div style = {{height: "2000px"}}>websites</div>}/>
          <Route exact path = "/revolution" component = {()=> <div style = {{height: "2000px"}}>revolution</div>}/>
          <Route exact path = "/about" component = {()=> <div style = {{height: "2000px"}}>about</div>}/>
          <Route exact path = "/contact" component = {()=> <div style = {{height: "2000px"}}>contact</div>}/>
          <Route exact path = "/estimate" component = {()=> <div style = {{height: "2000px"}}>estimate</div>}/>
          
          </Switch>
     
     <Footer value = {value} setValue = {setValue} selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex}/>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
