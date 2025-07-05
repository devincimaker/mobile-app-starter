import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Endpoint for the user to talk to. The agent will accumulate all the context.
// It will have a tool to "create_day" which will unschedule all current tasks for the day and create a bunch of new tasks in the database.

// Endpoint for the user to get the list of tasks for the day.

// implement advance voice

app.get("/agent", (req: Request, res: Response) => {
  res.send("Hello, I am your agent!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
