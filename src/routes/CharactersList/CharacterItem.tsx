import { CharacterTypes } from "./types";

const CharacterItem = ({ name, species, image }: CharacterTypes) => {
  return (
    <div>
      <div>{name}</div>
      <div>{species}</div>
      <img src={image} alt="" />
    </div>
  );
};

export default CharacterItem;
