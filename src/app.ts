import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import routes from "./app/routes/routes";

const app: Application = express();

//Middleware Package
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router Calling

app.use("/api/v1", routes);

app.use(globalErrorHandler);

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    statusCode: res.statusCode,
    success: true,
    message: "Server is working",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});
export default app;
