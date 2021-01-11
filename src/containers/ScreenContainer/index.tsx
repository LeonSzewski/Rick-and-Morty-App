import { useHistory } from "react-router-dom";
import "./styles.scss";

interface ScreenContainerTypes {
  title: string;
  children: JSX.Element | JSX.Element[];
  customArea?: JSX.Element;
}

const ScreenContainer = ({ title, children }: ScreenContainerTypes) => {
  const history = useHistory();

  return (
    <div className="screen-container">
      <div className="screen-container__navigation">
        <div
          className="screen-container__back-button"
          onClick={() => history.goBack()}
        >
          Wstecz
        </div>

        <h1 className="screen-container__screen-title">{title}</h1>
      </div>
      <div className="screen-container__children">{children}</div>
    </div>
  );
};

export default ScreenContainer;
