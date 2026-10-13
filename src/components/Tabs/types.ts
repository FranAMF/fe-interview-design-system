export type TabsItems = {
  key: string;
  label: string;
  children: React.ReactNode;
  badge?: {
    label: string;
    variant?: "NEUTRAL" | "POSITIVE" | "NEGATIVE";
  };
};

export type TabsProps = {
  items: TabsItems[];
  variant: "PILL" | "UNDERLINE";
  defaultActiveKey: string;
};
