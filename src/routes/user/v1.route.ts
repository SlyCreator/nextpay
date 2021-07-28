import {Router} from "express";
import {router as userAuthRoute} from './v1.userAuth.route';
// import {router as userProfileRoute} from './v1.userAuth.route';
export const router:Router = Router();

const authentication = require("./authentication");

router.use('/user',userAuthRoute);
// router.use('/user',userProfileRoute);

module.exports = router;
