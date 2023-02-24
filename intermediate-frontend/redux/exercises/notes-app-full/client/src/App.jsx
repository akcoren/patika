import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="theme-dark min-h-screen min-w-full bg-skin-primary">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <Header />
        <Heading />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
