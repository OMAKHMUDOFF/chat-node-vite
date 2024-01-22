import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Если не работает __dirname
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();

//   console.log("Folder was created");
// });

// fs.writeFile(
//   path.join(__dirname, "notes", "chat.txt"),
//   "Chat started",
//   (err) => {
//     if (err) throw new Error();

//     console.log("File chat.txt was created");

//     fs.appendFile(
//       path.join(__dirname, "notes", "chat.txt"),
//       ` at ${new Date()}`,
//       (err) => {
//         if (err) throw new Error();

//         console.log("File chat.txt was updated");

//         fs.readFile(
//           path.join(__dirname, "notes", "chat.txt"),
//           "utf-8",
//           (err, data) => {
//             if (err) throw new Error();

//             console.log(data);
//           }
//         );
//       }
//     );
//   }
// );

fs.readFile(
  path.join(__dirname, "../views", "index.html"),
  "utf-8",
  (err, data) => {
    if (err) throw new Error();

    console.log(data);
  }
);
