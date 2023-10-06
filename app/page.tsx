const Home = () => {
  return (
    <section>
      <div className="p-4 border rounded-sm bg-gray-50">
        <h1 className="font-extrabold text-2xl">Hi, rasyidcode here👋</h1>
        <p className="text-justify mt-4">I love learning a new things, my goal right now is to build both web and mobile apps as much as I can
          with the very recent technology. I've tried many different programming language and frameworks but now I
          decided to only focus on Next.js to build web app and Kotlin Jetpack Compose for mobile. I will share my
          learning progress in this GitHub Pages, also this site is one of my Next.js practice.
        </p>
      </div>

      <div className="p-4 border rounded-sm bg-gray-50 mt-5">
        <h1 className="font-extrabold text-2xl">Practice Projects</h1>

        <div className="grid">
          <div className="mt-4 flex gap-3 items-start justify-start">
            <div className="h-20 w-36 bg-gray-300"></div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-medium">Project A</h3>
              <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="mt-4 flex gap-3 items-start justify-start">
            <div className="h-20 w-36 bg-gray-300"></div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-medium">Project B</h3>
              <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="mt-4 flex gap-3 items-start justify-start">
            <div className="h-20 w-36 bg-gray-300"></div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-medium">Project C</h3>
              <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="mt-4 flex gap-3 items-start justify-start">
            <div className="h-20 w-36 bg-gray-300"></div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-medium">Project D</h3>
              <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border rounded-sm bg-gray-50 mt-5">
        <h1 className="font-extrabold text-2xl">Recent Github Activity</h1>
        <p className="mt-2">No content right now.</p>
      </div>

      <div className="p-4 border rounded-sm bg-gray-50 mt-5">
        <p>Built with Next.js</p>
      </div>
    </section>
  )
}

export default Home