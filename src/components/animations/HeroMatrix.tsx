const symbols = "アイウエオカキクケコサシスセソ0123456789<>◇{}";

export default function HeroMatrix() {
  return (
    <div className="hero-matrix" aria-hidden="true">
      {Array.from({ length: 24 }, (_, column) => (
        <span className="hero-matrix-stream" key={column}>
          {Array.from({ length: 22 }, (_, row) => (
            <span key={row}>{symbols[(column * 7 + row * 11) % symbols.length]}</span>
          ))}
        </span>
      ))}
    </div>
  );
}