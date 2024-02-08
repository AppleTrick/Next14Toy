"use client";

import { LinkButton } from "./LinkButton";

type ButtonTypes = "normal" | "replace" | "refresh";

type NavigationProps = {
  links: Array<{ href: string; key: string }>;
  buttonTypes: ButtonTypes;
};
export const UseNavNavigation = ({ links, buttonTypes }: NavigationProps) => {
  const getButtonContent = (href: string, key: string) => {
    switch (buttonTypes) {
      case "normal":
        return <LinkButton to={href}>{key}</LinkButton>;
      case "refresh":
        return (
          <LinkButton to={href} refresh={true}>
            {key}
          </LinkButton>
        );
      case "replace":
        return (
          <LinkButton to={href} replace={true}>
            {key}
          </LinkButton>
        );
      default:
        throw new Error(`잘못된 버튼 유형: ${buttonTypes}`);
    }
  };

  return (
    <ul className="flex">
      {links.map(({ href, key }) => (
        <li key={key} className="flex">
          {getButtonContent(href, key)}
        </li>
      ))}
    </ul>
  );
};
