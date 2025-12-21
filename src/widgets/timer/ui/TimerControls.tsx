import { useState } from "react";
import Start from "@/shared/assets/start.svg?react";
import Pause from "@/shared/assets/pause.svg?react";
import Finish from "@/shared/assets/finish.svg?react";
import TimerGoalDialog from "@/features/timer/ui/TimerGoalDialog";
import LoginRequiredDialog from "@/features/auth/ui/LoginRequiredDialog";

const TimerControls = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isGoalOpen, setIsGoalOpen] = useState(false);

  const handleClick = () => {
    if (!isAuthenticated) {
      setIsLoginOpen(true);
      return;
    }
    setIsGoalOpen(true);
  };

  return (
    <section className="flex items-center gap-20">
      <Start
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:[&_path]:fill-opacity-100 cursor-pointer"
        onClick={handleClick}
      />
      <Pause
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:[&_path]:fill-opacity-100 cursor-pointer"
      />
      <Finish
        width={120}
        height={120}
        className="hover:[&_path]:fill-primary hover:[&_path]:fill-opacity-100 cursor-pointer"
      />
      <LoginRequiredDialog open={isLoginOpen} setOpen={setIsLoginOpen} />
      <TimerGoalDialog open={isGoalOpen} setOpen={setIsGoalOpen} />
    </section>
  );
};

export default TimerControls;
