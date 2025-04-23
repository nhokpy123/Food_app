const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
            type: Number,
            required: true,
            unique: true,
            default: () => Math.floor(Math.random() * 100)},
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stars: { type: Number, required: false, default: 0 },
  img: { type: String, required: true },
  location: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  type_id: { type: Number, required: true },
}
);

module.exports = mongoose.model('Product', productSchema);

// const productData = {
//   total_size: 6,
//   type_id: 2,
//   offset: 0,
//   products: [
//       {
//           id: 1,
//           name: "Easy Saucy Pizza",
//           description: "This five red bases, two are dedicated to salami (fennel and regular)...",
//           price: 120,
//           stars: 4,
//           img: "/uploads/1732541540958.png",
//           location: "Canada, British Columbia",
//           created_at: "2021-11-17 10:09:08",
//           updated_at: "2024-07-20 04:47:26",
//           type_id: 2,
//       },
//       {
//           id: 2,
//           name: "Muschel-Spaghetti",
//           description: "The best sweet dessertThe quality and craftsmanship is on full show...",
//           price: 21,
//           stars: 5,
//           img: "/uploads/1732541540958.png",
//           location: "Icefields, Alberta",
//           created_at: "2021-11-17 10:10:43",
//           updated_at: "2023-11-08 10:34:46",
//           type_id: 2,
//       },
//       {
//           id: 6,
//           name: "No-Yeast Pissa Dough",
//           description: "The quality and craftsmanship is on full show...",
//           price: 18,
//           stars: 4,
//           img: "/uploads/1732541540958.png",
//           location: "china",
//           created_at: "2021-12-23 15:03:24",
//           updated_at: "2023-11-08 10:35:36",
//           type_id: 2,
//       },
//       {
//           id: 7,
//           name: "Skinny Chicken and Roasted Potato Bowl",
//           description: "The quality and craftsmanship is on full show...",
//           price: 10,
//           stars: 5,
//           img: "/uploads/1732541540958.png",
//           location: "Cuba",
//           created_at: "2021-12-23 15:04:49",
//           updated_at: "2023-11-08 10:36:26",
//           type_id: 2,
//       },
//       {
//           id: 10,
//           name: "Pasta with Vegetables",
//           description: "Chicken Biryani Served in a Bowl Close Up Photo...",
//           price: 12,
//           stars: 4,
//           img: "/uploads/1732541540958.png",
//           location: "Morocco",
//           created_at: "2021-12-27 06:29:47",
//           updated_at: "2023-11-08 10:31:21",
//           type_id: 2,
//       },
//       {
//           id: 11,
//           name: "Fruit",
//           description: "Ilish Mach aka Hilsa fish is in the season and needless to say...",
//           price: 150,
//           stars: 4,
//           img: "/uploads/1732541540958.png",
//           location: "Morocco",
//           created_at: "2021-12-27 06:35:34",
//           updated_at: "2024-08-09 06:58:54",
//           type_id: 2,
//       },
//   ],
// };


// module.exports = productData;

