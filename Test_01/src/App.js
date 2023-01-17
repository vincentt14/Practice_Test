import "./App.css";
import Select from "react-select";
import { useEffect, useState } from "react";

function App() {
  const [datas, setDatas] = useState([]);
  const [selected, setSelected] = useState("");
  const [isShow, setIsShow] = useState(false);

  const getBerries = async () => {
    const berries = await fetch("https://pokeapi.co/api/v2/berry/");
    const value = await berries.json();
    const results = value.results.map((data) => {
      return {
        label: data.name,
        value: data.name,
      };
    });
    setDatas(results.sort((a, b) => a.label.localeCompare(b.label)));
  };

  useEffect(() => {
    getBerries();
  }, []);

  const handleSubmit = () => {
    setIsShow(!isShow);
  };

  const handleChange = (value) => {
    setSelected(value.label);
  };

  return (
    <div className="App">
      <p>{isShow ? `Berrie yang di pilih : ${selected}` : ""}</p>
      <button onClick={handleSubmit} disabled={!selected}>
        {isShow ? "Hide Selected Berrie" : "Show Selected Berrie"}
      </button>
      <br />
      <br />
      <Select options={datas} onChange={(e) => handleChange(e)}></Select>
    </div>
  );
}

export default App;
