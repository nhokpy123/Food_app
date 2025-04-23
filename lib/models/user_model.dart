class User {
  final String email;
  final String password;
  final String? name;
  final String? address;
  final String? phone;

  User({
    required this.email,
    required this.password,
    this.name,
    this.address,
    this.phone,
  });

  // Convert User instance to JSON
  Map<String, dynamic> toJson() {
    return {
      'email': email,
      'password': password,
      'name': name,
      'address': address,
      'phone': phone,
    };
  }

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      email: json['email'],
      password: json['password'],
      name: json['name'],
      address: json['address'],
      phone: json['phone'],
    );
  }
}
