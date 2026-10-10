type TabsItems = {
  key: string;
  label: string;
  variant: "PILL" | "UNDERLINE";
  children: React.ReactNode;
  badge?: {
    label: string;
    variant?: "NEUTRAL" | "POSITIVE" | "NEGATIVE";
  };
};

export type TabsProps = {
  items: TabsItems[];
  defaultActiveKey?: string;
};
