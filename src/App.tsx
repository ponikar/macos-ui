import { AppBar } from "./components/appbar";
import { Background } from "./components/background";
import { Desktop } from "./components/desktop";
import { Folder } from "./components/folder";
import { Header } from "./components/header";
import { Window } from "./components/Window";
import "./index.css";

const App = () => {
  return (
    <Background>
      <Header />
      <Desktop>
        <Folder />
        <Window />
      </Desktop>
      <AppBar />
    </Background>
  );
};

export default App;
