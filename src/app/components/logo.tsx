export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? ""}
      // tight bbox around the existing paths (x:40-160, y:110-250)
      viewBox="30 105 140 150"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 130 L90 180 L110 180 L100 230"
        stroke="#00d9ff"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M100 230 L135 230 L160 110 L40 110 L65 250 L140 250"
        stroke="#00d9ff"
        strokeWidth="10"
        fill="none"
      />
    </svg>
  );
}
