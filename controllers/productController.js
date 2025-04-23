// const productService = require('../services/productService');
const ProductService = require('../services/productService.js');

// const getPopulartions = async (req, res) => {
//     try {
//         const populartions = await productService.getPopularProducts();
//         res.status(200).json(populartions);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


// // Controller để lấy danh sách sản phẩm
// const getPopularProducts = (req, res) => {
//     const data = productService.getTestPopularProducts();
//     res.json(data);
// };

// module.exports = {
//     getPopularProducts,
//     getPopulartions,
// };

//api
class ProductController {
    async createProduct(req, res) {
      try {
        const product = await ProductService.createProduct(req.body);
        res.status(201).json(product);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  
    async getAllProducts(req, res) {
      try {
        const products = await ProductService.getAllProducts();
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  
    async getProductById(req, res) {
      try {
        const product = await ProductService.getProductById(req.params.id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  
    async updateProduct(req, res) {
      try {
        const product = await ProductService.updateProduct(req.params.id, req.body);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  
    async deleteProduct(req, res) {
      try {
        const product = await ProductService.deleteProduct(req.params.id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  }
  
  module.exports = new ProductController();
