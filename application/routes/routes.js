import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile("index.html", { root: "./static" });
});

router.get("/login", (request, response) => {
    response.sendFile("login.html", { root: "./static/pages/login" });
});

router.get("/kombi", (request, response) => {
    response.sendFile("kombi.html", { root: "./static/pages/kombi" });
});

router.get("/karavan", (request, response) => {
    response.sendFile("karavan.html", { root: "./static/pages/karavan" });
});

router.get("/limuzina", (request, response) => {
    response.sendFile("limuzina.html", { root: "./static/pages/limuzina" });
});

router.get("/motor", (request, response) => {
    response.sendFile("motor.html", { root: "./static/pages/motor" });
});

router.get("/suv", (request, response) => {
    response.sendFile("suv.html", { root: "./static/pages/suv" });
});

router.get("/user", (request, response) => {
    response.sendFile("user.html", { root: "./static/pages/user" });
});

export default router;
