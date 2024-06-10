import React, { useState } from "react";

function square(number) {
  return number ** 2;
}

function total(totalNumber) {
  return totalNumber.length;
}

function calculateBirthYear(age) {
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}

function InputApp() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [number, setNamber] = useState("");
  const [totalNumber, setTotalNamber] = useState("");
  const [age, setAge] = useState(0);

  function handleChangeTitle(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeText(event) {
    setText(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeNamber(event) {
    setNamber(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeTotalNamber(event) {
    setTotalNamber(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeAge(event) {
    setAge(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        className="px-4 py-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        type="text"
        value={title}
        onChange={handleChangeTitle}
      />
      <p className="mb-4 text-blue-500"> title: {title}</p>
      <input
        className="px-4 py-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        type="text"
        value={text}
        onChange={handleChangeText}
      />
      <p className="text-blue-500"> text: {text}</p>
      <input
        className="px-4 py-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        type="text"
        value={number}
        onChange={handleChangeNamber}
      />
      {/* paragraph outputs the square of a number */}
      <p className="text-blue-500"> square: {square(number)}</p>

      <input
        className="px-4 py-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        type="text"
        value={totalNumber}
        onChange={handleChangeTotalNamber}
      />
      {/* paragraph outputs the number of digits entered */}
      <p className="text-blue-500"> total: {total(totalNumber)}</p>

      <input
        className="px-4 py-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        type="text"
        value={age}
        onChange={handleChangeAge}
      />
      {/* paragraph outputs the number of digits entered */}
      <p className="text-blue-500"> year of birth: {calculateBirthYear(age)}</p>
    </div>
  );
}

export default InputApp;
