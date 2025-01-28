import { CSSProperties, FC } from "react"

import "@/styles/component/animation/monster.scss"


interface MonsterItf {
  size?: number
  mainBg: CSSProperties["color"]
  mouthBg: CSSProperties["color"]
  eyeBg: CSSProperties["color"]
  eyeBallBg: CSSProperties["color"]
  delay: string
}

const Monster: FC<MonsterItf> = (props) => {

  const {
    size = 40,
    mainBg,
    mouthBg,
    eyeBg,
    eyeBallBg,
    delay
  } = props

  return (
    <div className="monster" style={{
      backgroundColor: mainBg,
      animationDelay: delay,
      width: size,
      height: size,
      margin: (size / 10),
      "--eyeBallBg": eyeBallBg,
      "--eyeRadius": `${(size / 10)}px`,
      "--jumpHeight": `-${(size * 50 / 100)}px`
    } as CSSProperties}>
      <div className="eye" style={{ backgroundColor: eyeBg }}>
        <div className="eyeball" style={{ backgroundColor: eyeBallBg, animationDelay: delay }}></div>
      </div>
      <div className="mouth" style={{ backgroundColor: mouthBg, borderRadius: (size * 12 / 100) }}></div>
    </div>
  )
}

export default Monster
