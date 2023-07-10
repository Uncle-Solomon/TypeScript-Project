import React from "react";
type Props = {
  children: React.ReactNode;
};

function HText({ children }: Props) {
  return (
    <h1 className="basis-3/5 font-montserrat teext-3xl font-bold">
      {children}
    </h1>
  );
}

export default HText;
