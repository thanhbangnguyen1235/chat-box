import * as dotenv from "dotenv";
import express from "express";
import { AppService, ViewService } from "./endpoints/ServiceConfig.js";
import { mongooseConnection } from "./middleware/connection.js";
import { RouterService } from "./endpoints/Router.js";

dotenv.config();
let app = express();

app = AppService(app).updatedService;

mongooseConnection(app);

app = ViewService(app).updatedService;
app = RouterService(app).updatedService;
