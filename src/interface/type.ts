export type Priority = "high" | "medium" | "low";

export interface Itask {
  id: string;
  name: string;
  title: string;
  description: string;
  dueDate: string;
  iscompleted: boolean;
  priority: Priority;
  assignto: string | null;
}

export interface Iuser {
  name: string;
  id: string;
}
