// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Dashboard.css';

// export const Dashboard = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from the backend API or database
//     axios.get('http://localhost:5000/api/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1>Product Dashboard</h1>
//       <div className="product-list">
//         {products.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <div className="product-details">
//               <h2 className="product-name">{product.name}</h2>
//               <p className="product-price">Price: {product.price}</p>
//               <p className="product-stock">Stock: {product.stock}</p>
//               <p className="product-description">{product.description}</p>
//               <p className="product-user">Added by: {product.user}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  const handleEditProduct = (productId, updatedProduct) => {
    axios
      .put(`http://localhost:5000/api/products/edit/${productId}`, updatedProduct)
      .then(response => {
        console.log('Product updated:', response.data);
        fetchProducts(); // Fetch updated product list
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  const handleDeleteProduct = productId => {
    axios
      .delete(`http://localhost:5000/api/products/delete/${productId}`)
      .then(response => {
        console.log('Product deleted:', response.data);
        fetchProducts(); // Fetch updated product list
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  const handleAddProduct = newProduct => {
    axios
      .post('http://localhost:5000/api/products/add', newProduct)
      .then(response => {
        console.log('Product added:', response.data);
        fetchProducts(); // Fetch updated product list
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="dashboard-container">
      <h1>Product Dashboard</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">Price: {product.price}</p>
              <p className="product-stock">Stock: {product.stock}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-user">Added by: {product.user}</p>
              <button
                className="edit-button"
                onClick={() => handleEditProduct(product.id, { price: product.price + 10 })}
              >
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-product-form">
        <h2>Add Product</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            const newProduct = {
              name: e.target.name.value,
              price: parseFloat(e.target.price.value),
              stock: parseInt(e.target.stock.value),
              description: e.target.description.value,
              user: e.target.user.value,
            };
            handleAddProduct(newProduct);
            e.target.reset();
          }}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="price">Price:</label>
          <input type="number" step="0.01" id="price" name="price" required />
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" name="stock" required />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required />
          <label htmlFor="user">User:</label>
          <input type="text" id="user" name="user" required />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};


