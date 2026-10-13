import { TabsProps } from "./types";
import styles from "./Tabs.module.scss";
import { useState } from "react";
import TabItem from "./components/TabItem";

export default function Tabs({ defaultActiveKey, items, variant }: TabsProps) {
  const [selected, setSelected] = useState<string>(defaultActiveKey);

  const handleSelectTab = (key: string) => {
    setSelected(key);
  };

  const className = [
    styles.Tabs,
    styles[`Tabs--${variant.toLowerCase()}`],
  ].join(" ");

  const activeItem = items.find((item) => item.key === selected);
  return (
    <div className={styles.MainContainer}>
      <div className={className}>
        {" "}
        {items.map((item, index) => {
          return (
            <TabItem
              key={index.toString()}
              style={variant}
              label={item.label}
              badge={item.badge}
              selected={selected === item.key}
              onClick={() => handleSelectTab(item.key)}
            />
          );
        })}
      </div>
      <div>{activeItem?.children}</div>
    </div>
  );
}
