'use client'
import MainLoginFunc from "@/components/login&signup/MainLogin";
import Link from "next/link";

export default function LoginApp() {
    return (
        <>
            <Link href={"./"}>
                <button className="mx-1 mt-1 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" >Go to Home</button>
            </Link>
            <br />
            <MainLoginFunc />
        </>

    )
}