const express = require("express");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const exePath = path.join(__dirname, "build", "CommunityLibrary.exe");
const libraryFile = path.join(__dirname, "library.txt");

function runCppProgram(args, inputs) {
  return new Promise((resolve, reject) => {
    const proc = spawn(exePath, [libraryFile]);

    let output = "";
    proc.stdout.on("data", (data) => (output += data));
    proc.stderr.on("data", (data) => (output += data));
    proc.on("error", reject);
    proc.on("close", () => resolve(output));

    // Feed inputs (as if typing in terminal)
    proc.stdin.write(inputs.join("\n") + "\n");
    proc.stdin.end();
  });
}

app.post("/insert", async (req, res) => {
  const { title, author, NF_F, genre, type, length } = req.body;

  // map input to terminal prompts
  const inputs = [
    "0",        // Insert mode
    title,
    author,
    NF_F,
    genre,
    type,
    length.toString(),
    "2"         // Exit program
  ];

  try {
    const result = await runCppProgram([], inputs);
    res.send(result);
  } catch (err) {
    res.status(500).send("Error running C++ app");
  }
});

app.post("/suggest", async (req, res) => {
  const { NF_F, genre, type, length } = req.body;

  const inputs = [
    "1",        // Suggest mode
    NF_F,
    genre,
    type,
    length.toString(),
    "2"         // Exit program
  ];

  try {
    const result = await runCppProgram([], inputs);
    res.send(result);
  } catch (err) {
    res.status(500).send("Error running C++ app");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
