import styles from "./index.module.scss";
import Image from "next/image";
import { FC } from "react";
import { formatDate } from "@/app/_libs/utils";
type Props = {
    date:string;
}
export const Date:FC<Props> = (props) => {
    const {date} = props;
    return (
        <span className={styles.date}>
            <Image
                src="/clock.svg"
                alt=""
                width={16}
                height={16}
                priority
            />
            {formatDate(date)}
        </span>
    )
}