import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage() {
  const int = Math.floor(Math.random() * 10);

  const [likes, setLikes] = useState(0);

  const names = ['Ryan', 'Alan', 'Katie'];

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="I love Next.js alot!" />

      <h2>Random Integer: {int}</h2>

      <ul>
        {names.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>

      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}
