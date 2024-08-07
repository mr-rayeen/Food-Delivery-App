import express from 'express';
import upload from '../utils/multer.js';
import {
	getProfile,
	postUpdateDetails,
	postAddAddress,
	postUpdateAddress,
	getDeleteAddress,
	getPlaceOrder,
	getOrderHistory,
} from "../controller/user.js";

const router = express.Router();

router.get("/get-profile", getProfile);
router.post('/update-details', upload.single('image'), postUpdateDetails);
router.post('/add-address', postAddAddress);
router.post('/update-address/:id', postUpdateAddress);
router.get('/delete-address/:id', getDeleteAddress);
router.get('/place-order', getPlaceOrder);
router.get('/order-history', getOrderHistory);


export default router;