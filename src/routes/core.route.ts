import  express  from "express";
import { registerController } from "../controller/register.controller";
import { loginController } from "../controller/login.controller";
import { privateRouteMiddleware } from "../middleware/private-route.middleware";

const router = express.Router()


router.post('/register',registerController)

router.post('/login',privateRouteMiddleware,loginController)


export {router as coreRouter}