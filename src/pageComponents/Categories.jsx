
import React from 'react'



const  Categories=({items, onClickItem})=>{
    const[item, setItem]=React.useState(null)

    const onSelectItem=(index)=>{
        setItem(index)
        onClickItem(index)
    }

    return(

        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((name,index)=>(<li className={item===index?'active':''} onClick={()=>onSelectItem(index)} key={index}>{name}</li>))}
            </ul>
        </div>
    )
}
export default Categories