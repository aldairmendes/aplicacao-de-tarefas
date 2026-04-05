import React from "react";
import { useTaskContext } from "../context/TaskContext";

const PRIORITY_LABELS = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
  urgent: "Urgente",
};

function TaskCard({ task, onEdit }) {
  const { removeTask, toggleTask } = useTaskContext();

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
  }

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <button
        className={`task-checkbox ${task.completed ? "checked" : ""}`}
        onClick={() => toggleTask(task.id)}
        title={
          task.completed ? "Marcar como pendente" : "Marcar como concluída"
        }
      />
      <div className="task-body">
        <div className="task-title">{task.title}</div>
        {task.description && (
          <div className="task-desc">{task.description}</div>
        )}
        <div className="task-meta">
          <span className={`priority-badge priority-${task.priority}`}>
            {PRIORITY_LABELS[task.priority]}
          </span>
          <span className="task-date">{formatDate(task.createdAt)}</span>
        </div>
      </div>
      <div className="task-actions">
        <button
          className="icon-btn"
          onClick={() => onEdit(task)}
          title="Editar"
        >
          ✎
        </button>
        <button
          className="icon-btn danger"
          onClick={() => removeTask(task.id)}
          title="Excluir"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
