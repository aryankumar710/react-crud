import { useState } from "react";

let id = 1;

export const Form = ({data}) => {

  

  const [person, setPerson] =  useState({
    Id: id,
    Name: "",
    Email: "",
    Tel: ""
  })

  const [userlist, setList] = useState([])


  function handleNameChange(e){
    setPerson({
      ...person,
      Name: e.target.value
    });
  }

  function handleEmailChange(e){
    setPerson({
      ...person,
      Email: e.target.value
    });
  }

  function handleTelChange(e){
    setPerson({
      ...person,
      Tel: e.target.value
    });
  }


  function handleSubmit (e){
    e.preventDefault();
    data(userlist);
    setPerson({
      Id:++id,
      Name: "",
      Email: "",
      Tel: ""

    })
  }

  function handleList() {
    setList([...userlist, person]);
  }



  return (
   <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-5
             p-6 rounded-2xl
            bg-pink-50 border border-pink-200
             shadow-sm"
>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <input
      type="text"
      value={person.Name}
      onChange={handleNameChange}
      placeholder="Full name"
      className="w-full px-4 py-2.5
                 rounded-lg border border-gray-300
                 bg-white text-gray-800
                 focus:outline-none focus:ring-2
                 focus:ring-sky-400 focus:border-sky-400
                 transition"
    />

    <input
      type="email"
      value={person.Email}
      onChange={handleEmailChange}
      placeholder="Email address"
      className="w-full px-4 py-2.5
                 rounded-lg border border-gray-300
                 bg-white text-gray-800
                 focus:outline-none focus:ring-2
                 focus:ring-sky-400 focus:border-sky-400
                 transition"
    />

    <input
      type="tel"
      pattern="^\d{10,10}$"
      minlength="10" maxlength="10"
      value={person.Tel}
      onChange={handleTelChange}
      placeholder="Phone number"
      className="w-full px-4 py-2.5
                 rounded-lg border border-gray-300
                 bg-white text-gray-800
                 focus:outline-none focus:ring-2
                 focus:ring-sky-400 focus:border-sky-400
                 transition"
    />
  </div>

  <div className="flex justify-end">
    <button
      type="submit"
      onClick={handleList}
      className="px-6 py-2.5 rounded-lg
                 bg-indigo-600 text-white
                 font-medium text-sm
                 hover:bg-indigo-700
                 focus:outline-none focus:ring-2
                 focus:ring-indigo-500 focus:ring-offset-2
                 transition"
    >
      Submit
    </button>
  </div>
</form>

  );
};
