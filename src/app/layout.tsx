import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme",
    default: "Acme", // a default is required when creating a template
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
