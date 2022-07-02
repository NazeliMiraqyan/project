
import { ECategoryActyonTypes } from "./types"

export function popularCategory(val: string){
    return{
        type: ECategoryActyonTypes.POPULAR,
        payload: val
    }
}

export function favoriteCategory(val: string){
    return{
        type: ECategoryActyonTypes.FAVORITE,
        payload: val
    }
}

export function newCategory(val: string){
    return{
        type: ECategoryActyonTypes.NEW,
        payload: val
    }
}