import express from "express";

const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from "../controllers/userController.js";
import { protect, merchant } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, merchant, getUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/:id").delete(protect, merchant, deleteUser).get(protect, merchant, getUserById).put(protect, merchant, updateUser)

export default router;
