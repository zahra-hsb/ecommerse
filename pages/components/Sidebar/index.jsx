import Link from "next/link"
import { RxDashboard } from "react-icons/rx";
import { VscArchive } from "react-icons/vsc";
import { RiListUnordered } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { BsShop } from "react-icons/bs";


const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col items-start gap-10 bg-blue-900 w-1/5 h-screen p-10 text-white text-lg">
                <h4 className="flex items-center gap-4 font-bold">
                <BsShop />Ecommerse Admin</h4>
                <ul className="flex flex-col gap-8">
                    <li>
                        <Link href={'/'} className="hover:text-gray-300 text-md flex items-center gap-3">
                            <RxDashboard />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className="hover:text-gray-300 text-md flex items-center gap-3">
                            <VscArchive />
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className="hover:text-gray-300 text-md flex items-center gap-3">
                            <GoNote />
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className="hover:text-gray-300 text-md flex items-center gap-3">
                            <RiListUnordered />
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className="hover:text-gray-300 text-md flex items-center gap-3">
                            <HiOutlineUserGroup />
                            Admins
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className="hover:text-gray-300 text-md flex items-center gap-3">
                        <IoSettingsOutline />
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className="hover:text-gray-300 text-md flex items-center gap-3">
                            <BiLogOut />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar