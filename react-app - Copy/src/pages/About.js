import './About.css';

const team = [
  { name: 'Alex Chen', role: 'Frontend Developer', avatar: 'AC' },
  { name: 'Maria Santos', role: 'UI/UX Designer', avatar: 'MS' },
  { name: 'Jordan Kim', role: 'Full-Stack Engineer', avatar: 'JK' },
];

const timeline = [
  { year: '2022', event: 'Project started with a simple idea' },
  { year: '2023', event: 'Team grew and first version shipped' },
  { year: '2024', event: 'Open-sourced and community joined' },
  { year: '2025', event: 'Rebuilt with React 18 & modern tooling' },
];

export default function About() {
  return (
    <div className="about page-enter">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-inner">
          <span className="page-tag">About</span>
          <h1 className="page-title">Who we are &amp; <br />what we build</h1>
          <p className="page-subtitle">
            We're a small, focused team passionate about building interfaces that
            feel fast, intuitive, and genuinely delightful to use.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="about-inner">
          <div className="about-text-block">
            <h2 className="about-heading">Our Mission</h2>
            <p>
              We believe every web application should feel as fast and seamless
              as a native app. That's why we embrace modern tools like React Router
              for client-side navigation, giving users instant page transitions
              without a single full reload.
            </p>
            <p>
              Good software is invisible. When it works perfectly, users don't
              notice the technology — they just accomplish their goals. That's
              the bar we set for every project we ship.
            </p>
          </div>

          <div className="stats-grid">
            {[
              { value: '3+', label: 'Years Building' },
              { value: '12k', label: 'Lines of Code' },
              { value: '99%', label: 'Uptime' },
              { value: '∞', label: 'Coffee Consumed' },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="about-inner">
          <h2 className="about-heading">Our Journey</h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-event">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="about-inner">
          <h2 className="about-heading">The Team</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-avatar">{member.avatar}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
