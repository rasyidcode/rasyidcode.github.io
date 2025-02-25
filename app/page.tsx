import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-purple-200">
        <audio src="/music.MP3" autoPlay></audio>
        <div className="flex gap-32">
          <Image
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnl0cDV5b3YzdDJzZjRuN20zYXF4d3NqeHNqZGdxMndidzA1NHRqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VXJWhaO7afRe/giphy.gif"
            alt="Saitama Ok"
            width={500}
            height={500} />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=_KFan5I-EATfSjR3&amp;controls=0&mute=1&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
      </div>
    </>
  )
}
