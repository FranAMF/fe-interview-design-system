import { TabsItems } from "../../types";
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
    <button type="button" onClick={onClick} className={className}>
      {label}
      {style === "UNDERLINE" && (
        <span className={styles.underline} aria-hidden="true" />
      )}
    </button>
  );
}
