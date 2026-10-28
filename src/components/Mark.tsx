export function Mark({ size = 28, blink = false }: { size?: number; blink?: boolean }) {
  return (
    <svg
      className={`mark${blink ? " blink" : ""}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      aria-hidden="true"
      style={{ display: "block", flex: "none" }}
    >
      <polyline className="chev" points="30,36 56,60 30,84" fill="none" strokeWidth={10} strokeLinecap="square" />
      <rect className="cur" x={64} y={74} width={30} height={10} />
    </svg>
  );
}
