import styles from "../styles/Home.module.css";
import HeadFunction from "../components/HeadFunction";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <HeadFunction title="Home" />
    </div>
  );
}
