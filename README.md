# StudentManager

A lightweight React application for managing a class roster — add, edit, search, and remove students with a clean, responsive interface.

**Live Demo → [sk-pandey.github.io/StudentManager](https://Sk-Pandey.github.io/StudentManager)**

---

## Features

- **Add students** — type a name and press Enter or click Enrol
- **Edit in place** — update any name without losing your list
- **Live search** — filters the roster as you type
- **Delete** — remove individual entries instantly
- **Responsive** — works on mobile, tablet, and desktop
- **Zero backend** — all state lives in React, no database needed

---

## Tech Stack

| Tool                       | Purpose                     |
| -------------------------- | --------------------------- |
| React 19                   | UI and state management     |
| Vite 8                     | Dev server and build tool   |
| Tailwind CSS 4 + DaisyUI 5 | Utility styling             |
| uuid                       | Unique IDs for each student |
| gh-pages                   | GitHub Pages deployment     |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repo
git clone https://github.com/Sk-Pandey/StudentManager.git
cd StudentManager

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173/StudentManager/](http://localhost:5173/StudentManager/) in your browser.

---

## Project Structure

```
StudentManager/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Top navigation bar with live count
│   │   ├── StudentForm.jsx   # Add / edit form
│   │   ├── Search.jsx        # Live search input
│   │   └── StudentList.jsx   # Roster cards
│   ├── App.jsx               # Root component — all state lives here
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## State & Logic

All application state is managed in `App.jsx` using React hooks and passed down as props — no external state library needed.

| State    | Type            | Purpose                            |
| -------- | --------------- | ---------------------------------- |
| `name`   | `string`        | Controlled input value             |
| `list`   | `array`         | Source of truth for the roster     |
| `search` | `string`        | Filters rendered list              |
| `editId` | `string / null` | Tracks which entry is being edited |

### Key functions

**`addStudent`** — validates the input, then either updates an existing entry (when `editId` is set) or prepends a new one with a `uuid`.

**`dltStudent`** — filters the entry out of `list`; also cancels any active edit if the deleted entry was the one being edited.

**`edit`** — loads a student's name into the form and stores their `id` in `editId`.

---

## Deployment

This project is configured for GitHub Pages deployment.

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then pushes the `dist/` folder to the `gh-pages` branch of the repo. The live URL is set in `package.json` under `"homepage"`.

---

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start local dev server               |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm run deploy`  | Build and deploy to GitHub Pages     |

---

## Contributing

Pull requests are welcome. For significant changes, open an issue first to discuss what you'd like to change.

---

## License

[MIT](LICENSE)

---

## Author

**Sk-Pandey** — [github.com/Sk-Pandey](https://github.com/Sk-Pandey)
