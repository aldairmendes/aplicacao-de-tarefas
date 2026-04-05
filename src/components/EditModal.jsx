import React, { useState, useEffect } from "react";
import { useTaskContext } from "../context/TaskContext";

function EditModal({ task, onClose }) {
  const { editTask } = useTaskContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  useEffect(() => {
    if (task)
      setForm({
        title: task.title,
        description: task.description,
        priority: task.priority,
      });
  }, [task]);

  function handleSubmit() {
    if (!form.title.trim()) return;
    editTask({ ...task, ...form, title: form.title.trim() });
    onClose();
  }

  function handleKey(e) {
    if (e.key === "Escape") onClose();
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={-1}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">
          Editar <span>tarefa</span>
        </h2>
        <div className="form-group">
          <label className="form-label">Título *</label>
          <input
            className="form-input"
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            autoFocus
          />
        </div>
        <div className="form-group">
          <label className="form-label">Descrição</label>
          <textarea
            className="form-textarea"
            value={form.description}
            onChange={(e) =>
              setForm((p) => ({ ...p, description: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label className="form-label">Prioridade</label>
          <select
            className="form-select"
            value={form.priority}
            onChange={(e) =>
              setForm((p) => ({ ...p, priority: e.target.value }))
            }
          >
            <option value="low">🟢 Baixa</option>
            <option value="medium">🟡 Média</option>
            <option value="high">🟠 Alta</option>
            <option value="urgent">🔴 Urgente</option>
          </select>
        </div>
        <div className="form-actions">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Salvar
          </button>
          <button className="btn btn-ghost" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
