export interface SplitTime {
  date: string;
  timeSpent: number;
}

export interface Task {
  content: string;
  isCompleted: boolean;
}

export interface Timer {
  timerId: string;
  studyLogId: string;
  splitTimes: SplitTime[];
  startTime: string;
  lastUpdateTime: string;
}

export interface StartTimer {
  todayGoal: string;
  tasks: Task[];
}

export interface EndTimer {
  splitTimes: SplitTime[];
  review: string;
  tasks: Task[];
}
