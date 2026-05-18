import { useState, useEffect } from 'react'
import './App.css'

const STORAGE_KEY = 'task-board-tasks'

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function getNextId(tasks) {
  return tasks.length === 0 ? 1 : Math.max(...tasks.map(t => t.id)) + 1
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    const text = inputValue.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: getNextId(prev), text, completed: false }])
    setInputValue('')
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="container">
      <h1>タスクボード</h1>

      <div className="input-row">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="タスクを入力してください"
        />
        <button onClick={addTask}>追加</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && (
          <li className="empty">タスクがありません</li>
        )}
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>削除</button>
          </li>
        ))}
      </ul>

      <p className="summary">
        {tasks.filter(t => t.completed).length} / {tasks.length} 件完了
      </p>
    </div>
  )
}
