import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        <section
          id="home"
          className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-20"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Armaan
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-600 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            I am a Computer Engineering student passionate about building
            modern, responsive, and user-friendly web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            I enjoy working with modern web technologies and continuously
            improving my development skills through practical projects.
          </p>
        </section>

        <section
  id="projects"
  className="mx-auto max-w-6xl px-6 py-20"
>
  <h2 className="text-3xl font-bold">Projects</h2>

  <p className="mt-4 text-gray-600">
    Here are some of the projects I have worked on.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    <ProjectCard
      title="Weather App"
      description="A web application that displays weather information using an API."
      tech="HTML, CSS, JavaScript"
    />

    <ProjectCard
  title="Skin Cancer Detection"
  description="A deep-learning based project for detecting and classifying skin lesions using image processing and machine learning techniques."
  tech="Python, Machine Learning, Deep Learning"
/>

    <ProjectCard
      title="Mental Health Check"
      description="A responsive web application designed to provide users with a simple mental health check experience."
      tech="React, Node.js, Express, MongoDB"
    />

    <ProjectCard
      title="Football Scouting Platform"
      description="A platform concept for discovering and showcasing football talent."
      tech="React, Node.js, MongoDB"
    />
  </div>
</section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4 text-gray-600">
            Feel free to get in touch with me.
          </p>
        </section>
      </main>
    </div>
  );
}