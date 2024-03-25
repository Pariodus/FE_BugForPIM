import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import DetailCard from "@/components/DetailCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <DetailCard/>
    </main>
  );
}