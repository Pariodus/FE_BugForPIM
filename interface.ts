export interface CoworkingItem {
    _id: string,
    name: string,
    address: string,
    tel: string,
    openTime:string,
    closeTime:string,
    picture: string,
    __v: number,
    id: string
  }
  
export interface CoworkingJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CoworkingItem[]
}

export interface ReservationItem {
  reserveDate: string,
  reserveDateStart: string,
  reserveDateEnd: string,
  user: string,
  coworking: string
}

// export interface User{
//   _id:string,
//   name:string,
//   email:string,
//   telephone: string,
//   role: string,
//   password:string,
//   token: string
// }