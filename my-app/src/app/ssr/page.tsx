import Head from 'next/head'

export default async function Page( { searchParams }: { searchParams: { [key: string]: string | string[] | undefined } } ) {
    const timestamp = new Date().toLocaleString()
    const message = `This page was generated at ${timestamp}`
    console.log(message)

    const query = searchParams.query

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="../favicon.ico" />
            </Head>
            <main>
                <p>このページはサーバーサイドレンダリングによってリクエスト時に生成されたページです</p>
                <p>{`${timestamp}に作成されたページです`}</p>
                <p>{`クエリパラメータは${query}でした`}</p>
            </main>
        </div>
    )
}
