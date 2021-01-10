import { useHistory } from "react-router-dom";
import Image from "../../components/Image";
import { CharacterTypes } from "./types";

const CharacterItem = ({ id, name, species, image }: CharacterTypes) => {
  const history = useHistory();
  return (
    <li className="character" onClick={() => history.push(`/${id}`)}>
      <div className="character__image">
        <Image src={image} />
      </div>
      <p className="character__name">{name}</p>
      <p className="character__species">({species})</p>
    </li>
  );
};

export default CharacterItem;
