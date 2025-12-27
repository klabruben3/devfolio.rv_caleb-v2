export default function GridBackground() {
  return (
    <div className="absolute inset-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="project-grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeOpacity={0.1}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#project-grid)" />
      </svg>
    </div>
  );
}