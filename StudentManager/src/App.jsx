import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const addStudent = () => {
    if (editId && name.trim() !== "") {
      setList((prev) =>
        prev.map((student) =>
          student.id === editId ? { ...student, name } : student,
        ),
      );
      setEditId(null);
      setName("");
    } else if (name.trim() !== "") {
      setList((prev) => [{ name, id: uuidv4() }, ...prev]);
      setName("");
    } else {
      alert("Please enter a valid student name.");
    }
  };

  const dltStudent = (dlt_id) => {
    if (dlt_id === editId) {
      setEditId(null);
      setName("");
    }
    setList((prev) => prev.filter((item) => item.id !== dlt_id));
  };

  const edit = (item) => {
    setName(item.name);
    setEditId(item.id);
  };

  return (
    <div className="sm-root">
      {/* Ambient background blobs */}
      <div className="sm-blob sm-blob--a" />
      <div className="sm-blob sm-blob--b" />
      <div className="sm-blob sm-blob--c" />

      <Navbar count={list.length} />

      <main className="sm-main">
        <div className="sm-container">
          <StudentForm
            name={name}
            editId={editId}
            setName={setName}
            addStudent={addStudent}
          />
          <div className="sm-panel">
            <Search search={search} setSearch={setSearch} />
            <StudentList
              list={list}
              dltStudent={dltStudent}
              search={search}
              edit={edit}
            />
          </div>
        </div>
      </main>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sm-root {
          position: relative;
          min-height: 100vh;
          background:
            radial-gradient(ellipse at 20% 10%, rgba(5, 150, 105, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 75%, rgba(6, 95, 70, 0.22) 0%, transparent 50%),
            #060e0d;
          color: #e2e8f0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          overflow-x: hidden;
        }

        .sm-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .sm-blob--a {
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.22), transparent 70%);
          top: -180px; left: -80px;
          animation: blobDrift 20s ease-in-out infinite;
        }
        .sm-blob--b {
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(5, 150, 105, 0.18), transparent 70%);
          bottom: 60px; right: -100px;
          animation: blobDrift 26s ease-in-out infinite reverse;
        }
        .sm-blob--c {
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.1), transparent 70%);
          top: 55%; left: 48%;
          animation: blobDrift 18s ease-in-out infinite 5s;
        }
        @keyframes blobDrift {
          0%, 100% { transform: translate(0, 0); }
          33%  { transform: translate(25px, -18px); }
          66%  { transform: translate(-18px, 22px); }
        }

        .sm-main {
          position: relative;
          z-index: 1;
          padding: 24px 16px 56px;
        }
        @media (min-width: 640px)  { .sm-main { padding: 32px 24px 72px; } }
        @media (min-width: 1024px) { .sm-main { padding: 40px 32px 88px; } }

        .sm-container {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sm-panel {
          background: rgba(10, 22, 18, 0.6);
          border: 1px solid rgba(16, 185, 129, 0.15);
          border-radius: 20px;
          padding: 20px 16px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);
        }
        @media (min-width: 640px) {
          .sm-panel { padding: 24px 22px; border-radius: 24px; }
        }
      `}</style>
    </div>
  );
};

export default App;
