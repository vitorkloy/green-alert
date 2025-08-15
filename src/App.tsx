/* import { useState } from "react"; */
import "./App.css";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="title-with-icon">
          <h1>Alerta Verde</h1>
        </div>
        <p>Monitoramento climático com alertas por localização</p>
      </header>

      <main className="container">
        <section className="card">
          <h2>Usuários</h2>
          <form id="user-form">
            <input id="user-name" placeholder="Nome" required />
            <input id="user-email" placeholder="Email (opcional)" />
            <button type="submit">Cadastrar Usuário</button>
          </form>
          <div className="row">
            <label htmlFor="user-select">Selecionar usuário:</label>
            <select id="user-select"></select>
            <button id="refresh-users" type="button">
              Atualizar
            </button>
          </div>
        </section>

        <section className="card">
          <h2>Localidades</h2>
          <form id="loc-form">
            <input id="loc-name" placeholder="Nome da localidade" required />
            <input id="loc-lat" placeholder="Latitude" required />
            <input id="loc-lon" placeholder="Longitude" required />
            <button type="submit">Cadastrar Localidade</button>
          </form>
          <div className="row">
            <button id="load-locs" type="button">
              Carregar Localidades do Usuário
            </button>
            <button id="monitor-all" type="button">
              Monitorar Todas
            </button>
          </div>
          <ul id="loc-list"></ul>
        </section>

        <section className="card">
          <h2>Alertas</h2>
          <div className="row">
            <button id="load-alerts" type="button">
              Carregar Alertas do Usuário
            </button>
          </div>
          <ul id="alert-list">
            <li className="item">
              <span className="badge danger">Perigo</span>
              <strong>Tempestade Severa</strong>
              <small className="muted">
                Ventos acima de 100 km/h esperados na região.
              </small>
            </li>
            <li className="item">
              <span className="badge warn">Aviso</span>
              <strong>Onda de Calor</strong>
              <small className="muted">
                Temperaturas acima de 40°C previstas para amanhã.
              </small>
            </li>
            <li className="item">
              <span className="badge info">Informativo</span>
              <strong>Chuvas Intensas</strong>
              <small className="muted">
                Possibilidade de enchentes nas áreas baixas.
              </small>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <small>OpenWeatherMap API | Projeto didático</small>
      </footer>
    </>
  );
}

export default App;
