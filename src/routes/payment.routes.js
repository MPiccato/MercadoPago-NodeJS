import { Router } from "express";
import {createOrder} from '../controllers/payments.controllers.js'


const router = Router()

router.get('/create-order', createOrder);

router.get('/success', (req,res) => res.send('Payment done'));

router.get('/pending', (req,res) => res.send('operation pending'));

router.get('/failure', (req, res) => res.send('operation failure'))

router.get('/webhook', (req,res) => res.send('webhook'));

export default router;