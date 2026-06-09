import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="sr-wrap">
      <div className="sr-box">
        <span className="sr-icon">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="m21 21-4.3-4.3"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <input
          type="search"
          className="sr-input"
          placeholder="Search by name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="sr-clear"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      <style>{`
        .sr-wrap { margin-bottom: 18px; }

        .sr-box { position: relative; display: flex; align-items: center; }

        .sr-icon {
          position: absolute; left: 14px;
          color: rgba(148,163,184,0.45);
          display: flex; align-items: center;
          pointer-events: none; z-index: 1;
        }

        .sr-input {
          width: 100%;
          padding: 12px 44px 12px 42px;
          background: rgba(6, 14, 13, 0.65);
          border: 1px solid rgba(16, 185, 129, 0.18);
          border-radius: 14px;
          color: #e2e8f0;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
        }
        .sr-input::placeholder { color: rgba(100,116,139,0.5); }
        .sr-input::-webkit-search-cancel-button { display: none; }
        .sr-input:focus {
          border-color: rgba(16, 185, 129, 0.5);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1), 0 4px 20px rgba(5, 150, 105, 0.1);
          background: rgba(10, 20, 16, 0.78);
        }
        @media (min-width: 640px) {
          .sr-input { padding: 13px 44px 13px 44px; font-size: 0.95rem; border-radius: 16px; }
        }

        .sr-clear {
          position: absolute; right: 13px;
          display: flex; align-items: center; justify-content: center;
          width: 26px; height: 26px;
          border-radius: 7px; border: none;
          background: rgba(16, 185, 129, 0.1);
          color: rgba(148,163,184,0.5);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .sr-clear:hover {
          background: rgba(239, 68, 68, 0.18);
          color: #f87171;
        }
      `}</style>
    </div>
  );
};

export default Search;
