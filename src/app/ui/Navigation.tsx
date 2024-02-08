"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationProps = {
  links: Array<{ href: string; key: string }>;
};

export const Navigation = ({ links }: NavigationProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className="flex">
      {links.map(({ href, key }) => {
        const isActive = pathname == href;
        return (
          <li className={`flex-auto ${isActive ? "text-blue-600" : "text-white"}`} key={key}>
            <Link href={href}>{key}</Link>
          </li>
        );
      })}
    </ul>
  );
};

{
  /* <ul className="flex bg-slate-500">
              {links.map(({ href, key }) => (
                <li className="flex-auto" key={key}>
                  <Link href={href}>{key}</Link>
                </li>
              ))}
            </ul> */
}
