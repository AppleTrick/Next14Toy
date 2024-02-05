import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SettingPage({ children }: Props) {
  //   console.log(children);
  return (
    <div>
      <div>SettingPage</div>
      {/* <div>{children}</div> */}
    </div>
  );
}
