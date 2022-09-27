import express from "express";
import cors from "cors";

const app = express();
const port = 8324;
app.use(cors());
app.use(express.json());

const employees = [
  {
    firstname: "John",
    lastname: "Smith",
    department: "HR",
    age: 25,
  },
  { firstname: "Adam", lastname: "Smith", department: "IT", age: 27 },
];

app.get("/", (req, res) => {
  res.json(employees);
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
