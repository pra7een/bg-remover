const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { exec } = require("child_process");
const path = require("path");

const app = express();

app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/remove-bg", upload.single("image"), (req, res) => {
  console.log("Request received");
  console.log(req.file);
    const input = req.file.path;
    const output = input + ".png";

    exec(
    `"C:\\Users\\casua\\AppData\\Local\\Programs\\Python\\Launcher\\py.exe" remove_bg.py "${input}" "${output}"`,
    { cwd: __dirname },
    (err, stdout, stderr) => {

        console.log("STDOUT:", stdout);
        console.log("STDERR:", stderr);

        if (err) {
            console.log(err);
            return res.status(500).send("Failed");
        }

        res.sendFile(path.resolve(output));
    }
);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});