import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DashBoardPage({ children }: Props) {
  return (
    <div>
      <div>DashBoardpage</div>
      <div>{children}</div>
    </div>
  );
}
