import getCard from "@/libs/getCard"
import Image from "next/image"
import Link from "next/link"

export default async function CoworkingDetailPage({params}:{params:{cid:string}}){

   const coworkingDetail = await getCard(params.cid)
   return(
      <main className="text-center p-5">
         <h1 className="text-2xl font-medium">CoworkingSpace ID {params.cid}</h1>
         
         <div className="my-10  flex-row">
               <Image src={ coworkingDetail.data.picture }
                    alt='Car Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] mx-auto"/>

               <div className="flex flex-col items-center">
                  <div className="block bg-blue-200 mx-5 my-10 w-[40vw] h-[20vh] rounded-lg">
                     <div className="mx-5 my-5 text-left">
                     <div className="text-xl mx-5">Name: { coworkingDetail.data.name }</div>
                     <div className="text-xl mx-5">address: { coworkingDetail.data.address }</div>
                     <div className="text-xl mx-5">tel: { coworkingDetail.data.tel }</div>
                     <div className="text-xl mx-5">openTime - closeTime: { coworkingDetail.data.openTime } - {coworkingDetail.data.closeTime}</div>
                     </div>
                  </div>
                  <Link href={`/reservations?id=${params.cid}&name=${coworkingDetail.data.name}`}>
                     <button className="block rounded-md bg-rose-400 hover:bg-pink-700 px-3 py-2 text-white shadow-sm">
                        Make Reservation
                     </button>
               </Link>
               </div>
               <hr></hr>
         </div>
      </main>
   )
}
