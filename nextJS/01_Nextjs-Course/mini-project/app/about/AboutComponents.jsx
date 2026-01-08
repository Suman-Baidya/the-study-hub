export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About <span className="text-blue-600">MyWebsite</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Created with passion and dedication by <span className="font-semibold">Suman</span>
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              MyWebsite was built to make technology more accessible, practical, and inspiring.
              We believe in combining creativity with usability, ensuring that every visitor
              finds value and clarity in what we share.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to empower learners, creators, and innovators by providing resources,
              tutorials, and insights that bridge the gap between complex technology and
              everyday usability.
            </p>
          </div>

          {/* Right side: image placeholder */}
          <div className="flex justify-center">
            <div className="w-full h-64 md:h-80 bg-blue-100 rounded-lg flex items-center justify-center shadow">
              <span className="text-blue-600 font-bold text-xl">MyWebsite Logo / Image</span>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800">Join Us</h3>
          <p className="mt-2 text-gray-600">
            Explore our content, share your ideas, and grow with us. Together, we can make
            technology simple and impactful.
          </p>
        </div>
      </section>
    </main>
  );
}