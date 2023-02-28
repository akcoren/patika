import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import { useSelector } from "react-redux";


function App() {

  const theme = useSelector((state) => state.notes.theme);



  return (
    <div className={`${theme} theme-dark min-h-screen min-w-full bg-skin-primary`}>
      <div className="mx-auto flex max-w-5xl flex-col items-center font-mono">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
