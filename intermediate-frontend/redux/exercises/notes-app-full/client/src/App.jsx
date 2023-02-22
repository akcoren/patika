import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Heading from "./components/Heading";


function App() {
  return (
    <div className="mx-auto bg-gray-700 flex flex-col items-center min-h-screen max-w-6xl dark:bg-slate-50">
      <Header />
      <Heading />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
