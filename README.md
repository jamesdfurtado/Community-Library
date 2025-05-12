# Community Library 📚

A C++ terminal program turned web app using Node.js and HTML/CSS.

This program uses left-leaning red-black binary search trees to simulate an organized "virtual library" of books.

Users add books to a library and get reading suggestions based on genre, type, and length.

---

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
   
2. **Run the server**

```bash
node server.js
```

3. **Visit the app**

Open http://localhost:3000 in your browser.

---

Project Structure
backend/ – All the original C++ source files

build/CommunityLibrary.exe – Compiled binary used by the Node.js server

public/ – HTML, CSS, and frontend JS

server.js – Express server that connects the web UI to the C++ program

library.txt – Stores all inserted books

✏️ How it works
Book insertions and suggestions are handled through the web UI

Node.js runs the C++ .exe, simulating terminal input/output

Responses are shown in a styled browser console

📦 Requirements
Node.js installed
NPM
Windows (for running the .exe)
