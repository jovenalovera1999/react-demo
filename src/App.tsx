import { useState } from "react";
import FloatingLabelInput from "./components/input/FloatingLabelInput";
import Button from "./components/button/Button";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffixName, setSuffixName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  const handleClearAll = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setSuffixName("");
    setBirthDate("");
    setPassword("");
  };

  return (
    <>
      <div className="mt-4 mb-4">
        <FloatingLabelInput
          label="First Name"
          type="text"
          name="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoFocus
        />
        <span className="text-black">First Name: {firstName}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Middle Name"
          type="text"
          name="middle_name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <span className="text-black">Middle Name: {middleName}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Last Name"
          type="text"
          name="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <span className="text-black">Last Name: {lastName}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Suffix Name"
          type="text"
          name="suffix_name"
          value={suffixName}
          onChange={(e) => setSuffixName(e.target.value)}
        />
        <span className="text-black">Suffix Name: {suffixName}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Birth Date"
          type="date"
          name="birth_date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <span className="text-black">Birth Date: {birthDate}</span>
      </div>

      <div className="mb-4">
        <FloatingLabelInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="text-black">Password: {password}</span>
      </div>

      <div className="flex gap-4 m-4">
        <Button
          type="button"
          label="Clear"
          newClassName="bg-white text-black p-2 border border-gray-300 hover:bg-gray-100 cursor-pointer"
          onClick={handleClearAll}
        />
        <Button type="submit" label="Save Person" className="w-full" />
      </div>
    </>
  );
};

export default App;
