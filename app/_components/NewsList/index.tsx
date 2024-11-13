import Image from "next/image";
import styles from "./index.module.scss";
import { FC } from "react";

import { News } from "@/app/_libs/microcms";
import { Cate } from "../Category";
import { Date } from "../Date";

type Props = {
    news: News[];
};
import Link from "next/link";
export const NewsList:FC<Props> = (props)=>{
    const {news} = props;
    if(news.length === 0){
        return <p>記事がありません。</p>
    };
    return(
        <ul>
        {news.map((article)=>(
            <li className={styles.list} key={article.id}>
              <Link href={`/news/${article.id}`} className={styles.link}>
               {article.thumbnail ?(
                <Image
                src={article.thumbnail.url}
                alt=""
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
                />
               ):(
                <Image
                src='/no-image.png'
                alt=""
                className={styles.image}
                width={1200}
                height={630}
                />
               )}
                <dl className={styles.content}>
                  <dt className="title">
                    {article.title}
                  </dt>
                  <dd className={styles.meta}>
                    <Cate category={article.category}/>
                    <Date date={article.publishedAt}/>
                  </dd>
                </dl>
              </Link>
            </li>
          ))}
        </ul>
    )
}