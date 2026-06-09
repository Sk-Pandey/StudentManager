import React from "react";

const Navbar = ({ count }) => {
  return (
    <header className="nb-root">
      <div className="nb-inner">
        {/* Brand */}
        <div className="nb-brand">
          <div className="nb-icon">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17l10 5 10-5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12l10 5 10-5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="nb-text">
            <h1 className="nb-title">StudentManager</h1>
            <p className="nb-sub">Class roster tracker</p>
          </div>
        </div>

        {/* Live count */}
        <div className="nb-count">
          <span className="nb-count-dot" />
          <span>{count} enrolled</span>
        </div>
      </div>

      <style>{`
        .nb-root {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(6, 14, 13, 0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(16, 185, 129, 0.16);
          box-shadow: 0 1px 30px rgba(16, 185, 129, 0.07);
        }
        .nb-inner {
          max-width: 600px;
          margin: 0 auto;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (min-width: 640px) { .nb-inner { padding: 14px 24px; } }
        @media (min-width: 1024px) { .nb-inner { padding: 14px 32px; max-width: 680px; } }

        .nb-brand { display: flex; align-items: center; gap: 12px; min-width: 0; }

        .nb-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #059669, #065f46);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 18px rgba(5, 150, 105, 0.45);
          flex-shrink: 0;
        }
        @media (min-width: 640px) { .nb-icon { width: 44px; height: 44px; border-radius: 14px; } }

        .nb-title {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(90deg, #34d399, #6ee7b7, #a7f3d0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (min-width: 640px) { .nb-title { font-size: 1.25rem; } }

        .nb-sub {
          font-size: 0.68rem;
          color: rgba(148, 163, 184, 0.55);
          margin-top: 1px;
        }

        .nb-count {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #34d399;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.22);
          border-radius: 20px;
          padding: 5px 12px;
          flex-shrink: 0;
        }

        .nb-count-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
          animation: nbPulse 2.2s ease-in-out infinite;
        }
        @keyframes nbPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
