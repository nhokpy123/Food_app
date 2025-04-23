// const productData = require('../models/productModel');
// const productSchema = require('../models/productModel');
const Product = require('../models/productModel');

// const getPopularProducts = async () => {
//     try {
//         // Fetch all recommended products from the database
//         const data = await productSchema.find({});
//         return data;
//     } catch (error) {
//         throw new Error('Error fetching recommendations: ' + error.message);
//     }
// };


// // Service để lấy danh sách sản phẩm phổ biến
// const getTestPopularProducts = () => {
//     return productData;
// };

//   //test api
//   module.exports = {
//     getTestPopularProducts,
//     getPopularProducts,
// };


//api
class ProductService {
  async createProduct(data) {
    const product = new Product(data); 
    return await product.save(); 
  }

 
  async getAllProducts() {
    return await Product.find(); 
  }

  
  async getProductById(id) {
    return await Product.findById(id);
  }

  
  async updateProduct(_id, data) {
    try {
        const result = await Product.findByIdAndUpdate(_id, data, { new: true }); // Cập nhật theo `_id`
        if (!result) {
            throw new Error("Product not found"); // Ném lỗi nếu không tìm thấy sản phẩm
        }
        return result; // Trả về sản phẩm đã được cập nhật
    } catch (error) {
        throw new Error(error.message || "Error updating product");
    }
}


  
  async deleteProduct(_id) {
    try {
        const result = await Product.findByIdAndDelete(_id); // Xóa theo `_id`
        if (!result) {
            throw new Error("Product not found"); // Ném lỗi nếu không tìm thấy sản phẩm
        }
        return { message: "Product deleted successfully!" };
    } catch (error) {
        throw new Error(error.message || "Error deleting product");
    }
}

}
// const deleteProduct = async (req, res) => {
//   try {
//       const id = req.params.id; // Lấy id từ URL
//       const result = await Product.deleteOne({ id: Number(id) }); // Xóa theo `id`
//       if (result.deletedCount === 0) {
//           return res.status(404).json({ message: "Product not found" });
//       }
//       res.status(200).json({ message: "Product deleted successfully!" });
//   } catch (error) {
//       console.error("Error deleting product:", error);
//       res.status(500).json({ message: "Error deleting product" });
//   }
// };


module.exports = new ProductService();
