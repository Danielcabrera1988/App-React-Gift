import { useState } from "react";
import { AddCategory, GiftGrid } from "./component";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
