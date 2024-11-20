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
      className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-t from-gray-100 to-white text-gray-800 min-h-screen flex flex-col`}
    >
      {/* Navigation */}
      <header className="w-full sticky top-0 bg-white shadow-md z-10 py-4">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
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
      <section className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-6 transform transition-transform duration-500 hover:scale-105">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg">
            Discover my skills, projects, and passion for software development.
          </p>
        </div>
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto my-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">About Me</h2>
        <p className="text-lg leading-8">
          I&apos;m <strong>Wentao Sun</strong>, a software developer with expertise in web and mobile
          application development, proficient in technologies like Java, Python, Swift, and JavaScript. I
          aim to bring impactful solutions to dynamic teams.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Library Book Management System</h3>
              <p className="text-sm text-gray-600 mb-4">
                A feature-rich application for managing library operations. It allows users to search for books, check availability, and track lending history. Admins can manage the inventory, add or remove books, and monitor user activities.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Key Features:</strong>
                <ul className="list-disc list-inside">
                  <li>Search and filter books by title, author, or category.</li>
                  <li>Track lending and return dates with user history.</li>
                  <li>Admin dashboard for managing inventory and user accounts.</li>
                </ul>
              </p>
              <p className="text-sm text-gray-500">
                <strong>Technologies:</strong> Java, SQLite, Swing, MVC Architecture
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
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Student Management System</h3>
              <p className="text-sm text-gray-600 mb-4">
                A comprehensive platform for managing student information in educational institutions. It enables administrators to add, update, delete, and retrieve student details efficiently.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Key Features:</strong>
                <ul className="list-disc list-inside">
                  <li>CRUD operations for student records.</li>
                  <li>Search and filter functionality for quick data retrieval.</li>
                  <li>User-friendly interface for data entry and editing.</li>
                </ul>
              </p>
              <p className="text-sm text-gray-500">
                <strong>Technologies:</strong> Java, MySQL, JavaFX, JDBC
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
        <h2 className="text-3xl font-bold mb-8 text-indigo-600">Skills</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Contact Me</h2>
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
