import { Router } from "express";

import { createDonation, getDonationHistory } from "../controllers/donation.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.get("/", getDonationHistory);

router.post("/", createDonation);

export default router;
