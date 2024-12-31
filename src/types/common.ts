import { CSSProperties, ReactNode } from "react"

export type ComponentType = {
    children?: ReactNode
    className?: string
    style?: CSSProperties
}