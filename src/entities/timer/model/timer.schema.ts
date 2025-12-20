import z from "zod";

export const timerSchema = z.object({
  todayGoal: z.string().min(1).max(30),
  tasks: z.array(z.object({ task: z.string().min(1).max(30) })).min(1),
});

export type TimerSchema = z.infer<typeof timerSchema>;
