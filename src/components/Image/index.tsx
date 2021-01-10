import { useState } from "react";
import placeholder from "./placeholder.png";

interface ImageTypes {
  src: string;
  alt?: string;
}

const Image = ({ src, alt = "" }: ImageTypes) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && <img src={placeholder} style={{ width: "auto" }} alt={alt} />}
      <img
        src={loaded ? src : placeholder}
        style={{ display: !loaded ? "none" : "block" }}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Image;
