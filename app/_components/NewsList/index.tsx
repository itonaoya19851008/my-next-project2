import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { FC } from "react";

import { News } from "@/app/_libs/microcms";
import { Cate } from "../Category";
import { Date } from "../Date";

type Props = {
    news: News[];
};

export const NewsList:FC<Props> = (props)=>{
    const {news} = props;
    if(news.length === 0){
        return <p>記事がありません。</p>
    };
    return(
        <ul>
        {news.map((article)=>(
            <li className={styles.list} key={article.id}>
              <Link href={`news/${article.id}`}
              className={styles.link}
              >
                <div className={styles.link}>
                  <Image
                  className={styles.image}
                  alt=""
                  src="/no-image.png"
                  width={1200}
                  height={630}
                  />
                  <dl className={styles.content}>
                    <dt className="title">
                      {article.title}
                    </dt>
                    <dd className={styles.meta}>
                      <Cate category={article.category}/>
                      <Date date={article.publishedAt}/>
                    </dd>
                  </dl>
                </div>
              </Link>
            </li>
          ))}
        </ul>
    )
}