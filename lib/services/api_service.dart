import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/product_model.dart';
import '../models/user_model.dart';

class ApiService {
  static const String baseUrl = 'https://api-fast-food.onrender.com';

  // Token lưu sau khi đăng nhập
  static String? authToken;

  // PRODUCT API
  static Future<List<Product>> getAllProducts() async {
    final response =
        await http.get(Uri.parse('$baseUrl/api/products/allpopular'));

    if (response.statusCode == 200) {
      final List<dynamic> productsJson = json.decode(response.body);
      return productsJson.map((json) => Product.fromJson(json)).toList();
    } else {
      throw Exception('Failed to load products');
    }
  }

  static Future<Product> getProductById(int id) async {
    final response =
        await http.get(Uri.parse('$baseUrl/api/products/getbyidpopular/$id'));

    if (response.statusCode == 200) {
      return Product.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to load product');
    }
  }

  static Future<Product> createProduct(Product product) async {
    final response = await http.post(
      Uri.parse('$baseUrl/api/products/createpopular'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer $authToken',
      },
      body: jsonEncode(product.toJson()),
    );

    if (response.statusCode == 201) {
      return Product.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to create product');
    }
  }

  static Future<Product> updateProduct(int id, Product product) async {
    final response = await http.put(
      Uri.parse('$baseUrl/api/products/updatebyidpopular/$id'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer $authToken',
      },
      body: jsonEncode(product.toJson()),
    );

    if (response.statusCode == 200) {
      return Product.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to update product');
    }
  }

  static Future<void> deleteProduct(int id) async {
    final response = await http.delete(
      Uri.parse('$baseUrl/api/products/deletepopular/$id'),
      headers: <String, String>{
        'Authorization': 'Bearer $authToken',
      },
    );

    if (response.statusCode != 200) {
      throw Exception('Failed to delete product');
    }
  }

  static Future<Map<String, dynamic>> login(
      String email, String password) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/api/users/login'),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: jsonEncode(<String, String>{
          'email': email,
          'password': password,
        }),
      );

      print("Status: ${response.statusCode}");
      print("Body: ${response.body}");

      final Map<String, dynamic> data = json.decode(response.body);

      if (response.statusCode == 200) {
        // Nếu backend không trả token, thì bỏ đoạn này
        if (data.containsKey('token')) {
          authToken = data['token'];
        }
        return data;
      } else {
        throw Exception('Failed to login: ${data["message"] ?? response.body}');
      }
    } catch (e) {
      print("Login Exception: $e");
      rethrow;
    }
  }

  static Future<Map<String, dynamic>> register(User user) async {
    final response = await http.post(
      Uri.parse('$baseUrl/api/users/register'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(user.toJson()),
    );

    if (response.statusCode == 201) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to register: ${response.body}');
    }
  }
}
