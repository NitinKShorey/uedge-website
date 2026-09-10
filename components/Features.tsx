import styles from "./Features.module.css";

const features = [
  {
    title: "AI-Agent",
    description:
      "Context-aware virtual assistants that think, learn, and act.",
  },
  {
    title: "Chatbot",
    description:
      "Smart chatbots for instant, human-like conversations across platforms.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks with AI-driven logic and triggers.",
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Best Innovative Solution for Modern Businesses
        </h2>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
