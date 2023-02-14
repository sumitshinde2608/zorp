import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
const data = require("./data.json");

const App = () => {
  const [options, setOptions] = useState(data.struct);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-green-200">
        <Dropdown label="Component" options={options} action={callDropdown()} />
      </div>
      <div className="w-1/2 bg-blue-200">{data.struct[0].id}</div>
    </div>
  );

  //write a function to recall dropdown component if struct property is present in the object
  function callDropdown() {
    if (options.struct && options.struct.length > 0) {
      console.log("We are here");
      setOptions(options.struct);
      return (
        <Dropdown
          label="Component"
          options={options.struct}
          action={callDropdown()}
        />

        //
      );
    }
  }
};

export default App;
