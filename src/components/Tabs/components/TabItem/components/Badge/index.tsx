import styles from "./Badge.module.scss";

export default function Badge({
  label,
  variant = "NEUTRAL",
}: {
  label: string;
  variant?: "NEUTRAL" | "POSITIVE" | "NEGATIVE";
}) {
  const className = [
    styles.Badge,
    styles[`Badge--${variant.toLowerCase()}`],
  ].join(" ");

  return (
    <div data-testid="badge" className={className}>
      {label}
    </div>
  );
}
