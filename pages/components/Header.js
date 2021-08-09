import React from 'react'
import Image from "next/image"
import HeaderItem from './HeaderItem'
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon, 
    UserIcon
} from "@heroicons/react/outline"

function Header() {
    return (
        <header className=" h-auto flex flex-col sm:flex-row justify-between m-5 items-center">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="HOME" Icon={HomeIcon}/>
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
            <HeaderItem title="SEARCH" Icon={SearchIcon}/>
            <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
        </div>
            <Image src="/logo.png" className="object-contain" width={150} height={40} alt="logo"/>
        </header>
    )
}

export default Header
