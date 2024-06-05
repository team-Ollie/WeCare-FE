import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  return <div>{children}</div>;
}
