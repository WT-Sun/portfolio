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
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[auto_auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      {/* About Section */}
      <section className="w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg leading-8">
          My name is <strong>Wentao Sun</strong>, a motivated software developer proficient in
          Java, Python, Swift, C#, and JavaScript. My expertise spans web
          and mobile application development, database management, and
          full-stack tasks. I am currently pursuing a Computer Science degree
          at LaSalle College (2022-2025) and seeking an opportunity to contribute
          to a dynamic development team.
        </p>
        <p className="mt-4">
          <a href="https://www.linkedin.com/in/wentao-sun-464324233" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            LinkedIn
          </a> |
          <a href="https://github.com/WT-Sun" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">
            GitHub
          </a>
        </p>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
        <ul className="list-inside list-disc space-y-4">
          <li>
            <strong>Library Book Management System:</strong> A Java and SQLite-based system for efficient library book management.
          </li>
          <li>
            <strong>Student Management System:</strong> A Java and database-backed tool for adding, updating, and managing student information for colleges.
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Programming Languages: Java, Python, Swift, C#, JavaScript</li>
          <li>Web Development: HTML, CSS, JavaScript, JQuery, PHP</li>
          <li>Web Frameworks: Django</li>
          <li>Mobile Development: Android (Java, Kotlin), iOS (Swift)</li>
          <li>Database Management: SQL, MySQL, SQLite</li>
          <li>Tools & Frameworks: Android Studio, Xcode, Git, GitHub</li>
        </ul>
      </section>

      {/* Contact Section */}
      <footer className="row-start-4 w-full text-center mt-8">
        <h3 className="text-xl font-bold mb-4">Contact Me</h3>
        <p>
          Email: <a href="mailto:jacob.wtsun@gmail.com" className="text-blue-500 underline">jacob.wtsun@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:438-462-0099" className="text-blue-500 underline">438-462-0099</a>
        </p>
        <a
          href="/CV.docx"
          download
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Download My CV
        </a>
      </footer>
    </div>
  );
}
