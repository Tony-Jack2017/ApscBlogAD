import Monster from "@/components/animation/Monster";

export default function MainLoadingPage() {
  return (
    <div className="main-loaing-page" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Monster mainBg="#e9a801" mouthBg="#fff" eyeBg="#fff" eyeBallBg="black" delay="0s" />
        <Monster mainBg="#0C4475" mouthBg="#fff" eyeBg="#fff" eyeBallBg="#e55A54" delay="0.4s" />
        <Monster mainBg="#e55A54" mouthBg="#fff" eyeBg="#fff" eyeBallBg="#0C4475" delay="0.8s" />
        <Monster mainBg="black" mouthBg="#fff" eyeBg="#fff" eyeBallBg="#e9a801" delay="1.2s" />
      </div>
    </div>
  )
}
