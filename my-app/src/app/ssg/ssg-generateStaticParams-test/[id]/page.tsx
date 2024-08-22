import dynamic from "next/dynamic";
import Head from "next/head";
import { NextPage } from "next";

export function generateStaticParams() {
    return [
        {
            id: '1'
        },
        {
            id: '2'
        },
        {
            id: '3'
        }
    ]
}

// 以下のRoute Segment ConfigをfalseにするとgenerateStaticParamsで生成されなかった動的なSegmentにアクセスしたときに404を返すようになる
// デフォルトはtrue
// export const dynamicParams = false

// 以下はページアクセス時にレンダリングした時刻を表示する
// dynamicParamsがtrueの場合、idに1/2/3のいずれかとそれ以外で時刻が違うことがわかる
// 1or2or3はビルド時に静的にルートを生成していてそれ以外は動的に生成していることがわかる
export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const timestamp = new Date().toLocaleString()

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="../../favicon.ico" />
            </Head>
            <main>
                <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
                <p>{`/posts/${id}に対応するページです`}</p>
                <p>{`${timestamp}に作成されたページです`}</p>
            </main>
        </div>
    )
}

// type SSGProps = { params: { id: string } }

// const SSG: NextPage<SSGProps> = (prop) => {
//     const { params } = prop
//     const timestamp = new Date().toLocaleString()

//     return (
//         <div>
//             <Head>
//                 <title>Create Next App</title>
//                 <link rel="icon" href="../../favicon.ico" />
//             </Head>
//             <main>
//                 <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
//                 <p>{`/posts/${params.id}に対応するページです`}</p>
//                 <p>{`${timestamp}に作成されたページです`}</p>
//             </main>
//         </div>
//     )
// }

// export default SSG
