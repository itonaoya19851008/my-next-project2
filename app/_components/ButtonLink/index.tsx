import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
    href:string;
    children:React.ReactNode;
}
export const ButtonLink:FC<Props> = (props) =>{
    const {href,children} = props;
    return(
        <a href={href} className={styles.button}>
            {children}
        </a>
    )
}