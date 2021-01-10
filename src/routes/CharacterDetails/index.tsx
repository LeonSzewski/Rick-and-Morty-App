import { gql, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import Image from "../../components/Image";
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
  const history = useHistory();
  const { loading, error, data } = useQuery(characterDetailQuery, {
    variables: { id },
  });

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>Not found</div>;

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
    <div className="character-details container">
      <div onClick={() => history.goBack()}>Wstecz</div>
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
  );
};

export default CharacterDetails;
