const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Đăng ký người dùng
exports.register = async (req, res) => {
  const { email, password, name, address, phone, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      address,
      phone,
      role: role || 'user', // mặc định là user nếu không có
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Đăng nhập
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request:", email, password);
  console.log('Đăng nhập với:', email, password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email không tồn tại" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mật khẩu không đúng" });
    }

    // Tạo JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Đăng nhập thành công",
      user,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Lấy người dùng theo ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("cart");

    if (!user) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }

    res.json({
      username: user.username,
      birthDate: user.birthDate,
      role: user.role,
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Lấy tất cả người dùng
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Cập nhật thông tin người dùng
exports.updateUser = async (req, res) => {
  const { username, birthDate, role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username, birthDate, role },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }

    res.json({
      message: "Cập nhật thông tin người dùng thành công",
      user: {
        username: user.username,
        birthDate: user.birthDate,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};
