import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNave = () => {
  const [categories, setCategories] = useState([])
  console.log(categories)

useEffect( () =>{
  fetch("http://localhost:5000/news-categories")
  .then(res =>res.json())
  .then(data => setCategories(data));
},[])
  return (
    <div>
      <h4>All Categorry</h4>
      {
        categories.map(category => <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>)
      }
    </div>
  );
};

export default LeftSiteNave;