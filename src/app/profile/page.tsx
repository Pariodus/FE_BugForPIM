import DataReserve from "@/components/DateReserve";
import TextField from '@mui/material/TextField';
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import React from 'react';
import session from "redux-persist/lib/storage/session";


export default async function Profile() {

    const session = await getServerSession(authOptions)
    if(!session||!session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createAt = new Date(profile.data.createAt)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4" >
            <div className="text-4xl mt-5">Profile</div>

            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td>Tel.</td>
                        <td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td>Member Since</td>
                        <td>{createAt.toString()}</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}

