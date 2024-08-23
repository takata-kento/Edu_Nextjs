import Head from "next/head";

// 以下のRoute Segment Configを設定すると設定秒数以降に再アクセスしたときに再生成される
// デフォルトはfalse(=再生成しない)
export const revalidate = 5

export default function Page() {
    const timestamp = new Date().toLocaleString()
    console.log(`revalidate at ${timestamp}`)

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="../favicon.ico" />
            </Head>
            <main>
                <p>{`このページに${ revalidate }秒後再接続すると以下の時間が更新されます`}</p>
                <p>{ timestamp }</p>
            </main>
        </div>
    )
}
