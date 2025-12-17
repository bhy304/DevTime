import TimerDisplay from "@/widgets/timer/ui/TimerDisplay";
import TimerControls from "@/widgets/timer/ui/TimerControls";

const Home = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-indigo mb-2.5 text-7xl font-bold">WELCOME</h1>
      <p className="text-bodysmall font-regular text-indigo">DevTime을 사용하려면 로그인이 필요합니다.</p>
      <TimerDisplay />
      <TimerControls />
    </main>
  );
};

export default Home;
