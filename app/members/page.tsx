import Image from "next/image";
import styles from "./page.module.scss";
import { getMembersList } from "../_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../_constants";


export default async function Page(){
    const data = await getMembersList({limit:MEMBERS_LIST_LIMIT});
    return(
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>メンバーが登録されていません</p>
            ):(
                <ul>
                    {data.contents.map((member)=>(
                        <li className={styles.list} key={member.id}>
                            <Image
                            className={styles.image}
                            src={member.image.url}
                            alt=""
                            width={member.image.width}
                            height={member.image.height}
                            />
                            <dl>
                                <dt className={styles.name}>{member.name}</dt>
                                <dd className={styles.position}>{member.position}</dd>
                                <dd className={styles.profile}>{member.profile}</dd>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}