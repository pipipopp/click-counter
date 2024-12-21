import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  
  const increase = () => setCount(count +1);
  const decrease = () => setCount(count -1);
  const rest = () => setCount(0);

  if (count < 0) {
    alert("эй! эй! в минус уходишь");
    rest();
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Лічильник кліків</h1>
      <p>Кількість кліків: {count}</p>
      <div>
        <button style={styles.button} onClick={increase}>Додати</button>
        <button style={styles.button} onClick={decrease}>Зменшити</button>
        <button style={styles.button} onClick={rest}>Скинути</button>
      </div>
    </div>
);
}
// Прості стилі
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  heading: {
    color: '#007bff'
  },
  counter:{
    fontSize: "24px",
    margin: "20px 0",
  },
  button:{
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    background: "#007bff",
    color: "#fff",
  }
}

export default App;