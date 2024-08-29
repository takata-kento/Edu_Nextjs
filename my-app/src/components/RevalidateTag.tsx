// "use client"

import { revalidateTagAction } from "./revalTagAction"
import { revalidateTag } from "next/cache"

export default function RevalidateTag() {
    async function action() {
        "use server"
        revalidateTag("layout")
    }

    return (
        // <form action={ async () => await revalidateTagAction() }>
        //     <button type="submit">RevalidateTag</button>
        // </form>
        <form action={ action }>
            <button type="submit">
                RevalidateTag
            </button>
        </form>
    )
}
