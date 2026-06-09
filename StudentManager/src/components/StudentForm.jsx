import React from "react";

const StudentForm = ({ name, setName, addStudent, editId }) => {
  return (
    <div className="sf-wrap">
      <div className="sf-card">
        {/* Header */}
        <div className="sf-header">
          <div className="sf-header-icon">
            {editId ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div>
            <h2 className="sf-title">
              {editId ? "Edit Student" : "Add Student"}
            </h2>
            <p className="sf-sub">
              {editId ? "Update the name below" : "Enter a name to enrol"}
            </p>
          </div>
        </div>

        <div className="sf-divider" />

        {/* Field */}
        <div className="sf-body">
          <label className="sf-label">Student Name</label>
          <div className="sf-field-wrap">
            <span className="sf-field-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <input
              type="text"
              className="sf-input"
              placeholder="e.g. Arjun Singh"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addStudent();
              }}
              autoComplete="off"
            />
          </div>

          <button
            className={`sf-btn ${editId ? "sf-btn--update" : "sf-btn--add"}`}
            onClick={addStudent}
          >
            {editId ? (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="17,21 17,13 7,13 7,21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Save Changes
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                Enrol Student
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .sf-wrap { display: flex; justify-content: center; }

        .sf-card {
          width: 100%;
          background: rgba(10, 22, 18, 0.72);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 20px;
          padding: 22px 18px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.02) inset;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .sf-card:hover {
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 12px 50px rgba(5, 150, 105, 0.18);
        }
        @media (min-width: 640px) { .sf-card { padding: 28px 26px; border-radius: 24px; } }

        .sf-header {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 18px;
        }
        .sf-header-icon {
          width: 42px; height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #059669, #065f46);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(5, 150, 105, 0.4);
        }
        .sf-title {
          font-size: 1.05rem; font-weight: 800;
          color: #f1f5f9; letter-spacing: -0.02em;
        }
        @media (min-width: 640px) { .sf-title { font-size: 1.2rem; } }
        .sf-sub { font-size: 0.7rem; color: rgba(148,163,184,0.55); margin-top: 2px; }

        .sf-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(16,185,129,0.22), transparent);
          margin-bottom: 18px;
        }

        .sf-body { display: flex; flex-direction: column; gap: 14px; }

        .sf-label {
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: rgba(52, 211, 153, 0.75);
        }

        .sf-field-wrap { position: relative; display: flex; align-items: center; }

        .sf-field-icon {
          position: absolute; left: 14px;
          color: rgba(148,163,184,0.45);
          display: flex; align-items: center;
          pointer-events: none; z-index: 1;
        }

        .sf-input {
          width: 100%;
          padding: 12px 14px 12px 40px;
          background: rgba(6, 14, 13, 0.7);
          border: 1px solid rgba(16, 185, 129, 0.18);
          border-radius: 12px;
          color: #e2e8f0;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
        }
        .sf-input::placeholder { color: rgba(100,116,139,0.5); }
        .sf-input:focus {
          border-color: rgba(16, 185, 129, 0.55);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);
          background: rgba(10, 20, 16, 0.8);
        }
        @media (min-width: 640px) { .sf-input { padding: 13px 14px 13px 42px; font-size: 0.95rem; } }

        .sf-btn {
          display: flex; align-items: center; justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px;
          border: none; border-radius: 12px;
          font-size: 0.9rem; font-weight: 700;
          cursor: pointer; color: white;
          transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
        }
        .sf-btn--add {
          background: linear-gradient(135deg, #059669, #047857);
          box-shadow: 0 4px 20px rgba(5, 150, 105, 0.35);
        }
        .sf-btn--update {
          background: linear-gradient(135deg, #0284c7, #0369a1);
          box-shadow: 0 4px 20px rgba(2, 132, 199, 0.3);
        }
        .sf-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
          box-shadow: 0 8px 28px rgba(5, 150, 105, 0.45);
        }
        .sf-btn:active { transform: translateY(0); filter: brightness(0.95); }
        @media (min-width: 640px) { .sf-btn { padding: 14px; font-size: 0.95rem; border-radius: 14px; } }
      `}</style>
    </div>
  );
};

export default StudentForm;
