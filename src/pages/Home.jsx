import {Categories, SortPopup} from "../pageComponents";
import React from "react";
import PizzaBlock from "./PizzaBlock";
import {useSelector, useDispatch} from "react-redux";
import {setCategory} from "../redux/reducers/filter/filterReducer";

const Home=()=>{

    const dispatch=useDispatch()

  // const items =useSelector(state=>{
  //     return {
  //         items: state.pizzas.items,
  //     }
  //   })

   const items= useSelector(({pizzasReducer})=>pizzasReducer.items)

    const onSelectCategory=index=>{
        dispatch(setCategory(index))
    }

    return(

        <div className="container">
            <div className="content__top">
                <Categories  onClickItem={(name)=>console.log(name)} items={[ 'Мясные', 'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые']} />

                <SortPopup items={[
                    {name:'популярности', type:'popular'},
                    {name:'цене', type:'price'},
                    {name:'алфавиту', type:'alphabet'}]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {items.map((n)=>(<PizzaBlock key={n.id} name={n.name} src={n.imageUrl} price={n.price} types={n.types} /> ))
                }
<PizzaBlock/>
<PizzaBlock/>

            </div>
        </div>



    )
}
export default Home