const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const schema = {
//   name: Joi.string().min(3).required(),
// };

// const result = Joi.validate(req.body, schema);
//app.use(express.json);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (_req, res) => res.send("ok"));

app.get("/courses", (req, res) => {
  res.send([{ name: "Marco" }, { name: "Jana" }]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
