import Link from 'next/link';
import { FaCircle, FaEnvelope, FaFacebookF, FaGooglePlusG, FaInstagram, FaLocationArrow, FaPhone, FaTwitter } from 'react-icons/fa6';
import { Button } from './button';
import GoBackToTop from '../GoBackToTop';
const socialLinks = [
    { id: "social-facebook-footer", href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
    { id: "social-twitter-footer", href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
    { id: "social-googleplus-footer", href: 'https://google.com', icon: FaGooglePlusG, label: 'GooglePlus' },
    { id: "social-instagram-footer", href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
];

const footerLinks = [
    { id: "footer-link-1", href: '/shuttle', label: 'Rumfærgen' },
    { id: "footer-link-3", href: '/gallery', label: 'Galleri' },
    { id: "footer-link-2", href: '/tours', label: 'Ture' },
    { id: "footer-link-4", href: '/safety', label: 'Sikkerhed' },
    { id: "footer-link-5", href: '/team', label: 'Vores team' },
]

export async function Footer() {
    const currentYear = new Date().getFullYear();

    const dataRequest = await fetch("http://localhost:4444/footer", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const footer = await dataRequest.json();

    return (
        <footer className="w-screen">
            <div className="w-full bg-accent-1 border-t border-primary-tint-60 py-10">
                <div className="max-w-screen-xl mx-auto p-4 py-6 lg:py-8">
                    <div className="md:flex md:items-start md:justify-between">
                        <div className="flex flex-col space-y-6 sm:justify-center md:mt-0">
                            <h2 className="text-xl font-bold text-navLink sm:text-center uppercase flex">
                                Kontakt
                            </h2>
                            <Link
                                href={`tlf:${footer.phone.replace(/\s/g, "")}`}
                                className="text-primary hover:text-primary flex peer group w-fit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div slot="icon" className="mr-3">
                                    <FaPhone className="size-5 peer-hover:text-primary group-hover:text-primary" />
                                    <span className="sr-only">Telefon nummer</span>
                                </div>
                                <span className="text-sm text-navLink hover:text-primary peer-hover:text-primary group-hover:text-primary sm:text-center font-semibold">
                                    {footer.phone}
                                </span>
                            </Link>

                            <Link
                                href={`mailto:${footer.email}`}
                                className="text-primary hover:text-primary-variant flex peer group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div slot="icon" className="mr-3">
                                    <FaEnvelope className="size-5 peer-hover:text-primary group-hover:text-primary" />
                                    <span className="sr-only">Email</span>
                                </div>
                                <span className="text-sm text-navLink hover:text-primary peer-hover:text-primary group-hover:text-primary sm:text-center font-semibold">
                                    {footer.email}
                                </span>
                            </Link>

                            <Link
                                href={`https://www.google.com/maps/search/?api=1&query=${footer.address.replace(/\s/g, "+")}`}
                                className="text-primary hover:text-primary-variant flex peer group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div slot="icon" className="mr-3">
                                    <FaLocationArrow className="size-5 peer-hover:text-primary group-hover:text-primary" />
                                    <span className="sr-only">Adresse</span>
                                </div>
                                <span className="text-sm text-navLink hover:text-primary peer-hover:text-primary group-hover:text-primary sm:text-center font-semibold">
                                    {footer.address}
                                </span>
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-6 sm:justify-center md:mt-0">
                            <h2 className="text-xl font-bold text-navLink sm:text-center uppercase flex">
                                Hurtige links
                            </h2>
                            <ul className='space-y-3 space-x-20 rtl:space-x-reverse grid grid-cols-2 '>
                                {footerLinks.map((link) => (
                                    <li key={link.href} className="flex">
                                        <Link
                                            href={link.href}
                                            className="text-primary hover:text-primary-variant flex peer group"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div slot="icon" className="mr-3 flex items-center justify-center">
                                                <FaCircle className="size-2 peer-hover:text-primary group-hover:text-primary" />
                                                <span className="sr-only">{link.label}</span>
                                            </div>
                                            <span className="text-sm text-navLink sm:text-center font-semibold peer-hover:text-primary group-hover:text-primary">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link href={'/contact'} className="flex justify-center w-1/3">
                                <Button className='rounded-none w-full'>
                                    Kontakt
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-accent-2">
                <div className="max-w-screen-xl mx-auto p-4 py-6 lg:py-8">
                    <div className="relative">
                        <span className="text-sm text-navLink/40 sm:text-left block">
                            © {currentYear} {footer.name}. All rights reserved.
                        </span>
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <div className="flex space-x-6 pointer-events-auto">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.id}
                                        href={social.href}
                                        className="text-navLink/30 hover:text-primary-variant"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.icon className="size-5" />
                                        <span className="sr-only">{social.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <GoBackToTop />
                    </div>
                </div>
            </div>
        </footer>
    );
}
