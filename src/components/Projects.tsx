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
    <section id="projects" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-green mb-8">
          {t("sections.projects")}
        </h2>
        <div className="grid gap-4">
          {projects.map((project, i) => {
            const link = project.link;
            const Tag = link ? "a" : "div";
            const linkProps = link
              ? { href: link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Tag
                key={i}
                className="group border border-border rounded-2xl p-6 bg-bg-card hover:border-green/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-300"
                {...linkProps}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green shrink-0" />
                  <h3 className="text-base font-semibold group-hover:text-green transition-colors">
                    {project.title}
                    {link && (
                      <span className="inline-block ml-1.5 text-text-tertiary group-hover:text-green transition-colors">
                        &#8599;
                      </span>
                    )}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed ml-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 ml-5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-medium px-3 py-1 bg-tag-bg text-tag-text rounded-full"
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
