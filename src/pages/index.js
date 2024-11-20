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
      className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center`}
    >
      {/* Navigation */}
      <header className="w-full bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">
            Discover my skills, projects, and passion for software development.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto my-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg leading-8">
          I'm <strong>Wentao Sun</strong>, a software developer with expertise in web and mobile
          application development, proficient in technologies like Java, Python, Swift, and JavaScript. I
          aim to bring impactful solutions to dynamic teams.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Library Book Management System</h3>
              <p className="text-sm text-gray-600">
                A Java and SQLite-based system for efficient library book management.
              </p>
              <a
                href="https://github.com/WT-Sun/library-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
              >
                View on GitHub
              </a>
            </div>
            {/* Project 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Student Management System</h3>
              <p className="text-sm text-gray-600">
                A Java-based platform for managing student information efficiently.
              </p>
              <a
                href="https://github.com/WT-Sun/student-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 inline-block"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto my-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <ul className="text-lg space-y-4">
          <li><strong>Programming:</strong> Java, Python, Swift, C#, JavaScript</li>
          <li><strong>Web Development:</strong> HTML, CSS, JavaScript, JQuery, PHP</li>
          <li><strong>Mobile Development:</strong> Android (Java, Kotlin), iOS (Swift)</li>
          <li><strong>Database:</strong> SQL, MySQL, SQLite</li>
          <li><strong>Tools:</strong> Git, GitHub, Android Studio, Xcode</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p>Email: <a href="mailto:jacob.wtsun@gmail.com" className="text-blue-500 underline">jacob.wtsun@gmail.com</a></p>
          <p>Phone: <a href="tel:438-462-0099" className="text-blue-500 underline">438-462-0099</a></p>
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
      <footer className="w-full bg-gray-800 text-white py-4">
        <p className="text-center">&copy; 2024 Wentao Sun. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
