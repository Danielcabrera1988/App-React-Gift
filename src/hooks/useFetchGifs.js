import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImg = async () => {
    const newImg = await getGifts(category);
    setImages(newImg);
    setIsLoading(false);
  };
  //no debe usarse Async - await con useEffect
  useEffect(() => {
    //esta es una forma de hacerlo
    // getGifts(category).then(newImg => setImages(newImg))
    getImg();
  }, []);
  return {
    images,
    isLoading
  };
};