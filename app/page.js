import Container from "@/components/Container";
import HomeNav from "@/components/HomeNav";
import Image from "next/image";
import styles from '../components/Container.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeNav />
    </div>
  );
}
