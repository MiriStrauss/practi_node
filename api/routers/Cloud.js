import express from "express";

import {
    getAll
} from "../controllers/Cloud.js";


const router = express.Router()

router.get('', getAll)
console.log("oo");



export default router