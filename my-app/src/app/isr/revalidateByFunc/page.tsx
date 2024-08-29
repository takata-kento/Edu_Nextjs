import Head from "next/head";
import RevalidatePath from "../../../components/RevalidatePath";
import RevalidateTag from "../../../components/RevalidateTag";
import { revalidatePath, revalidateTag } from "next/cache";

export default async function Page() {

    async function timeWorldApi() {
        const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo")
        return res.json()
    }
    async function timeApi() {
        const res = await fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo", { next: { tags: ["date"] } })
        return res.json()
    }
    const resWorldTime = await timeWorldApi()
    const resTime = await timeApi()

    const datetime = new Date().toLocaleString()
    console.log(`/isr/revalidateByFuncページのビルドが実行されました : ${datetime}`)

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="../favicon.ico" />
            </Head>
            <main>
                {/* <p>こちらは通常のfetchです</p> */}
                {/* <p>{ resWorldTime.datetime }</p> */}
                <p>こちらはdateタグのついたfetchです</p>
                <p>{ resTime.dateTime }</p>
                <br />
                <RevalidatePath />
                <br />
                <br />
                <RevalidateTag />
            </main>
        </div>
    )

    // const timeWorldApi = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    // const timeApi = await fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo", { next: { tags: ["date"] } })
    // const resWorldTime = await timeWorldApi.json()
    // const resTime = await timeApi.json()

    // async function revalidate() {
    //     "use server"
    //     revalidatePath("/isr/revalidateByFunc")
    // }

    // async function revalidatetag() {
    //     "use server"
    //     revalidateTag("date")
    // }

    // return (
    //     <div>
    //         <Head>
    //             <title>Create Next App</title>
    //             <link rel="icon" href="../favicon.ico" />
    //         </Head>
    //         <main>
    //             <p>こちらは通常のfetchです</p>
    //             <p>{ resWorldTime.datetime }</p>
    //             <p>こちらはタグを作成したfetchです</p>
    //             <p>{ resTime.dateTime }</p>
    //             <br />
    //             <form action={revalidate}>
    //                 <button type="submit">RevalidatePath</button>
    //             </form>
    //             <br />
    //             <br />
    //             <form action={revalidatetag}>
    //                 <button type="submit">RevalidateTag</button>
    //             </form>
    //         </main>
    //     </div>
    // )
}
