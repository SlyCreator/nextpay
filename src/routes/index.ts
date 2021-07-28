import {Router} from "express";
import {router as userRoute} from './user/v1.route';
// import {router as docsRoute} from './docs/v1.route';
// import {router as adminRoute} from './admin/v1.route';
// import {router as businessRoute} from './business/v1.route';
// import {router as serviceRoute} from './service/v1.route';


const routes:Router = Router();


routes.use('/user',userRoute);
// router.use('/admin',adminRoute);
// router.use('/business',businessRoute);
// router.use('/service',serviceRoute);

export default routes;

