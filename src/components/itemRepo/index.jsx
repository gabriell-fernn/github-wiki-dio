import "./styles";
import { ItemContainer } from "./styles";

export default function ItemRepo({ repo, handleRemoveRepo }) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    };
    return (
        <>
            <ItemContainer onClick={handleRemove}>
                <h3>{repo.name}</h3>
                <p>{repo.full_name}</p>
                <a href={repo.html_url} target="_blank" className="verRepo">
                    Ver repositório
                </a>
                <br />
                <button onClick={() => handleRemoveRepo(repo.id)}>
                    Remover
                </button>
                <hr />
            </ItemContainer>
        </>
    );
}
