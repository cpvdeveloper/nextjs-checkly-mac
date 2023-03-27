/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          <div className={inter.className}>X</div>
          <Image
            src="https://app.checklyhq.com/static/images/racoon_logo.svg"
            alt="Checkly Logo"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
      <div className={styles.statuses}>
        <img
          alt="Checkly Homepage Status Check"
          // This URL can be found in the Checkly Dashboard under "Create Status Badge" on the Homepage browser check
          src="https://api.checklyhq.com/v1/badges/checks/52f6180f-2631-40c8-9cf6-113382609f22?style=for-the-badge&theme=default"
        />
        <img
          alt="Checkly API Check Status"
          // This URL can be found in the Checkly Dashboard under "Create Status Badge" on the Hello API check
          src="https://api.checklyhq.com/v1/badges/checks/955a97c3-9f10-4ce6-9836-9011e9e0f9ee?style=for-the-badge&theme=default&responseTime=true"
        />
      </div>
    </main>
  );
}
