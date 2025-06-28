type Priority = "high" | "medium" | "low";

export interface Itask {
  id: number;
  name: string;
  title: string; // Note: Did you mean "title" instead of "titel"?
  description: string;
  dueDate: string; // Consider using Date type if working with actual dates
  iscompleted: boolean;
  priority: Priority;
}
