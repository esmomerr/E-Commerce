import "@/CSS/style.css";
import "@/CSS/Navbar.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return(
        <>
        <div className="container">
            <header>
                <nav className="navbar">
                    <Image src="/menu-icon.svg" alt="menu-icon" className="desktop-hidden" width={24} height={24}></Image>
                    <Link href="/" className="logo">Sneakers</Link>
                    <ul className="items">
                        <li className="item"><Link href="" className="item">Collections</Link></li>
                        <li className="item"><Link href="" className="item">Men</Link></li>
                        <li className="item"><Link href="" className="item">Women</Link></li>
                        <li className="item"><Link href="" className="item">About</Link></li>
                        <li className="item"><Link href="" className="item">Contact</Link></li>
                    </ul>
                </nav>
                <div className="right">
                    <Image src="/basket.svg" alt="" width={20} height={20}></Image>
                    <Image src="/oval.png" alt="" width={50} height={50}></Image>
                </div>
            </header>
        </div>
        </>
    )
}