import React from "react";

const StudentList = ({ list, dltStudent }) => {
  return (
    <div className="flex justify-center px-4 mt-8">
      <div className="bg-base-200 shadow-lg rounded-2xl w-full max-w-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Student List</h2>

          <div className="space-y-3">
            {list.length === 0 ? (
              <div className="bg-base-100 rounded-xl p-8 text-center shadow-sm">
                <h3 className="text-lg font-semibold">No Students Found</h3>

                <p className="text-sm opacity-70 mt-2">
                  Add your first student using the form above.
                </p>
              </div>
            ) : (
              list.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-base-100 p-4 rounded-xl shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                  </div>

                  <button
                    className="btn btn-error btn-sm btn-outline"
                    onClick={() => dltStudent(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
