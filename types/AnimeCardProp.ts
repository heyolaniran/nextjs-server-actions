
export interface AnimeCardProp {
    id : string ;
    name : string ;
    image : {
        original : string
    };

    kind : string ; 
    episodes : number; 
    episodes_aired : number; 
    score : string

}


export interface Prop {
    anime : AnimeCardProp , 
    index: number
}