import { Metadata } from "next";
import { ReactNode } from "react";

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

// const RootLayout = (props: Props) => {
//   return (
//       <html lang="ko">
//           <body>{props.children}</body>
//       </html>
//   );
// };

// export default RootLayout;

// export default function RootLayout({ children }: Readonly<Props>) {

export default function RootLayout(props: Readonly<Props>) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
