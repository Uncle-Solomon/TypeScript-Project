import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { Selectedpage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<Selectedpage>(
    Selectedpage.Home
  );
  return (
    <div className=" app bg-gray-200 ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
