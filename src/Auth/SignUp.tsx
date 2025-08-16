import "../App.css";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email || password) {
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
          <h2>Cadastro</h2>
          <form id="user-form" onSubmit={handleSignUp}>
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

            <button type="submit">Cadastrar</button>

            <Link to="/" className="auth-link">
              Já tenho conta, entrar.
            </Link>
          </form>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
}

export default SignIn;
