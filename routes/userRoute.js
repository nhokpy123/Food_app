const express = require("express");
const { register, login, getAllUsers, updateUser, getUserById } = require("../controllers/userController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Lấy thông tin người dùng theo ID
router.get("/getbyid/:id", getUserById);

// Lấy tất cả người dùng (chỉ dành cho admin)
router.get("/getalluser", getAllUsers);

// Cập nhật thông tin người dùng
router.put("/putbyid/:id", updateUser);



module.exports = router;