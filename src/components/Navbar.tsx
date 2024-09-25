'use client';

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul className="flex space-x-4 p-4 bg-gray-800 text-white">
                <li>
                    <Link href="/home" className="hover:underline">Home</Link>
                </li>
                <li>
                    <Link href="/profile" className="hover:underline">Profile</Link>
                </li>
                <li>
                    <Link href="/admin-view" className="hover:underline">Admin</Link>
                </li>
                <li>
                    <Link href="/create-project" className="hover:underline">Create Project</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
