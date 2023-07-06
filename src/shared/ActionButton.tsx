import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { Selectedpage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: Selectedpage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(Selectedpage.ContactUs)}
      href={`#${Selectedpage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
