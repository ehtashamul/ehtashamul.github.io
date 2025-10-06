export default function Personal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold mb-8 text-gray-900">&not;Professional</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
            Meet Charlie
          </h2>
          <div className="flex flex-col md:flex-row-reverse md:items-start gap-6 mb-6">
            <div className="bg-gray-200 rounded overflow-hidden md:w-64 w-full flex items-center justify-center">
              <img
                src="./IMG_20231125_153158.jpg"
                alt="Cat"
                className="rounded w-full h-auto"
              />
            </div>
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed flex-1">
              <p className="mb-4">
                I am a big cat person and I share my home with this wonderful feline friend. Her name is Charlie. She is a rescue cat and she has been with me for around 3 years now. She doesn't really pose for photos and this is probably the best one I have of her. Unfortunately she has spinal deformity and has a weird gait, but she is otherwise perfectly healthy and happy.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
            My Hobbies & Interests
          </h2>
          <div className="space-y-6">
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed flex-1">
              <p>
                Aside from my work, I spend quite a lot of time on history and philosophy content. I am not much of a reader but I do enjoy listening to audiobooks and podcasts on these topics. Thanks to platforms like YouTube, accessing such material has become easier than ever. I also have an interest in music. Although I never learned music formally, I try covering easy songs on the guitar. I plan on learning music theory once I have settled down a bit.
              </p>

              <p>
                In my free time, I sometimes play video games. It not only helps me to unwind, but also helps me to stay connected with my friends who live overseas. I generally play <i>DotA2</i> and <i>CS2</i> with my friends. I also play single player games occasionally, with the last one being <i>Elden Ring</i> which I thoroughly enjoyed.
              </p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
