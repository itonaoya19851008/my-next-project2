import { getNewsList, getCategoryDetail } from "@/app/_libs/microcms";
import { NewsList} from "@/app/_components/NewsList";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import { Cate } from "@/app/_components/Category";
type Props = {
    params:{
        id:string;
    }
}
export default async function Page({params}:Props){

    const category = await getCategoryDetail(params.id).catch(notFound);
    const {contents:news,totalCount} = await getNewsList({
        filters:`category[equals]${category.id}`,
        limit:NEWS_LIST_LIMIT,
    });
    return (
<>
<p><Cate category={category}/>の一覧</p>
<NewsList news={news}/>
<Pagination
totalCount={totalCount}
basePath={`news/category/${category.id}`}
/>
</>

    )
}