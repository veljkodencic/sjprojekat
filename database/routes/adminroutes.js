import express from "express";
import {addKaravan, getAllKaravan, getKaravan, updateKaravan, deleteKaravan} from "../controlers/karavanKontroler.js";
import {addKombi, getAllKombi, getKombi, updateKombi, deleteKombi} from "../controlers/kombiKontroler.js";
import {checkIfAdmin, checkIfModerator} from "../middleware/authentication.js";
import {addLimuzina, deleteLimuzina, getAllLimuzina, getLimuzina, updateLimuzina} from "../controlers/limuzinaKontroler.js";
import {addMotor, deleteMotor, getAllMotor, getMotor, updateMotor} from "../controlers/motorKontroler.js";
import {addSuv, deleteSuv, getAllSuv, getSuv, updateSuv} from "../controlers/suvKontroler.js";
import {deleteUser} from "../controlers/userKontroler.js";

const router = express.Router();

router.post("/karavan/add", checkIfAdmin, checkIfModerator, addKaravan);
router.get("/karavan/getOne", checkIfAdmin, checkIfModerator, getKaravan);
router.get("/karavan/getAll", checkIfAdmin, checkIfModerator, getAllKaravan);
router.patch("/karavan/update",checkIfAdmin, checkIfModerator, updateKaravan);
router.delete("/karavan/delete", checkIfAdmin, checkIfModerator, deleteKaravan);

router.post("/kombi/add", checkIfAdmin, checkIfModerator, addKombi);
router.get("/kombi/getOne",checkIfAdmin, checkIfModerator, getKombi);
router.get("/kombi/getAll", checkIfAdmin, checkIfModerator, getAllKombi);
router.patch("/kombi/update", checkIfAdmin, checkIfModerator, updateKombi);
router.delete("/kombi/delete", checkIfAdmin, checkIfModerator, deleteKombi);

router.post("/limuzina/add", checkIfAdmin, checkIfModerator,addLimuzina);
router.get("/limuzina/getOne",checkIfAdmin, checkIfModerator, getLimuzina);
router.get("/limuzina/getAll", checkIfAdmin, checkIfModerator, getAllLimuzina);
router.patch("/limuzina/update",checkIfAdmin, checkIfModerator, updateLimuzina);
router.delete("/limuzina/delete", checkIfAdmin, checkIfModerator, deleteLimuzina);

router.post("/motor/add", checkIfAdmin, checkIfModerator, addMotor);
router.get("/motor/getOne",checkIfAdmin, checkIfModerator, getMotor);
router.get("/motor/getAll", checkIfAdmin, checkIfModerator,getAllMotor);
router.patch("/motor/update", checkIfAdmin, checkIfModerator,updateMotor);
router.delete("/motor/delete",checkIfAdmin, checkIfModerator, deleteMotor);

router.post("/suv/add", checkIfAdmin, checkIfModerator, addSuv);
router.get("/suv/getOne",checkIfAdmin, checkIfModerator, getSuv);
router.get("/suv/getAll", checkIfAdmin, checkIfModerator,getAllSuv);
router.patch("/suv/update", checkIfAdmin, checkIfModerator,updateSuv);
router.delete("/suv/delete",checkIfAdmin, checkIfModerator, deleteSuv);

router.delete("/user/delete", checkIfAdmin, checkIfAdmin, deleteUser);

export default router