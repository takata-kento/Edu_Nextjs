"use server"

import { revalidateTag } from "next/cache"

export async function revalidateTagAction() {
    revalidateTag("date")
}
