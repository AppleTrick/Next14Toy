import { Metadata } from "next";
import { ReactNode } from "react";
import "./global.css";
import Link from "next/link";

// 메타데이터 변경 가능
export const metadata: Metadata = {
  title: {
    template: "%s | Acme",
    default: "Acme", // a default is required when creating a template
  },
};

// 링크들
const links: Array<{ href: string; key: string }> = [
  {
    href: "/",
    key: "home",
  },
  {
    href: "/dashboard",
    key: "dashboard",
  },
  {
    href: "/guides",
    key: "guides",
  },

  {
    href: "/login",
    key: "login",
  },
];
interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <ul className="flex bg-slate-500">
              {links.map(({ href, key }) => (
                <li className="flex-auto" key={key}>
                  <Link href={href}>{key}</Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
        {props.children}
      </body>
    </html>
  );
}
