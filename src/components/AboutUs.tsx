import Image from "next/image"

export default function AboutUs({github, discord}: {github:string, discord:string}){
    return (
        <div className="flex flex-col m-5 text-left">
            <div className="flex flex-row items-center m-7">
                <Image src="/img/gitLogo.jpg"
                    alt='GitHub Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg  w-[100px]"/>
                <div className="m-2">{github}</div>
            </div>
            
            <div className="flex flex-row items-center">
                <Image src="/img/discordLogo.jpg"
                    alt='Discord Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg ml-9 w-[80px]"/>
                <div className="ml-5">{discord}</div>
            </div>
                        
        </div>
    )
}