import { useState } from "react";
import Start from "@/shared/assets/start.svg?react";
import Pause from "@/shared/assets/pause.svg?react";
import Finish from "@/shared/assets/finish.svg?react";
import TimerGoalDialog from "@/features/timer/ui/TimerGoalDialog";
import LoginRequiredDialog from "@/features/auth/ui/LoginRequiredDialog";
import { Button } from "@/shared/ui";

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
      <Button priority="none" onClick={handleClick}>
        <Start
          width={120}
          height={120}
          className="text-primary hover:text-primary-light cursor-pointer transition-colors"
        />
      </Button>
      <Button priority="none">
        <Pause
          width={120}
          height={120}
          className="text-primary/10 hover:text-primary cursor-pointer transition-colors"
        />
      </Button>
      <Button priority="none">
        <Finish
          width={120}
          height={120}
          className="text-primary/10 hover:text-primary cursor-pointer transition-colors"
        />
      </Button>
      <LoginRequiredDialog open={isLoginOpen} setOpen={setIsLoginOpen} />
      <TimerGoalDialog open={isGoalOpen} setOpen={setIsGoalOpen} />
    </section>
  );
};

export default TimerControls;
