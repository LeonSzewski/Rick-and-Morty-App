import { useState } from "react";
import placeholder from "./placeholder.png";

interface ImageTypes {
  src: string;
  alt?: string;
}

const Image = ({ src, alt }: ImageTypes) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={loaded ? src : placeholder}
      alt={alt}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default Image;
