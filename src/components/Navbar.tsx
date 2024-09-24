'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

const Navbar = () => {
    return (
        <NavigationMenu.Root>
            <NavigationMenu.List className="flex space-x-4 p-4 bg-gray-800 text-white">
                <NavigationMenu.Item>
                    <Link href="/home" className="hover:underline">Home</Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link href="/profile" className="hover:underline">Profile</Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link href="/admin-view" className="hover:underline">Admin</Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link href="/create-project" className="hover:underline">Create Project</Link>
                </NavigationMenu.Item>
                {/* Agrega más enlaces según sea necesario */}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};

export default Navbar;
