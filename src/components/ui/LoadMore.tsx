import Image from "next/image"
export default function LoadMore() {

    return (
        <>
            <section className="flex mt-2 justify-center items-center w-full">
                <div>
                    <Image src={'./spinner.svg'} height={64} width={64} className="object-contain" alt="spin" /> 
                </div>
            </section>
        </>
    )
}