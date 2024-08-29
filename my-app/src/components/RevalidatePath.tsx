"use client"

import { revalidatePathAction } from "./revalPathAction"

export default function RevalidatePath() {
    return (
        <button onClick={ async () => await revalidatePathAction() }>RevalidatePath</button>
    )
}
