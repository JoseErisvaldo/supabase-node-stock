import express from "express";

import SupabaseEstablishmentRepository from "../../infra/repositories/supabase-establishments-repositoty/supabase-establishment-repositoty.js";
import CreateEstablishments from "../../application/use-cases/establishments/create-establishments.js";
import GetEstablishments from "../../application/use-cases/establishments/get-establishments.js";
import EstablishmentController from "../controllers/establishments-controller.js";
import { auth } from "../../middlewares/auth.js";

const router = express.Router();

const repository = new SupabaseEstablishmentRepository();

const createEstablishment = new CreateEstablishments(repository);
const getEstablishments = new GetEstablishments(repository);

const controller = new EstablishmentController(
  createEstablishment,
  getEstablishments,
);

router.post("/", auth, (req, res) => controller.create(req, res));
router.get("/", auth, (req, res) => controller.getAll(req, res));

export default router;
