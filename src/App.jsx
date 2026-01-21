import "./App.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Banner } from "./components/Banner";

import { Tema } from "./components/Tema";
import { CardEvento } from "./components/CardEvento";
import { useState } from "react";

function App() {
  const temas = [
    {
      id: 1,
      nome: "Front-end",
    },
    {
      id: 2,
      nome: "Back-end",
    },
    {
      id: 3,
      nome: "DevOps",
    },
    {
      id: 4,
      nome: "Inteligencia Artificial",
    },
    {
      id: 5,
      nome: "Data Science",
    },
    {
      id: 6,
      nome: "Cloud",
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo tecBoard" />
      </header>
      <Banner></Banner>
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

      <section className="container">
        {temas.map((tema) => {
          if (!eventos.some((evento) => evento.tema.id == tema.id)) {
            return null;
          }

          return (
            <section key={tema.id}>
              <Tema tema={tema}></Tema>
              <div className="eventos">
                {eventos
                  .filter((evento) => evento.tema.id == tema.id)
                  .map((evento, index) => (
                    <CardEvento key={index} evento={evento} />
                  ))}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;
