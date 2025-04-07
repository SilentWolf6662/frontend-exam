'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { LuMenu, LuX } from 'react-icons/lu';

const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/dashboard', label: 'Admin' },
];

export function NavbarAdmin({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-secondary border-r border-primary-tint-60 z-20 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 w-64`}
            >
                <div className="flex items-center justify-between p-4 border-b border-primary-tint-60">
                    <h1 className="text-2xl font-semibold text-header">Template</h1>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="md:hidden p-2 rounded-lg hover:bg-primary-tint-80 focus:outline-none focus:ring-2 focus:ring-primary-tint-60"
                    >
                        <LuX size={24} className="text-body" />
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-4">
                        {menuItems.map((item) => (
                            <li key={`${item.href}-Sidebar`}>
                                <Link
                                    href={item.href}
                                    className="block py-2 px-3 text-navLink rounded hover:bg-accent-3 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 ml-0 md:ml-64">
                <header className="bg-background fixed w-full z-10 top-0 left-0 md:left-64 border-b border-primary-tint-60">
                    <div className="flex items-center justify-between p-4">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-primary-tint-80 focus:outline-none focus:ring-2 focus:ring-primary-tint-60"
                        >
                            <LuMenu size={24} className="text-body" />
                        </button>
                        <h1 className="text-2xl font-semibold text-header">Admin Panel</h1>
                    </div>
                </header>
                <main className="mt-16 p-4">
                    {/* Add your main content here */}
                    {children}
                </main>
            </div>
        </div>
    );
}
