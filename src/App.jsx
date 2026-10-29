import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/slices/contactsSlice";
import Form from "./component/Form";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div className="space-y-4 px-3">
      <h2 className="text-2xl font-bold mt-6">Contacts</h2>
      <Form />
      <ul className="flex flex-col items-center gap-2">
        {contacts.map((ctc) => (
          <li key={ctc.id} className="w-full max-w-100 flex flex-col gap-3 items-center">
            <p className="text-xl">
              {ctc.name} <span className="font-bold">+{ctc.phone}</span>
            </p>
            <button onClick={() => dispatch(deleteContact(ctc.id))} className="px-4 py-2 bg-blue-700 rounded-xl text-white transition hover:bg-blue-900 cursor-pointer">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
