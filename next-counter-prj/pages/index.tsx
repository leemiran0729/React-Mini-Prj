import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home = ({ cnt }: { cnt: number }) => {
  const [count, setCount] = useState(cnt);
  return (
    <div className={styles.container}>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev: number) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev: number) => prev - 1)}>-</button>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  let cnt: number = 0;

  return {
    props: {
      cnt,
    },
  };
}
