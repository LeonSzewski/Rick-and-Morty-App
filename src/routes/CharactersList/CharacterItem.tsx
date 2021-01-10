import { useHistory } from "react-router-dom";
import Image from "../../components/Image";
import { CharacterTypes } from "./types";

const CharacterItem = ({ id, name, species, image }: CharacterTypes) => {
  const history = useHistory();
  return (
    <div onClick={() => history.push(`/${id}`)}>
      <div>{name}</div>
      <div>{species}</div>
      <Image src={image} alt="" />
    </div>
  );
};

export default CharacterItem;
