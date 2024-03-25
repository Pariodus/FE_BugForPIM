import Link from "next/link";
import CoworkingCard from "./CoworkingCard";
import { CoworkingJson, CoworkingItem } from "../../interface";

export default async function CoworkingCatalog({coJson}: {coJson:Promise<CoworkingJson>}){
    const coJsonReady = await coJson;

    return (
        <>
        <div className="m-3">
            Explore {coJsonReady.count} CoworkingSpaces in our CoworkingCatalog 
        </div>
        <div  style={{margin:"10px", display:"flex", flexDirection:"row", flexWrap:"wrap", 
            justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    coJsonReady.data.map((coItem:CoworkingItem) => (
                        <Link href={`/coworkings/${coItem.id}`} className="w-1/5 m-5">
                            <CoworkingCard cardName={coItem.name} imgSrc={coItem.picture}/>
                        </Link>
                    ))
                }
        </div>
        </>
    )
}