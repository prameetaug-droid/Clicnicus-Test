export default function BlurGradient({
  className = "",
}: {
  className?: string;
}) {
  return <div className={`blur-gradient absolute ${className}`} aria-hidden />;
}
