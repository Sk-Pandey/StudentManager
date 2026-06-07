import React from "react";
const StudentForm = ({ name, setName, addStudent,editId }) => {
  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="bg-base-200 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Add Student</h2>

        <fieldset className="fieldset">
          <legend className="fieldset-legend text-base">Student Name</legend>
 
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addStudent();
              }
            }}
          />
        </fieldset>

        <button
          onClick={addStudent}
          className="btn btn-soft btn-success w-full mt-4"
        >
          {editId ? "Update" : "Add Student"}
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
