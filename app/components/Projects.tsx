import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.link && (
              <p>
                <a className="muted-link" href={p.link} target="_blank" rel="noreferrer">View</a>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
