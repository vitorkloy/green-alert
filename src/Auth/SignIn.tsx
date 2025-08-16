import "../App.css";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name || email || password) {
      navigate("/app");
    }
  };

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
          <h2>Login</h2>
          <form id="user-form" onSubmit={handleSignIn}>
            <input
              id="user-name"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              id="user-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              id="user-password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Entrar</button>

            <Link to="/signup" className="auth-link">
              Não tenho conta, cadastrar-me.
            </Link>
          </form>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default SignIn;
