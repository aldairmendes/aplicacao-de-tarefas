import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import EditModal from "../components/EditModal";

function Home() {
  const { filteredTasks, filter, setFilter, clearCompleted, stats } =
    useTaskContext();
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">
          Minhas <em>Tarefas</em>
        </h1>
        <p className="page-subtitle">
          {stats.active} pendente{stats.active !== 1 ? "s" : ""} ·{" "}
          {stats.completed} concluída{stats.completed !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">{stats.total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.active}</span>
          <span className="stat-label">Ativas</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.completed}</span>
          <span className="stat-label">Concluídas</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {stats.total > 0
              ? Math.round((stats.completed / stats.total) * 100)
              : 0}
            %
          </span>
          <span className="stat-label">Progresso</span>
        </div>
      </div>

      <div className="filter-bar">
        <div className="filter-tabs">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "all" ? "Todas" : f === "active" ? "Ativas" : "Concluídas"}
            </button>
          ))}
        </div>
        {stats.completed > 0 && (
          <button className="clear-btn" onClick={clearCompleted}>
            Limpar concluídas
          </button>
        )}
      </div>

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">◈</div>
            <p>
              {filter === "completed"
                ? "Nenhuma tarefa concluída ainda."
                : filter === "active"
                  ? "Sem tarefas pendentes. Ótimo trabalho!"
                  : "Sem tarefas. Adicione uma nova!"}
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} onEdit={setEditingTask} />
          ))
        )}
      </div>

      <Link to="/add-task" className="fab" title="Nova tarefa">
        +
      </Link>

      {editingTask && (
        <EditModal task={editingTask} onClose={() => setEditingTask(null)} />
      )}
    </div>
  );
}

export default Home;
