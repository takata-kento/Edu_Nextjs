/**
 * Next.js v13からSSGの生成にgetStaticPropsを使用することはできなくなった(廃止された)
 * 以下のコードはv13以降のサンプルコード
 */


import { NextPage, NextPageContext } from "next";
import Head from "next/head";

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
    const timestamp = new Date().toLocaleDateString()
    const message = `${ timestamp }にサーバーサイドでレンダリングが実行されました`
    console.log(message)
    return(
        <div>
            {/* Headコンポーネントで包むとその要素はheadタグに配置される}*/}
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="../../favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです
                </p>
                <p>
                    { message }
                </p>
            </main>
        </div>
    )
}

export default SSG
