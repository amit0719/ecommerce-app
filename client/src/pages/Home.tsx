import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.webp'; 

const Home = () => {

    // Example category data (replace with actual category data)
    const categories = [
      { id: 1, name: 'Mobile', image: img1 },
      { id: 2, name: 'Laptop', image: img1},
      { id: 3, name: 'TV & Appliance', image: img1},
      { id: 4, name: 'Fashion', image: img1 },
      { id: 5, name: 'Electronics', image: img1 },
    ];

    const products = [
      { id: 1, category: 'Mobile', name: 'Product 1', image: img1, price: '$299' },
      { id: 2, category: 'Mobile', name: 'Product 2', image: img1, price: '$399' },
      { id: 3, category: 'Laptop', name: 'Product 3', image: img1, price: '$899' },
      { id: 4, category: 'Laptop', name: 'Product 4', image: img1, price: '$999' },
      // Add more product data for different categories
    ];

  return (
    <div>
      {/* Section: Product Categories */}
       <section className="my-5">
        <div className="container">
          <h2 className="mb-4">Product Categories</h2>
          <div className="row">
            {categories.map(category => (
              <div className="col-md-3 mb-3" key={category.id}>
                <Link to={`/products/${category.name.toLowerCase()}`} className="text-decoration-none">
                  <div className="card text-center">
                    {/* Category Image in Round Shape */}
                    <img src={category.image} className="card-img-top rounded-circle mx-auto mt-3" alt={category.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    {/* Category Name */}
                    <div className="card-body">
                      <h5 className="card-title">{category.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Carousel - Offers */}
      <section className="my-5">
        <div className="container-fluid">
          <h2 className="mb-4">Offers</h2>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* Offer 1 */}
                <img src="offer1.jpg" className="d-block w-100" alt="Offer 1" />
              </div>
              {/* Add other carousel items */}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Product Grid for Different Categories */}
      <section className="my-5">
        <div className="container">
          <h2 className="mb-4">Products</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(product => (
              <div className="col" key={product.id}>
                <div className="card border border-secondary" style={{ transition: 'border-color 0.3s' }}>
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h6 className="card-text text-muted mb-1">{product.category}</h6>
                    <h5 className="card-title mb-2">{product.name}</h5>
                    <p className="card-text fw-bold">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
