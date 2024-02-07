import { Metadata } from "next";
import { ReactNode } from "react";
import "./global.css";

// 메타데이터 변경 가능
export const metadata: Metadata = {
  title: {
    template: "%s | Acme",
    default: "Acme", // a default is required when creating a template
  },
};

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Readonly<Props>) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
