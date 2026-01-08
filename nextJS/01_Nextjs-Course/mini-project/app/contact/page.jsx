import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact <span className="text-blue-600">MyWebsite</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Created by <span className="font-semibold">Suman</span>
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <Phone className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-600">8944899747</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <Mail className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-600">sb.abcd321@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 px-4 py-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}