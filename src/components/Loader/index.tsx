import loader from "./loader.gif";
import "./styles.scss";

interface LoaderTypes {
  absolute?: boolean;
  fullscreen?: boolean;
}

const Loader = ({ absolute, fullscreen }: LoaderTypes) => {
  return (
    <div
      className={`loader ${fullscreen ? "fullscreen" : undefined}`}
      style={{ position: absolute ? "absolute" : "relative" }}
    >
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
