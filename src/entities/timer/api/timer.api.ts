import type { EndTimer, SplitTime, StartTimer } from "@/entities/timer/model/timer.model";
import HttpClient from "../../../shared/api/http-client";

class TimerAPI extends HttpClient {
  getTimers = async () => {
    return this.get("/timers");
  };

  startTimer = async (data: StartTimer) => {
    return this.post("/timers", data);
  };

  updateTimer = async (timerId: string, data: SplitTime[]) => {
    return this.put(`/timers/${timerId}`, data);
  };

  deleteTimer = async (timerId: string) => {
    return this.delete(`/timers/${timerId}`);
  };

  endTimer = async (timerId: string, data: EndTimer) => {
    return this.post(`/timers/${timerId}/stop`, data);
  };
}

export default new TimerAPI();
