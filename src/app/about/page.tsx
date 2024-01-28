import { Metadata } from "next";

export const metadata: Metadata = {
  // title: "About",
  title: {
    absolute: "About",
  },
};

export default function about() {
  return <div>about</div>;
}
