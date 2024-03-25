import TopMenuItem from "./TopMenuItem"
import styles from './topmenu.module.css'
import { getServerSession } from "next-auth";
import { Link } from "@mui/material";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu(){
    const session = await getServerSession(authOptions)

    return (
            <div className={styles.menucontainer}>
                <TopMenuItem title='Home' pageRef='/'/>
                <TopMenuItem title='CoworkingSpaces' pageRef='coworkings/'/>
                <TopMenuItem title='About us' pageRef="aboutus/"/>
                <div className='flex flex-row absolute right-0 h-full'>
                    <TopMenuItem title="Cart" pageRef="/cart/"/>
                    <TopMenuItem title='Profile' pageRef="/profile/"/>
                    {
                        session? <Link href="http://localhost:3000/api/auth/signout">
                            <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>Sign-Out</div>
                            </Link>
                            : <Link href="http://localhost:3000/api/auth/signin">
                            <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>Sign-In</div>
                            </Link>
                    }
                </div>
            </div>
    )
}