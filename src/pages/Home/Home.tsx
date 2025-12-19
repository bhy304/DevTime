import TimerDisplay from "@/widgets/timer/ui/TimerDisplay";
import TimerControls from "@/widgets/timer/ui/TimerControls";
import { useAuthStore } from "@/entities/auth/model/authStore";
import cn from "@/shared/lib/cn";

const Home = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <main className="flex w-full grow flex-col items-center justify-center">
      <h1 className={cn("text-indigo mb-2.5 text-7xl font-bold", isAuthenticated ? "text-primary/30" : "")}>
        {isAuthenticated ? "오늘도 열심히 달려봐요!" : "WELCOME"}
      </h1>
      {!isAuthenticated && (
        <p className="text-bodysmall font-regular text-indigo">DevTime을 사용하려면 로그인이 필요합니다.</p>
      )}
      <TimerDisplay />
      <TimerControls isAuthenticated={isAuthenticated} />
    </main>
  );
};

export default Home;
