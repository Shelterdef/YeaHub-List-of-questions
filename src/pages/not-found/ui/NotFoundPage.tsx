// src\pages\not-found\ui\NotFoundPage.tsx
import { NavLink } from "react-router-dom";
import React from "react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="notFound">
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmVjbW4xMjZhdjVvdnFjNnRtaGp1M212Zzhnenlva2VndHgybnMxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9Igu4ToznVkDCtW0/giphy.gif"
        alt="GIF"
      />
      <h1>К сожалению, данной страницы не существует</h1>
      <p>Скорее всего вы сбились с пути и поэтому оказались здесь...</p>
      <NavLink to="/">
        <p className="linkNotFound">Перейти на главную страницу</p>
      </NavLink>
    </div>
  );
};
