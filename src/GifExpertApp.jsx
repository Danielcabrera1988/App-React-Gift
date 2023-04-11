import { useState } from "react";
import { AddCategory, GifGrid } from "./component/index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
