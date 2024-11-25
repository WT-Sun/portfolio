import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} bg-black text-gray-200 min-h-screen flex flex-col`}
    >
      {/* Navigation */}
      <header className="w-full sticky top-0 bg-gray-900 shadow-md z-10 py-4">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-blue-400">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-300">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-300">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-300">Skills</a>
            </li>
            <li>
              <a href="#timeline" className="hover:text-blue-300">Timeline</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-300">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-6 transform transition-transform duration-500 hover:scale-105">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg">
            Discover my journey, projects, and skills in software development.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto my-16 px-6">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
        <p className="text-lg leading-8 mb-4">
          I&apos;m <strong>Wentao Sun</strong>, a passionate software developer specializing in full-stack web and mobile application development. I enjoy solving complex problems and building scalable, efficient solutions. Currently pursuing a Computer Science degree at LaSalle College (2022-2025), I aspire to contribute to dynamic and innovative teams.
        </p>
        <p className="text-lg leading-8 mb-4">
          Outside of coding, I have a deep interest in artificial intelligence, open-source contributions, and mentoring aspiring developers. When not working, I enjoy reading tech blogs and exploring creative design.
        </p>
        <p className="text-lg">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/wentao-sun-464324233"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline"
          >
            linkedin.com/in/wentao-sun-464324233
          </a>
        </p>
      </section>
      {/* Skills Section */}
      <section id="skills" className="w-full bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Programming Languages</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Java</li>
                <li>Python</li>
                <li>Swift</li>
                <li>C#</li>
                <li>JavaScript</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Web Development</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>JQuery</li>
                <li>PHP</li>
                <li>Django (Web Framework)</li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Mobile Development</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Android (Java, Kotlin)</li>
                <li>iOS (Swift)</li>
              </ul>
            </div>

            {/* Database Management */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Database Management</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>SQL</li>
                <li>MySQL</li>
                <li>SQLite</li>
              </ul>
            </div>

            {/* Tools & Frameworks */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Tools & Frameworks</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Android Studio</li>
                <li>Xcode</li>
                <li>Git, GitHub</li>
              </ul>
            </div>

            {/* Operating Systems */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Operating Systems</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Windows</li>
                <li>macOS</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-400 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Library Book Management System</h3>
              <p className="text-sm mb-4">
                A robust application for managing library operations, supporting book search, lending, and inventory management.
              </p>
              <a
                href="https://github.com/WT-Sun/library-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Student Management System</h3>
              <p className="text-sm mb-4">
                A system to efficiently manage student records, featuring CRUD operations and search capabilities.
              </p>
              <a
                href="https://github.com/WT-Sun/student-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section id="timeline" className="container mx-auto my-16 px-6">
        <h2 className="text-4xl font-bold text-indigo-400 mb-8">Timeline</h2>
        <div className="border-l-2 border-blue-300 pl-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold">2022-2025</h3>
            <p className="text-sm">Pursuing a Computer Science degree at LaSalle College.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">2019 - 2021</h3>
            <p className="text-sm">Work in family company in China.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">2020</h3>
            <p className="text-sm">Work in Nokia.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-400 mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-gray-700 p-6 rounded-lg">
              <p className="text-lg italic">&quot;Wentao is a dedicated developer with a great sense of responsibility and attention to detail.&quot;</p>
              <cite className="block mt-4 text-sm">- John Doe, Mentor</cite>
            </blockquote>
            <blockquote className="bg-gray-700 p-6 rounded-lg">
              <p className="text-lg italic">&quot;His projects demonstrate creativity and technical expertise, making him a valuable team member.&quot;</p>
              <cite className="block mt-4 text-sm">- Jane Smith, Colleague</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-8">Contact Me</h2>
          <p>Email: <a href="mailto:jacob.wtsun@gmail.com" className="text-blue-300 underline">jacob.wtsun@gmail.com</a></p>
          <p>Phone: <a href="tel:438-462-0099" className="text-blue-300 underline">438-462-0099</a></p>
          <a
            href="/CV.docx"
            download
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Download My CV
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-4">
        <p className="text-center">&copy; 2024 Wentao Sun. All Rights Reserved.</p>
      </footer>

    </div>

  );
}


