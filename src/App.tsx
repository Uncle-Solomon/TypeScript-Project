import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { Selectedpage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<Selectedpage>(
    Selectedpage.Home
  );

  const [isTopOfpage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(Selectedpage.Home);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" app bg-gray-200 ">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopofPage={isTopOfpage}
      />
    </div>
  );
}

export default App;
