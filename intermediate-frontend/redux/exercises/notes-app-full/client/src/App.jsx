import Content from "./components/Content";
import Header from "./components/Header";
import InputText from "./components/InputText";
import SearchBox from "./components/SearchBox";



function App() {
  return (
    <div className="m-auto bg-gray-700 h-full">
      <Header />
      <SearchBox />
      <InputText />
      <Content />
    </div>
  );
}

export default App;
