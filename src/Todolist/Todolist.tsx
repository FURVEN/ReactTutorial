interface Todo {
  todoText: string;
  isCompleted: boolean;
}

export function Todolist() {
  const todoList: Todo[] = [
    { todoText: "밥 먹기", isCompleted: false },
    { todoText: "치과 가기", isCompleted: true },
    { todoText: "코딩 하기", isCompleted: false },
  ];

  // 1. todoList 입력을 받아서 추가할 수 있게
  // 2. Complete Click을 해서 완료할 수 있게
  return (
    <main className="container">
      <h1>해야할 일</h1>
      <div>
        <ul>
          {todoList.map((todo, index) => (
            <li
              style={{
                textDecoration: todo.isCompleted ? "Line=through" : "none",
              }}
            >
              {todo.todoText}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
