// lib/screens/profile_screen.dart
import 'package:flutter/material.dart';
import '../widgets/bottom_nav_bar.dart';
import '../services/api_service.dart';
import '../utils/token_storage.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    bool isLoggedIn = ApiService.authToken != null;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Tài khoản'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: isLoggedIn
            ? Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Thông tin tài khoản',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 16),
                  // Hiển thị thông tin người dùng ở đây
                  // Trong ứng dụng thật, bạn nên gọi API để lấy thông tin chi tiết người dùng

                  const SizedBox(height: 24),
                  ListTile(
                    leading: const Icon(Icons.shopping_bag),
                    title: const Text('Đơn hàng của tôi'),
                    trailing: const Icon(Icons.chevron_right),
                    onTap: () {
                      // Navigate to orders screen
                    },
                  ),
                  const Divider(),
                  ListTile(
                    leading: const Icon(Icons.location_on),
                    title: const Text('Địa chỉ giao hàng'),
                    trailing: const Icon(Icons.chevron_right),
                    onTap: () {
                      // Navigate to addresses screen
                    },
                  ),
                  const Divider(),
                  ListTile(
                    leading: const Icon(Icons.settings),
                    title: const Text('Cài đặt tài khoản'),
                    trailing: const Icon(Icons.chevron_right),
                    onTap: () {
                      // Navigate to settings screen
                    },
                  ),
                  const Divider(),
                  const SizedBox(height: 24),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed: () async {
                        await TokenStorage.deleteToken();
                        ApiService.authToken = null;
                        Navigator.pushReplacementNamed(context, '/login');
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.red,
                        padding: const EdgeInsets.symmetric(vertical: 12),
                      ),
                      child: const Text('ĐĂNG XUẤT',
                          style: TextStyle(fontSize: 16)),
                    ),
                  ),
                ],
              )
            : Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text(
                      'Bạn chưa đăng nhập',
                      style: TextStyle(fontSize: 18),
                    ),
                    const SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/login');
                      },
                      child: const Text('ĐĂNG NHẬP'),
                    ),
                    const SizedBox(height: 8),
                    TextButton(
                      onPressed: () {
                        Navigator.pushNamed(context, '/register');
                      },
                      child: const Text('ĐĂNG KÝ'),
                    ),
                  ],
                ),
              ),
      ),
      bottomNavigationBar: const BottomNavBar(currentIndex: 3),
    );
  }
}
