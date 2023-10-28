/* eslint-disable react/prop-types */

import { useState } from "react";
import { AlertCircle, Check } from "react-feather";

const VariableInput = ({ placeholder, variables }) => {
  const [value, setValue] = useState("");

  return (
    <div className="items-center rounded-3xl bg-gray-200 px-4 py-2 outline-none border flex flex-row justify-between">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full bg-transparent outline-none"
        onChange={(e) => setValue(e.target.value)}
      />
      {!variables?.includes(value.toLowerCase()) ? (
        <AlertCircle className="text-primary" />
      ) : (
        <Check className="text-green-700" />
      )}
    </div>
  );
};

const DateInput = ({ placeholder }) => {
  return (
    <div className="items-center rounded-3xl bg-gray-200 px-4 py-2 outline-none border flex flex-row justify-between">
      <input
        type="date"
        placeholder={placeholder}
        className="w-full h-full bg-transparent outline-none"
      />
    </div>
  );
};

const NumberInput = ({ placeholder }) => {
  return (
    <div className="items-center rounded-3xl bg-gray-200 px-4 py-2 outline-none border flex flex-row justify-between">
      <input
        type="number"
        placeholder={placeholder}
        className="w-full h-full bg-transparent outline-none"
      />
    </div>
  );
};

const TextInput = ({ placeholder }) => {
  return (
    <div className="items-center rounded-3xl bg-gray-200 px-4 py-2 outline-none border flex flex-row justify-between">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full bg-transparent outline-none"
      />
    </div>
  );
};

export default {
  VariableInput,
  DateInput,
  NumberInput,
  TextInput,
};
