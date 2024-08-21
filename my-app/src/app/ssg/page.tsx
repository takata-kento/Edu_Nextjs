import { NextPage } from "next";
import Head from "next/head";

type SSGProps = {}

// SSG向けのページを実装
// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPageであることを明示
// NextPage<props>を省略する場合関数引数に明示的にオブジェクトの型定義を記述する必要がある
const SSG: NextPage<SSGProps> = () => {
    return(
        <div>
            {/* Headコンポーネントで包むとその要素はheadタグに配置される}*/}
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="../favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです
                </p>
            </main>
        </div>
    )
}

export default SSG
