/**
 * fancy pretty button!!!
 */

import Link from "next/link";
import styles from "@/app/homepage.module.css";

export default function GetStartedButton(params: { href: string }) {
    return (
        <Link href={params.href} className={styles.getStartedButton}>
            LEARN MORE
        </Link>
    );
}
