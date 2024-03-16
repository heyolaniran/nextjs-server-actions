"use server"
import AnimeCard from "./components/AnimeCard";
import { AnimeCardProp } from "../types/AnimeCardProp";
export const fetchAnime = async (page : number) => {

    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`) ; 

    const data = await response.json() ; 

    console.log(data); 

    return  data.map((item : AnimeCardProp , index : number ) => (
                <AnimeCard key={item.id} anime={item} index={index} /> 
            ))
        
     ; 
}