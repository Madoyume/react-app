import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickReturn } = props;

  return (
    <div className="complete-area">
      <p class="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => (
          <li key={index}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
