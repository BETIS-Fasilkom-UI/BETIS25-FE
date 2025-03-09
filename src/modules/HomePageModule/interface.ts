export type Status = 'Done' | 'In Progress' | 'Awaiting';

export interface EventEntry {
  name: string;
  date: string;
  status: Status;
}
