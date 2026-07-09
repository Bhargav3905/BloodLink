import { Router } from "express";

import {
  getInventory,
  getBloodGroupInventory,
} from "../controllers/inventory.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.get("/", getInventory);

router.get("/:bloodGroup", getBloodGroupInventory);

export default router;
