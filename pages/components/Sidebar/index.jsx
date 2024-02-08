import Link from "next/link"

const Sidebar = () => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link href={'/'}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Admins
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'}>
                            Signout
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar