import React, { useState } from "react";

function DropDown() {
  //   const [value, setValue] = useState("");

  //   function handleChange(event) {
  //     setValue(event.target.value);
  //   }

  //   return (
  //     <div className="p-4">
  //       <select
  //         value={value}
  //         onChange={handleChange}
  //         className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
  //       >
  //         <option>text1</option>
  //         <option>text2</option>
  //         <option>text3</option>
  //         <option>text4</option>
  //       </select>
  //       <p className="mt-2 text-blue-500">Ваш вибір: {value}</p>
  //     </div>
  //   );
  const texts = ["Манго", "Ківі", "Фейхоа", "Яблука українські"];
  const [value, setValue] = useState("");

  const options = texts.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
    <div>
      <select
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
      >
        {options}
      </select>
      <p className="mt-2 text-blue-500">ваш выбор: {value}</p>
    </div>
  );
}

export default DropDown;
