import { useState } from "react"
import React from "react";
import './content.scss'
import vector from './img/Vector.png'
import { useSelector } from 'react-redux';
import { IItemProps, InitialState } from "../../redux/types";

const Content : React.FC = () =>{

    const [item, setItem] = useState('popular')
    const selector = useSelector((state: InitialState) => state.category.data)
    const popularArr = useSelector((state: InitialState) => state.category.arr)
 
    const filteredByCategory = popularArr.filter((el: IItemProps) => el.category === item)
 
    return(
        <>
          {selector.length === 0 ?
            filteredByCategory.map((el:IItemProps, i: number)=>{
                return(
                    <div key={i} className='cntent' >
                        
                        <p className="top-left">{el.text ? el.text : ''}</p>
                        <p className="top-right">{el.min ? el.min: ''}</p>
                        <p className="top-left-bottom">{el.lessons ? el.lessons : ''}</p>
                        <p className="bottom-left">{el.text ? <img src={vector} className='bottom-left-img'/> : ''}</p>
                        <img src={el.img} className='categoryImg' />
                                 
                    </div>
                )
               })
           :  selector.map((el: IItemProps, i: number)=>{
            return(
                <div key={i} className='cntent'>
                    
                    <p className="top-left">{el.text ? el.text : ''}</p>
                    <p className="top-right">{el.min ? el.min: ''}</p>
                    <p className="top-left-bottom">{el.lessons ? el.lessons : ''}</p>
                    <p className="bottom-left">{el.text ? <img src={vector} className='bottom-left-img'/> : ''}</p>
                    <img src={el.img} className='categoryImg'/>
                             
                </div>
            )
           }) }
          
        </>
    )
}
export default Content