import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SettingPage({ children }: Props) {
  //   console.log(children);
  return (
    <div>
      <h2>Setting Page</h2>
      {/* <div>{children}</div> */}
    </div>
  );
}
