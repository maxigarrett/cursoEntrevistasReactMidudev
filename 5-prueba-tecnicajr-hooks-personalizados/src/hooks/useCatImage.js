import { useEffect, useState } from "react";

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ").slice(0, 3).join(" ");
    // console.log(firstWord);
    fetch(
      `https://cataas.com/cat/says/${firstWord}?fontSize=40&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
        console.log(url);
      });
  }, [fact]);
  return { imageUrl };
};