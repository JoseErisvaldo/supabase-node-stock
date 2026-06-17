import express from "express";

import { auth } from "../../middlewares/auth.js";
import CategoryController from "../controllers/category-controller.js";

import SupabaseCategoryRepository from "../../infra/repositories/supabase-category-repository/supabase-category-repository.js";

import CreateCategory from "../../application/use-cases/categories/create-category.js";
import GetCategories from "../../application/use-cases/categories/get-categories.js";

const router = express.Router();

const repository = new SupabaseCategoryRepository();

const createCategory = new CreateCategory(repository);
const getCategories = new GetCategories(repository);

const controller = new CategoryController(createCategory, getCategories);

router.post("/", auth, (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.getAll(req, res));

export default router;
