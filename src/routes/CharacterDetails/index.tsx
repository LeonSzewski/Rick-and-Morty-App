import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Error from "../../components/Error";
import Image from "../../components/Image";
import Loader from "../../components/Loader";
import ScreenContainer from "../../containers/ScreenContainer";

import "./styles.scss";

type CharacterId = { id: string };
type EpisodeType = CharacterId & { name: string };

const characterDetailQuery = gql`
  query($id: ID!) {
    character(id: $id) {
      name
      image
      species
      gender
      location {
        name
      }
      status
      episode {
        id
        name
      }
    }
  }
`;

const CharacterDetails = () => {
  const { id } = useParams<CharacterId>();
  const { loading, error, data } = useQuery(characterDetailQuery, {
    variables: { id },
  });

  if (loading) return <Loader fullscreen />;
  if (!data || error) return <Error />;

  const {
    name,
    image,
    species,
    gender,
    location,
    status,
    episode,
  } = data.character;

  return (
    <ScreenContainer title={name}>
      <div className="character-details container">
        <div className="character-details__container">
          <div className="character-details__image">
            <Image src={image} />
            <div className="character-details__name">{name}</div>
          </div>
          <div>
            <div className="character-details__detail">
              Imię: <span>{name}</span>
            </div>
            <div className="character-details__detail">
              Gatunek: <span>{species}</span>
            </div>
            <div className="character-details__detail">
              Płeć: <span>{gender}</span>
            </div>
            <div className="character-details__detail">
              Lokalizacja: <span>{location.name}</span>
            </div>
            <div className="character-details__detail">
              Status: <span>{status}</span>
            </div>
          </div>
        </div>
        <div className="character-details__episodes-container">
          <h3>Lista odcinków</h3>
          <ul className="character-details__episodes">
            {episode.map(({ id, name }: EpisodeType, index: number) => (
              <li className="character-details__episode" key={id}>
                {index + 1}. {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScreenContainer>
  );
};

export default CharacterDetails;
