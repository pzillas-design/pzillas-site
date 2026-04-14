interface VideoEmbedProps {
  type: "youtube" | "vimeo";
  id: string;
  hash?: string;
  title: string;
}

export default function VideoEmbed({ type, id, hash, title }: VideoEmbedProps) {
  const src =
    type === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : `https://player.vimeo.com/video/${id}${hash ? `?h=${hash}&dnt=1` : "?dnt=1"}`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}
