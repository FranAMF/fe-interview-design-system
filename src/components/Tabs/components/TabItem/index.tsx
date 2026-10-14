import { TabsItems } from "../../types";
import Badge from "./components/Badge";
import styles from "./TabItem.module.scss";

type TabItemProps = Pick<TabsItems, "label" | "badge"> & {
  selected: boolean;
  onClick: () => void;
  style: "PILL" | "UNDERLINE";
};

export default function TabItem({
  label,
  badge,
  selected,
  style,
  onClick,
}: TabItemProps) {
  const className = [
    styles.TabItem,
    styles[`TabItem--${style.toLowerCase()}`],
    selected && styles.selected,
  ].join(" ");

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onClick}
      className={className}
    >
      <div>
        {label}
        {style === "UNDERLINE" && (
          <span className={styles.underline} aria-hidden="true" />
        )}
      </div>
      {badge && <Badge label={badge.label} variant={badge.variant} />}
    </button>
  );
}
