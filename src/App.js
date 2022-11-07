import logo from "./logo.svg";
import "./App.scss";
import Logo from "./components/Logo";
import Vision from "./components/Vision";
import EvesBirthday from "./components/EvesBirthday";
import CountdownComponent from "./components/CountdownComponent";
import WhatYouGet from "./components/WhatYouGet";
import WhatIsReefs from "./components/WhatIsReefs";
import { useState } from "react";
import ModalContextProvider from "./contexts/modalContext";
import DonateModal from "./components/DonateModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <ModalContextProvider>
      <DonateModal />
      <div className="App ">
        <div className="mt-5">
          <Logo />
        </div>
        <Vision />
        <CountdownComponent />
        <EvesBirthday />
        <WhatYouGet />
        <WhatIsReefs />
        <div className="mt-3 mb-5" style={{ color: "#486D75" }}>
          <small>copyright REEFS MEDIA 2022</small>
          <br />
          <br />
        </div>
      </div>
    </ModalContextProvider>
  );
}

export default App;
