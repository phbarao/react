import React, { useState, useEffect } from 'react';
import items from '../../data/products.json';

function Landing() {
  const [products, setProducts] = useState(items);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case 'category':
        setCategory(e.target.value);
        break;
      case 'search':
        setSearch(e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let filteredProducts = items;

    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    if (search !== '') {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setProducts(filteredProducts);
    //variable being listened for change
  }, [category, search]);

  return (
    <>
      <form className="filter">
        <select
          name="category"
          id="category"
          onChange={(e) => handleFilterChange(e, 'category')}
        >
          <option value="all">All</option>
          <option value="jacket">Jackets</option>
          <option value="jean">Jeans</option>
          <option value="pant">Pants</option>
          <option value="dress">Dresses</option>
          <option value="shoe">Shoes</option>
          <option value="sock">Socks</option>
          <option value="swimwear">Swimwear</option>
          <option value="handbag">Hand Bag</option>
          <option value="formalwear">Formal Wear</option>
          <option value="sweater">Sweater</option>
          <option value="hat">Hats</option>
          <option value="baby">Baby</option>
        </select>

        <input
          type="text"
          name="search"
          onChange={(e) => handleFilterChange(e, 'search')}
          placeholder="Search..."
        />
      </form>

      <div className="master--card">
        {products.map((productItem, key) => {
          return (
            <div className="card">
              <h2 className="title">{productItem.title}</h2>
              <p className="description">{productItem.description}</p>
              <p className="price">${productItem.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Landing;
