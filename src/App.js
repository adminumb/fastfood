import './scss/app.scss'
import React from "react";
import {Header,Button}  from './pageComponents/index'
import Cart from "./pages/Cart";
import  {  Route, Switch } from "react-router-dom"
import Home from "./pages/Home";
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {setItemsPizza} from "./redux/reducers/pizza/pizzasReducer";

function App() {

  //  const[pizza,setPizza]=React.useState([])

    React.useEffect(()=>{
        console.log('MainRender')
    },[])


  const dispatch = useDispatch()


    // React.useEffect(()=>{
    //   fetch('http://localhost:3000/db.json').then(resp=>resp.json()).then(json=>{
    //       setPizza(json.pizzas)
    //   })
    // }, [])


    React.useEffect(()=>{
        axios.get('http://localhost:3000/db.json').then(({data})=>{
         //При инициализации приложения диспатчим наш json в стэйт
           dispatch(setItemsPizza(data.pizzas))
           // setPizza(data.pizzas)
        })

    },[])


  return (
      <div className="wrapper">




          <div className="content">
              <Header/>
              {/*<Route path={'/home'} component={Home}/>}/>*/}
              {/*<Route path={'/pizza'} component={Cart} />*/}
              <Home/>

          </div>
      </div>
  );
}

export default App;
