type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

      <p className="mt-4 text-sm font-medium text-gray-500">
        Technologies: {tech}
      </p>
    </div>
  );
}