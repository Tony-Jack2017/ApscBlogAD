import { FC } from "react"
import classNames from "classnames"

import { ComponentType } from "@/types/common"



interface ComIconItf extends ComponentType {
  shape?: "square" | "circle"
}

const ComIcon:FC<ComIconItf> = (props) => {

  const {
    shape = "circle",
    style,
    className,
    children
  } = props

  const innerClass = classNames(
    className,
    `icon-shape_${shape}`,
    "icon"
  )

  return (
    <div style={style} className={innerClass}>
      { children }
    </div>
  )
}


export default ComIcon