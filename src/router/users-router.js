const express = require("express");
const { users } = require("../utils/data");
const { matches, getUserById } = require("../utils/fns");

const usersRouter = express.Router();

usersRouter.get("/users", (req, res) => {
  res.status(200).json({
    status: "success",
    data: users,
  });
});

usersRouter.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({
    status: "success",
    data: newUser,
  });
});

usersRouter.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const index = users.findIndex((user) => user.id === Number(id));

  // Handle the case where the user is not found
  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: "User not found",
    });
    return;
  }

  users[index] = { ...users[index], ...data };
  const updatedUser = users[index];
  res.status(200).json({
    status: "success",
    data: updatedUser,
  });
});

usersRouter.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id === Number(id));

  // Handle the case where the user is not found
  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: "User not found",
    });
    return;
  }

  users.splice(index, 1);
  res.status(204).json();
});

usersRouter.get("/users/:id/recommendations", (req, res) => {
  const id = req.params.id;
  const user = getUserById(Number(id));
  if (!user) {
    res.status(404).json({
      status: "error",
      message: "User not found",
    });
    return;
  }

  const recommendedProducts = matches(user);

  res.status(200).json({
    status: "success",
    data: recommendedProducts,
  });
});

module.exports = usersRouter;
