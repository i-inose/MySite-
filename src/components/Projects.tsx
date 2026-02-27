import { useMessages, useTranslations } from "next-intl";

interface ProjectMessage {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function Projects() {
  const t = useTranslations();
  const messages = useMessages();
  const projects = (messages.projects as { items: ProjectMessage[] }).items;

  return (
    <section id="projects" className="py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-8 flex items-center gap-2">
          <span className="w-8 h-px bg-accent"></span>
          {t("sections.projects")}
        </h2>
        <div className="space-y-4">
          {projects.map((project, i) => {
            const link = project.link;
            const Tag = link ? "a" : "div";
            const linkProps = link
              ? { href: link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Tag
                key={i}
                className="block bg-bg-card rounded-xl shadow-[0_1px_3px_var(--color-shadow)] p-6 hover:shadow-[0_4px_12px_var(--color-shadow-hover)] transition-all duration-300 group"
                {...linkProps}
              >
                <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {project.title}
                  {link && (
                    <span className="inline-block ml-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      &#8599;
                    </span>
                  )}
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-medium px-3 py-1 bg-accent-light text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
