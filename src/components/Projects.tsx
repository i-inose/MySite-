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
    <section id="projects" className="border-b border-border">
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className="text-xs font-medium uppercase tracking-widest text-text-tertiary mb-6">
          {t("sections.projects")}
        </h2>
        <div className="space-y-8">
          {projects.map((project, i) => {
            const link = project.link;
            const Tag = link ? "a" : "div";
            const linkProps = link
              ? { href: link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Tag key={i} className="block group" {...linkProps}>
                <h3 className="text-sm font-medium group-hover:text-text-secondary transition-colors">
                  {project.title}
                  {link && (
                    <span className="inline-block ml-1 text-text-tertiary">
                      &#8599;
                    </span>
                  )}
                </h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-0.5 bg-tag-bg text-tag-text rounded"
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
