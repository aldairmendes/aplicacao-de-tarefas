import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

const INITIAL = { title: "", description: "", priority: "medium" };

function AddTask() {
  const { addTask } = useTaskContext();
  const navigate = useNavigate();
  const [form, setForm] = useState(INITIAL);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (!form.title.trim()) {
      setError("O título é obrigatório.");
      return;
    }
    addTask({ ...form, title: form.title.trim() });
    setSuccess(true);
    setForm(INITIAL);
    setTimeout(() => {
      setSuccess(false);
      navigate("/");
    }, 900);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && e.ctrlKey) handleSubmit();
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">
          Nova <em>Tarefa</em>
        </h1>
        <p className="page-subtitle">
          Preencha os campos abaixo · Ctrl+Enter para salvar
        </p>
      </div>

      <div className="form-card" onKeyDown={handleKeyDown}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">
            Título *
          </label>
          <input
            id="title"
            name="title"
            className="form-input"
            placeholder="O que precisa ser feito?"
            value={form.title}
            onChange={handleChange}
            autoFocus
          />
          {error && (
            <p
              style={{
                color: "var(--danger)",
                fontSize: "0.78rem",
                marginTop: "0.4rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              ⚠ {error}
            </p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            placeholder="Detalhes opcionais..."
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="priority">
            Prioridade
          </label>
          <select
            id="priority"
            name="priority"
            className="form-select"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="low">🟢 Baixa</option>
            <option value="medium">🟡 Média</option>
            <option value="high">🟠 Alta</option>
            <option value="urgent">🔴 Urgente</option>
          </select>
        </div>

        <div className="form-actions">
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            style={
              success ? { background: "var(--low)", color: "var(--bg)" } : {}
            }
          >
            {success ? "✓ Adicionada!" : "Adicionar Tarefa"}
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/")}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
