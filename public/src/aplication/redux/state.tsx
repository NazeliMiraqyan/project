// types
import { categoryAction } from "./types"
import { ECategoryActyonTypes } from "./types"
import { IInitialStateProps } from "./types"

// images
import img_1 from '../components/content/img/1.jpg'
import img_2 from '../components/content/img/2.jpg'
import img_3 from '../components/content/img/3.png'
import img_4 from '../components/content/img/4.png'
import img_5 from '../components/content/img/5.jpg'
import img_6 from '../components/content/img/6.jpg'


const initialState : IInitialStateProps = {
    arr:[
        {id:1, img: img_1, category:'popular', text: 'Illustration', lessons:'24 lessons', min:'134 min'},
        {id:2, img: img_2, category:'popular', text: 'Graphic design', lessons:'30 lessons', min:'236 min'},
        {id:3, img: img_3, category:'favorite', text: 'Illustration', lessons:'24 lessons', min:'134 min'},
        {id:4, img: img_4, category:'favorite', text: 'Graphic design', lessons:'30 lessons', min:'236 min'},
        {id:5, img: img_5, category:'new', text: 'Illustration', lessons:'24 lessons', min:'134 min'},
        {id:6, img: img_6, category:'new', text: 'Graphic design', lessons:'30 lessons', min:'236 min'}
        
    ],
    data: [],
}


export const categoryReducer  = (state : IInitialStateProps = initialState, action : categoryAction)=>{
    switch(action.type){
        case ECategoryActyonTypes.POPULAR:
            return {
                ...state,
                data: state.arr.filter(el => el.category === action.payload)}
        case ECategoryActyonTypes.FAVORITE:
            return {
                ...state,
                data: state.arr.filter(el => el.category === action.payload)}
            
        case ECategoryActyonTypes.NEW:
            return {
                ...state,
                data: state.arr.filter(el => el.category === action.payload)}
    }
    return state
}