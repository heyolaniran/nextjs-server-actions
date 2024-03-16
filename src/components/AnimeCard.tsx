import Image from "next/image";
import { Prop } from "../../types/AnimeCardProp";
import { motion } from "framer-motion";
import { MotionDiv } from "./ui/MotionDiv";

const variants = {
    hidden : {
        opacity : 0, 
    }, 
    visible : {
        opacity : 1
    }
}

export default function AnimeCard({anime} : Prop) {

    return (
        <>
        <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            delay: 1 , 
            ease: "easeInOut", 
            duration : 0.5
        }}
        viewport={{amount : 0}}
        className="rounded relative w-full max-w-sm">
            <div className="relative w-full h-[37vh]">
                <Image src={`https://shikimori.one${anime.image.original}`}  alt={anime.name} 
                 fill className="rounded-xl"/>
            </div>

            <div className="py-4 flex flex-col gap-3">
                <div className="flex justify-between items-center gap-1">
                    <h2 className="font-bold line-clamp-1 text-white w-full">{anime.name}</h2>
                    <div className="px-2 py-1 rounded-sm bg-[#161921]">
                        <p className="text-sm capitalize font-medium text-white">{anime.kind}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <div className="flex flex-row gap-2 items-center">
                    <Image src={'/episodes.svg'} alt="ep"  className="object-contain" width={20} height={20}/>

                    <p className="text-vase text-white font-bold">
                        {anime.episodes || anime.episodes_aired}
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <Image src={'/stars.svg'} alt="st"  className="object-contain" width={18} height={18} />
                    <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
                </div>
            </div>
        </MotionDiv>
        </>
    ); 
}