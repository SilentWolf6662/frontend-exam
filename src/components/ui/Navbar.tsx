'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LuMenu, LuX } from 'react-icons/lu';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const menuItems = [
    { href: '/', label: 'Hjem' },
    { href: '/shuttle', label: 'Rumfærgen' },
    { href: '/tours', label: 'Ture' },
    { href: '/gallery', label: 'Galleri' },
    { href: '/safety', label: 'Sikkerhed' },
    { href: '/contact', label: 'Kontakt' },
];

const socialItems = [
    { id: "social-facebook-1", href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
    { id: "social-twitter-1", href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
    { id: "social-googleplus-1", href: 'https://google.com', icon: FaGooglePlusG, label: 'GooglePlus' },
    { id: "social-instagram-1", href: 'https://instagram.com', icon: FaInstagram, label: 'LinkedIn' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const isActive = (href: string) => {
        return path === href;
    };

    return (
        <header className="bg-background w-full flex flex-col z-20 top-0 start-0 border-b border-primary-tint-60">
            <div className="w-full mx-auto flex flex-col items-center justify-between">
                <div className='flex items-center space-x-3 rtl:space-x-reverse w-2/3 mx-auto justify-start my-5'>
                    <Link href="/" className="">
                        <Image src={"/logo.png"} width={200} height={100} alt='SpaceVenture Logo' />
                        <h1 className="sr-only">
                            SpaceVenture Logo
                        </h1>
                    </Link>
                </div>
                <div className='w-full bg-secondary flex h-15'>
                    <div className="max-w-screen-xl flex flex-wrap w-2/3 h-11 items-center justify-between mx-auto">


                        {/* Mobile menu button */}
                        <button
                            type='button'
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-primary-tint-80 focus:outline-none focus:ring-2 focus:ring-primary-tint-60"
                        >
                            {isOpen ?
                                <LuX size={24} className="text-body" /> :
                                <LuMenu size={24} className="text-body" />
                            }
                        </button>

                        {/* Desktop menu */}
                        <nav className="hidden md:flex justify-between md:w-full h-15">

                            <ul className="flex flex-col justify-center items-center h-full font-medium border border-primary rounded-lg bg-secondary md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent self-end">
                                {menuItems.map((item) => (
                                    <li key={item.href} className='h-full'>
                                        <Link
                                            href={item.href}
                                            className={cn("flex h-full text-navLink md:p-3 text-center border-t-2 transition-colors duration-200", isActive(item.href) ? "border-primary bg-header-link-hover" : " border-transparent hover:border-primary hover:bg-header-link-hover")}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {socialItems && <ul className="flex flex-col  justify-center items-center p-4 md:p-0 mt-4 font-medium border border-primary rounded-lg bg-secondary md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                                {socialItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            className="block text-navLink rounded hover:text-primary md:p-0 transition-colors duration-200"
                                        >
                                            <item.icon className='size-5' />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            }
                        </nav>

                        {/* Mobile menu */}
                        {isOpen && (
                            <nav className="absolute top-full left-0 right-0 bg-secondary md:hidden">
                                <ul className="flex flex-col p-4 font-medium border border-primary rounded-lg bg-secondary">
                                    {menuItems.map((item) => (
                                        <li key={`${item.href}-Mobile`}>
                                            <Link
                                                href={item.href}
                                                className="block py-2 px-3 text-primary rounded hover:bg-accent-3 transition-colors duration-200"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
