import { gql, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import Image from "../../components/Image";

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
    <div>
      <div onClick={() => history.goBack()}>Wstecz</div>
      <div>
        <Image src={image} />
        <div>{name}</div>
        <div>{species}</div>
        <div>{gender}</div>
        <div>{location.name}</div>
        <div>{status}</div>
        <div>
          <div>Lista odcinków</div>
          {episode.map(({ id, name }: EpisodeType) => (
            <div key={id}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
