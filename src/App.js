import React,{Component} from 'react';
import Navbar from './navbar.js';
import Enter from './enter.js';
class App extends Component {
    state = {  }
    render() { 
        return(
            <div>
            <Navbar/>
            <Enter/>
            </div>
        );
    }
}
 
export default App ;