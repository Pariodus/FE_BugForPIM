import CoworkingCatalog from "@/components/CoworkingCatalog"
import getCards from "@/libs/getCards"
import { LinearProgress } from "@mui/material"
import { Suspense } from "react"

export default function Coworking() {
    const cos = getCards()
    return (
        <main className="text-center p-5">            
            <h1 className="text-5xl font-medium">Coworking Space</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <CoworkingCatalog coJson={cos}/>
            </Suspense>
        </main>
    )
}