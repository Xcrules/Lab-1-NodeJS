const fs = require("fs");

const file = "sample.txt";

fs.writeFile(file, "Hello from Node.js", (err) => {
    if (err) return console.log("Error creating file");
    console.log("File created");

    fs.readFile(file, "utf8", (err, data) => {
        if (err) return console.log("Error reading file");
        console.log("File content:", data);

        fs.appendFile(file, "\nNew content added.", (err) => {
            if (err) return console.log("Error updating file");
            console.log("File updated");

            fs.unlink(file, (err) => {
                if (err) return console.log("Error deleting file");
                console.log("File deleted");
            });
        });
    });
});
