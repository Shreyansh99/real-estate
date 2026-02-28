import { teamMembers } from "../../lib/about";
import FeaturedMember from "./FeaturedMember";
import TeamMemberCard from "./TeamMemberCard";
import styles from "./TeamSection.module.css";

export default function TeamSection() {
  const featured = teamMembers.find((m) => m.featured);
  const agents = teamMembers.filter((m) => !m.featured);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <h1 className={styles.title}>Our team</h1>
        </div>

        {/* Featured member - full width */}
        {featured && <FeaturedMember member={featured} />}

        {/* Agent grid */}
        <div className={styles.agentGrid}>
          {agents.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
