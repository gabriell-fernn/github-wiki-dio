import "./styles.jsx";
import gitLogo from "../assets/github.png";
import { Container } from "./styles.jsx";
import Input from "../components/input/index.jsx";
import ItemRepo from "../components/itemRepo/index.jsx";
import { useState } from "react";
import Button from "../components/button/index.jsx";
import { api } from "../components/services/api.jsx";

function App() {
    const [currentRepo, setCurrentRepo] = useState("");
    const [repos, setRepos] = useState([]);

    const handleSearchRepo = async () => {
        try {
            const { data } = await api.get(`repos/${currentRepo}`);

            if (data.id) {
                const isExist = repos.find((repo) => repo.id === data.id);
                if (!isExist) {
                    setRepos((prev) => [...prev, data]);
                } else {
                    alert("Repositório já adicionado!");
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert("Repositório não encontrado!");
            } else {
                alert("Ocorreu um erro ao buscar o repositório.");
            }
        }
    };

    const handleRemoveRepo = (id) => {
        setRepos((prevRepos) => prevRepos.filter((repo) => repo.id !== id));
    };

    return (
        <>
            <Container>
                <img src={gitLogo} width={72} height={72} alt="github logo" />
                <Input
                    value={currentRepo}
                    onChange={(e) => setCurrentRepo(e.target.value)}
                />
                <Button onClick={handleSearchRepo} />
                {repos.map((repo) => (
                    <ItemRepo
                        key={repo.id}
                        handleRemoveRepo={handleRemoveRepo}
                        repo={repo}
                    />
                ))}
            </Container>
        </>
    );
}

export default App;
