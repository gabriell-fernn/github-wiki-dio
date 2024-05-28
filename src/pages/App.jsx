import "./styles.jsx";
import gitLogo from "../assets/github.png";
import { Container } from "./styles.jsx";
import Input from "../components/input/index.jsx";

function App() {
    return (
        <>
            <Container>
                <img src={gitLogo} width={72} height={72} alt="github logo" />
                <Input />
            </Container>
        </>
    );
}

export default App;
