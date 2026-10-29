import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/slices/contactsSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState();
  const [phoneValue, setPhoneValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameValue.trim() || !phoneValue.trim()) return;

    dispatch(addContact({ name: nameValue, phone: phoneValue }));

    setNameValue("");
    phoneValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-start">
      <input
        type="text"
        placeholder="Your Name"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
        className="py-1 px-3 rounded-xl bg-amber-200"
      />
      <input
        type="number"
        placeholder="Your Phone Number"
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
        className="py-1 px-3 rounded-xl bg-amber-200"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-700 rounded-xl text-white transition hover:bg-blue-900 cursor-pointer active:bg-blue-950"
      >
        Add Contact
      </button>
    </form>
  );
};

export default Form;
