import Loader from "../../components/Loader";
import "./styles.scss";

interface LoaderTypes {
  children: JSX.Element;
  pending: boolean;
}

const WithLoader = ({ children, pending }: LoaderTypes) => (
  <div className="with-loader">
    <div
      className="with-loader__component-container"
      style={{ visibility: pending ? "hidden" : "visible" }}
    >
      {children}
    </div>
    {pending && <Loader absolute />}
  </div>
);

export default WithLoader;
