import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function LeftNav() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div>
      <h1 className="text-xl font-bold pb-6">All Category</h1>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          className={({ isActive }) =>
            isActive
              ? "block bg-red-400 m-4 text-lg font-medium text-[#9F9F9F]"
              : 'block m-4 text-lg font-medium text-[#9F9F9F]"'
          }
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}

      {/* <div>{news.find()}</div> */}
    </div>
  );
}

export default LeftNav;
