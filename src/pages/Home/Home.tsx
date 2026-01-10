import { Button } from "@components/Button";
import { Input } from "@components/Input";

export const Home = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Magic RPTable</h1>
      <p>Bem-vindo ao Magic RPTable!</p>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap"
        }}
      >
        <Button variant="primary">Botão Primário</Button>
        <Button variant="secondary">Botão Secundário</Button>
        <Button variant="magic">Botão Mágico</Button>
      </div>
      <div style={{ marginTop: "2rem", maxWidth: "400px" }}>
        <Input type="text" placeholder="Digite algo..." />
      </div>
    </div>
  );
};
