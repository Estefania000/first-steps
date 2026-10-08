"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    label: string;
};

function NavLink({ href, label }: NavLinkProps) {
    const pathname = usePathname();

    const isActive =
        pathname === href ||
        (href !== "/" && pathname.startsWith(`${href}/`));

    const className = `
        whitespace-nowrap
        rounded-md
        px-2
        py-1
        transition-colors
        ${isActive
            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200"
            : "hover:text-yellow-600 dark:hover:text-yellow-400"
        }
    `;

    return (
        <Link
            href={href}
            className={className}
            aria-current={isActive ? "page" : undefined}
        >
            {label}
        </Link>
    );
}

export default NavLink;