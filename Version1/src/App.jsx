import React, { use, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";

const App = () => {
  // state to handle student name
  const [name, setName] = useState("");

  // state to handle students list
  const [list, setList] = useState([]);

  // Function for adding student into list
  const addStudent = () => {
    if (name.trim() !== "") {
      setList([
        {
          name: name,
          id: uuidv4(),
        },
        ...list,
      ]);
      setName("");
    }
  };

  // Function for deleting student from list
  const dltStudent = (dlt_id) => {
    setList(list.filter((item) => item.id !== dlt_id));
  };

  return (
    <div>
      <Navbar />
      <StudentForm name={name} setName={setName} addStudent={addStudent} />
      <StudentList list={list} dltStudent={dltStudent} />
    </div>
  );
};

export default App;
