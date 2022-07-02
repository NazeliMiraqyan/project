// state

export interface IItemProps {
    id:number,
    img: string,
    category:string,
    text?: string,
    lessons?:string,
    min?:string
}

export interface IInitialStateProps {
    arr:IItemProps[]
    data: IItemProps[]
}

export interface InitialState {
    category:IInitialStateProps
}


// actions

export enum ECategoryActyonTypes{
    POPULAR  = 'popular',
    FAVORITE = 'favorite',
    NEW = 'new'
}
export interface IPopularCategory{
    type:ECategoryActyonTypes.POPULAR,
    payload:string
}
export interface IFavoriteCategory{
    type:ECategoryActyonTypes.FAVORITE,
    payload:string
}

export interface INewCategory{
    type:ECategoryActyonTypes.NEW,
    payload:string
}

export type categoryAction = IPopularCategory | IFavoriteCategory | INewCategory