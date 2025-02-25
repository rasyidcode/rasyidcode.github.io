import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-purple-200">
        <div className="flex gap-32">
          <Image
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnl0cDV5b3YzdDJzZjRuN20zYXF4d3NqeHNqZGdxMndidzA1NHRqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VXJWhaO7afRe/giphy.gif"
            alt="Saitama Ok"
            width={500}
            height={500} />
          <div>
            <video loop autoPlay muted height="500" width="500">
              <source src="/never-gonna-give-up.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  )
}
