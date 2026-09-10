export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <h1 className="text-xl font-bold">
          Armaan
        </h1>

        <div className="flex gap-6">
          <a href="#home" className="hover:text-gray-500">
            Home
          </a>

          <a href="#about" className="hover:text-gray-500">
            About
          </a>

          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>

          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}