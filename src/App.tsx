import { useRef } from "react";
import { AppBar } from "./components/appbar";
import { Background } from "./components/background";
import { Desktop } from "./components/desktop";
import { Folder } from "./components/folder";
import { Header } from "./components/header";
import { Window } from "./components/Window";
import "./index.css";

const App = () => {
  const backgroundRef = useRef<HTMLDivElement>();
  return (
    <Background ref={backgroundRef.current}>
      <Header />
      <Desktop>
        <Folder />
        <Window ref={backgroundRef.current} />
      </Desktop>
      <AppBar />
    </Background>
  );
};

export default App;
