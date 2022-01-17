import express from 'express';
import { addEntity } from '../../userservice/controlers/database.js';

const router = express.Router();

router.get("/entities/getall", getall);
router.patch("/update", updateEntity);
router.delete("/delete", deleteEntity);
router.post("/add", addEntity);