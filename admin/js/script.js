// admin.js
const baseUrl = "http://localhost:3030/api/products"; // Replace with your API base URL

// Fetch all products
async function fetchProducts() {
    try {
        const response = await fetch(`${baseUrl}/allpopular`);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Display products
function displayProducts(products) {
    const tableBody = document.getElementById("productTableBody");
    tableBody.innerHTML = ""; // Clear previous data

    products.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.stars || 0}</td>
            <td>${product.created_at}</td>
            <td>${product.created_at}</td>
            <td><img src="${product.img}" alt="Product Image" style="width: 50px; height: 50px;"></td>
            <td>${product.location || "VN"}</td>
            <td>${product.type_id}</td>
            <td>
                <button class="btn-edit" onclick="editProduct('${product._id}')">Edit</button>
                <button class="btn-delete" onclick="deleteProduct('${product._id}')">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Add a new product
async function addProduct(product) {
    try {
        const response = await fetch(`${baseUrl}/createpopular`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        if (response.ok) {
            alert("Product added successfully!");
            fetchProducts();
        } else {
            const error = await response.json();
            alert("Error adding product: " + error.message);
        }
    } catch (error) {
        console.error("Error adding product:", error);
    }
}

// Delete a product
async function deleteProduct(id) {
    try {
        const response = await fetch(`${baseUrl}/deletepopular/${id}`, { method: "DELETE" });

        if (response.ok) {
            alert("Product deleted successfully!");
            fetchProducts();
        } else {
            const error = await response.json();
            alert("Error deleting product: " + error.message);
        }
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}

// Edit a product
async function editProduct(id) {
    const product = {
        name: prompt("Enter new name:"),
        price: parseFloat(prompt("Enter new price:")),
    };

    try {
        const response = await fetch(`${baseUrl}/updatebyidpopular/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        if (response.ok) {
            alert("Product updated successfully!");
            fetchProducts();
        } else {
            const error = await response.json();
            alert("Error updating product: " + error.message);
        }
    } catch (error) {
        console.error("Error updating product:", error);
    }
}

// Initialize
document.addEventListener("DOMContentLoaded", fetchProducts);


