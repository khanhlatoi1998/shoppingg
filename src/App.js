import './App.scss';
import Header from './Component/Header.js' ; 
import TitleContent from './Component/TitleContent.js' ; 
import Adv from "./Component/Adv.js" ; 
import MainContent from "./Component/MainContent.js" ; 
import Partner from "./Component/Partner.js" ; 
import Footer from "./Component/Footer.js" ; 
import Cart from "./Component/Cart.js" ; 
import {useState} from 'react' ; 
import { BrowserRouter as Router , Route } from 'react-router-dom' ;


function App() {

  const [cartItem, setcartItem] = useState([]) ; 

  const onAdd = (data) => {
    cartItem.push(data) ;
    for(let i = cartItem.length - 2; i >= 0; i--) {
      if(data.id === cartItem[i].id)
        cartItem.pop() ; 
    } ; 
    setcartItem([...cartItem]) ;  
  } ; 

  const onDelete = (index) => {
    cartItem.splice(index,1) ;
    setcartItem([...cartItem]) ;  
  } ; 

  return (
    <Router>
      <div className="App">
    		<Route path="/" render={() => (<Header cartItem={cartItem} isAuthed={true} />)} /> 
        <Route path="/cart" exact render={() => (<Cart onDelete={onDelete} cartItem={cartItem} isAuthed={true} />)} />
  	   	<Route path="/" exact component={TitleContent} />
        <Route path="/" exact component={Adv} />
        <Route path="/" exact render={() => (<MainContent onAdd={onAdd} cartItem={cartItem} isAuthed={true} />)} /> 
        <Route path="/" component={Partner} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
