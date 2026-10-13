import styles from "./Badge.module.scss";

export default function Badge({
  label,
  variant = "NEUTRAL",
}: {
  label: string;
  variant: "NEUTRAL" | "POSITIVE" | "NEGATIVE" | undefined;
}) {
  const className = [
    styles.Badge,
    styles[`Badge--${variant.toLowerCase()}`],
  ].join(" ");

  return <div className={className}>{label}</div>;
}
