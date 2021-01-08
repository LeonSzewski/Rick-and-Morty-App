import { useHistory } from "react-router-dom";
import { CharacterTypes } from "./types";

const CharacterItem = ({ id, name, species, image }: CharacterTypes) => {
  const history = useHistory();
  return (
    <div onClick={() => history.push(`/${id}`)}>
      <div>{name}</div>
      <div>{species}</div>
      <img src={image} alt="" />
    </div>
  );
};

export default CharacterItem;
