import React from "react";

// Distinct teal-to-emerald gradient variants per index
const rowGradients = [
  "linear-gradient(135deg, #059669, #065f46)",
  "linear-gradient(135deg, #0d9488, #0f766e)",
  "linear-gradient(135deg, #0284c7, #0369a1)",
  "linear-gradient(135deg, #16a34a, #15803d)",
  "linear-gradient(135deg, #6366f1, #4338ca)",
];

function getGradient(index) {
  return rowGradients[index % rowGradients.length];
}

const StudentList = ({ list, dltStudent, search, edit }) => {
  const filtered = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="sl-root">
      {/* Header */}
      <div className="sl-header">
        <h2 className="sl-heading">Class Roster</h2>
        <span className="sl-badge">
          {list.length} student{list.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* List */}
      <div className="sl-list">
        {filtered.length === 0 ? (
          <div className="sl-empty">
            <div className="sl-empty-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                  stroke="rgba(16,185,129,0.45)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="rgba(16,185,129,0.45)"
                  strokeWidth="1.8"
                />
                <path
                  d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  stroke="rgba(16,185,129,0.25)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="sl-empty-title">
              {list.length === 0 ? "No students enrolled" : "No results found"}
            </p>
            <p className="sl-empty-sub">
              {list.length === 0
                ? "Use the form above to add your first student."
                : "Try searching with a different name."}
            </p>
          </div>
        ) : (
          filtered.map((item, index) => (
            <div key={item.id} className="sl-card">
              <div className="sl-card-shine" />
              <div className="sl-card-inner">
                {/* Avatar */}
                <div
                  className="sl-avatar"
                  style={{ background: getGradient(index) }}
                >
                  {item.name.charAt(0).toUpperCase()}
                </div>

                {/* Name + roll */}
                <div className="sl-info">
                  <h3 className="sl-name">{item.name}</h3>
                  <span className="sl-roll">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Actions */}
                <div className="sl-actions">
                  <button
                    className="sl-btn sl-btn--edit"
                    aria-label="Edit student"
                    onClick={() => edit(item)}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Edit</span>
                  </button>

                  <button
                    className="sl-btn sl-btn--delete"
                    aria-label="Remove student"
                    onClick={() => dltStudent(item.id)}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <polyline
                        points="3,6 5,6 21,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .sl-root { }

        .sl-header {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap; gap: 8px;
        }
        .sl-heading {
          font-size: 1rem; font-weight: 800;
          color: #f1f5f9; letter-spacing: -0.01em;
        }
        @media (min-width: 640px) { .sl-heading { font-size: 1.1rem; } }

        .sl-badge {
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.04em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.22);
          border-radius: 20px;
          padding: 4px 12px;
        }

        .sl-list { display: flex; flex-direction: column; gap: 9px; }

        /* Empty state */
        .sl-empty {
          border: 1px dashed rgba(16, 185, 129, 0.2);
          border-radius: 16px;
          padding: 40px 20px;
          text-align: center;
          background: rgba(6, 14, 13, 0.35);
        }
        .sl-empty-icon {
          width: 58px; height: 58px; border-radius: 16px;
          background: rgba(16, 185, 129, 0.07);
          border: 1px solid rgba(16, 185, 129, 0.14);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
        }
        .sl-empty-title {
          font-size: 0.95rem; font-weight: 700;
          color: #e2e8f0; margin-bottom: 6px;
        }
        .sl-empty-sub {
          font-size: 0.8rem; color: rgba(148,163,184,0.5);
          max-width: 260px; margin: 0 auto;
        }

        /* Card */
        .sl-card {
          position: relative;
          background: rgba(10, 22, 18, 0.65);
          border: 1px solid rgba(16, 185, 129, 0.13);
          border-radius: 14px;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
        }
        .sl-card:hover {
          border-color: rgba(16, 185, 129, 0.38);
          box-shadow: 0 6px 28px rgba(5, 150, 105, 0.14);
          transform: translateY(-1px);
        }
        .sl-card-shine {
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(52,211,153,0.4), transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .sl-card:hover .sl-card-shine { opacity: 1; }

        .sl-card-inner {
          display: flex; align-items: center;
          gap: 12px; padding: 12px 14px;
        }
        @media (min-width: 640px) { .sl-card-inner { padding: 14px 16px; gap: 14px; } }

        /* Avatar */
        .sl-avatar {
          width: 42px; height: 42px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 800; color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          text-transform: uppercase;
        }
        @media (min-width: 640px) { .sl-avatar { width: 46px; height: 46px; font-size: 1.1rem; border-radius: 14px; } }

        /* Info */
        .sl-info { flex: 1; min-width: 0; }
        .sl-name {
          font-size: 0.88rem; font-weight: 700; color: #f1f5f9;
          text-transform: capitalize;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        @media (min-width: 640px) { .sl-name { font-size: 0.95rem; } }
        .sl-roll {
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(52, 211, 153, 0.55);
          margin-top: 3px;
          display: block;
        }

        /* Actions */
        .sl-actions { display: flex; gap: 7px; flex-shrink: 0; }

        .sl-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 7px 11px;
          border-radius: 9px; border: 1px solid transparent;
          font-size: 0.75rem; font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .sl-btn span { display: none; }
        @media (min-width: 400px) { .sl-btn span { display: inline; } }

        .sl-btn--edit {
          color: rgba(99, 102, 241, 0.8);
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.15);
        }
        .sl-btn--edit:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.4);
          color: #818cf8;
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(99,102,241,0.22);
        }

        .sl-btn--delete {
          color: rgba(248,113,113,0.7);
          background: rgba(239, 68, 68, 0.07);
          border-color: rgba(239, 68, 68, 0.12);
        }
        .sl-btn--delete:hover {
          background: rgba(239, 68, 68, 0.18);
          border-color: rgba(239, 68, 68, 0.35);
          color: #f87171;
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(239,68,68,0.18);
        }
        .sl-btn:active { transform: scale(0.96); }
      `}</style>
    </div>
  );
};

export default StudentList;
