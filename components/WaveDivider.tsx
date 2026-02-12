type WaveDividerProps = {
  flip?: boolean;
};

export function WaveDivider({ flip = false }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none h-14 overflow-hidden ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0,64 C160,20 320,20 480,56 C640,92 800,96 960,64 C1120,32 1280,20 1440,52 L1440,120 L0,120 Z"
          fill="#fef3ef"
        />
      </svg>
    </div>
  );
}
