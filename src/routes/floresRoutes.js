import express from "express";
import { getAllFlores} from "../controllers/florescontroller.js";

const router = express.Router();

router.get("/", getAllFlores);

export default router;