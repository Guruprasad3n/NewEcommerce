import router from 'express'
import { createProductController } from '../Controllers/ProductController'
import { isAdmin, requireSignIn } from '../Middlewares/authMiddleware'
const router = express.Router()

router.post("", isAdmin, requireSignIn,  createProductController)





export default router