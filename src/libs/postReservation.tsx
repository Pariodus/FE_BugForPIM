import { ReservationItem } from "../../interface"

export default async function postReservation(token: string, reservationItem:ReservationItem){
    const response = await fetch(`http://localhost:5000/api/v1/coworkings/${reservationItem.coworking}/reservations`, {
        method: "POST",
        headers: {
            "Content-type": "appliaction/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            pickupDate: reservationItem.reserveDate,
            startTime: reservationItem.reserveDateStart,
            endTime: reservationItem.reserveDateEnd 
        })
    })

    if(!response.ok) {
        // throw new Error("Cannot post booking");
        return await response.json()
    }

    return await response.json()
}