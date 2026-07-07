import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BloodLink API is running successfully",
  });
});

export default router;
