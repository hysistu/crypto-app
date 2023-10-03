export interface TaskboardItem {
  id: string;
  title: string;
  description: string;
  user: string;
}

export enum TaskboardItemStatus {
  TO_DO = "To Do",
  IN_PROGRESS = "In Progress",
  IN_REVIEW = "In Review",
  DONE = "Done",
}
