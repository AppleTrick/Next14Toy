import { Metadata } from "next";
import { ReactNode } from "react";
import "./global.css";
// import Link from "next/link";
import { Navigation } from "./ui/Navigation";
import { LinkButton } from "./ui/LinkButton";
import { UseNavNavigation } from "./ui/UseNavNavigation";

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
            <Navigation links={links} />
            <div>normal</div>
            <UseNavNavigation buttonTypes="normal" links={links} />
            <div>refresh</div>
            <UseNavNavigation buttonTypes="refresh" links={links} />
            <div>replace</div>
            <UseNavNavigation buttonTypes="replace" links={links} />
          </div>
        </header>
        {props.children}
      </body>
    </html>
  );
}
