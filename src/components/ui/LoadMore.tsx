'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer" ; 
import { fetchAnime } from "@/action";

export type AnimateJSX = JSX.Element ; 


let page = 2 ; 

export default function LoadMore() {

    const [ref, inView] = useInView() ; 

    const [data,  setData] = useState<AnimateJSX[]>([]) ; 

    useEffect(() => {

        if(inView) {
            fetchAnime(page)
            .then((res) => {
                setData([...data, ...res]); 

                page++ ; 
            })
        }

    }, [inView])


    return (
        <>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {data}
            </section>
            <section className="flex mt-2 justify-center items-center w-full">
                <div ref={ref}>
                    <Image src={'./spinner.svg'} height={64} width={64} className="object-contain" alt="spin" /> 
                </div>
            </section>
        </>
    )
}