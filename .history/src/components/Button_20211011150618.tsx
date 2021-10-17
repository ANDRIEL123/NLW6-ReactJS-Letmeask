import { ButtonHTMLAttributes } from "react"

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="button" {...props}>

        </button>
    )
}
