import { Router } from "express";
import { createFicha, deleteFicha, getFicha, updateFicha } from "../controllers/ficha.controller.js";

const router=Router()

router.get('/fichas',getFicha)

router.post('/fichas',createFicha)


router.put('/fichas',updateFicha)

router.delete('/fichas',deleteFicha)

export default router







