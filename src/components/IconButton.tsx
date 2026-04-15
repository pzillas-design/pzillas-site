interface IconButtonProps {
  variant: "arrow-left" | "arrow-right" | "play";
  onClick?: () => void;
  className?: string;
}

export default function IconButton({ variant, onClick, className = "" }: IconButtonProps) {
  const baseClass =
    "flex items-center justify-center transition-colors cursor-pointer";

  if (variant === "play") {
    return (
      <button
        onClick={onClick}
        className={`w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 ${baseClass} ${className}`}
        aria-label="Abspielen"
      >
        <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[24px] border-l-white ml-1" />
      </button>
    );
  }

  const isLeft = variant === "arrow-left";
  return (
    <button
      onClick={onClick}
      className={`w-14 h-14 rounded-full border border-white/30 hover:bg-white/10 ${baseClass} ${className}`}
      aria-label={isLeft ? "Zurück" : "Weiter"}
    >
      <span className="text-white text-2xl leading-none">
        {isLeft ? "\u2039" : "\u203A"}
      </span>
    </button>
  );
}
