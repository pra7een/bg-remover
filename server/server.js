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
  `python remove_bg.py "${input}" "${output}"`,
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});