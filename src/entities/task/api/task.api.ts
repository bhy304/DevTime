import type { Task } from "@/entities/task/model/task.model";
import HttpClient from "@/shared/api/http-client";

class TaskAPI extends HttpClient {
  updateTasks = async (studyLogId: string, tasks: Task[]) => {
    return this.put(`/${studyLogId}/tasks`, tasks);
  };
}

export default new TaskAPI();
