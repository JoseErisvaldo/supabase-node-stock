import "dotenv/config";
import express from "express";

import authRoutes from "../presentation/routes/auth.routes.js";
import categoryRoutes from "../presentation/routes/category.routes.js";
import establishmentsRoutes from "../presentation/routes/establishments.routes.js";
import { auth } from "../middlewares/auth.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/categories", auth, categoryRoutes);
app.use("/establishments", auth, establishmentsRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running http://localhost:${process.env.PORT || 3000}`);
});
