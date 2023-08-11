export default function Image({ src, alt }: { src: string; alt: string }) {
  return <img className="w-full" src={src} alt={alt} />
}
