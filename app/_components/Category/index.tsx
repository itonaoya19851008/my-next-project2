import { FC } from "react";
import styles from "./index.module.scss";
import { Category } from "@/app/_libs/microcms";

type Props = {
    category: Category;
};

export const Cate:FC<Props> = (props) => {
    const { category } = props;
    return (
        <span className={styles.tag}>
            {category.name}
        </span>
    )
}