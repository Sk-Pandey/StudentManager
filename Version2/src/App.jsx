import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  // state to handle student name
  const [name, setName] = useState("");

  // state to handle students list
  const [list, setList] = useState([]);

  // State to handle search box
  const [search, setSearch] = useState("");

  // State to handle edit id
  const [editId, setEditId] = useState(null);

  // Function for adding student into list
  const addStudent = () => {
    if (editId) {
      setList(
        list.map((student) =>
          student.id === editId ? { ...student, name } : student,
        ),
      );
      setEditId(null);
      setName("");
    } else if (name.trim() !== "") {
      setList((prev) => [
        {
          name,
          id: uuidv4(),
        },
        ...prev,
      ]);
      setName("");
    }
  };

  // Function for deleting student from list
  const dltStudent = (dlt_id) => {
    setList(list.filter((item) => item.id !== dlt_id));
  };

  // Edit Function
  const edit = (item) => {
    setName(item.name);
    setEditId(item.id);
  };

  return (
    <div>
      <Navbar />
      <StudentForm name={name} setName={setName} addStudent={addStudent} />
      <Search search={search} setSearch={setSearch} />
      <StudentList
        list={list}
        dltStudent={dltStudent}
        search={search}
        edit={edit}
      />
    </div>
  );
};

export default App;
