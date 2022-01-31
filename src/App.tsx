import { AppBar } from "./components/appbar";
import { Background } from "./components/background";
import { Folder } from "./components/folder";
import { Header } from "./components/header";
import "./index.css";

const App = () => {
  return (
    <Background>
      <Header />
      <Folder />
      <AppBar />
    </Background>
  );
};

export default App;
