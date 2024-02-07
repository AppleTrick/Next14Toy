import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DashBoardPage({ children }: Props) {
  return (
    <div>
      <h2>DashBoard Page</h2>
      <div>{children}</div>
    </div>
  );
}
