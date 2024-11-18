import Article from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import styles from "./index.module.scss"
import { ButtonLink } from "@/app/_components/ButtonLink";
type Props = {
    params:{
        slug:string;
    };
    searchParams:{
        dk:string;
    }
};

export default async function Page({params,searchParams}:Props){
    const data = await getNewsDetail(params.slug,{
        draftKey:searchParams.dk,
    }).catch(notFound);
    return(
       <>
       <Article
       data={data}
       />
       <div className={styles.footer}>
            <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
       </div>
       </>
    )
}