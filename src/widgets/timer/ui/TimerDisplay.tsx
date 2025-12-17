import Timer from "./Timer";
import Separator from "./Separator";

const TimerDisplay = () => {
  return (
    <section className="mt-[50px] mb-20 flex items-center">
      <div role="timer" aria-label="Timer" className="flex items-center gap-12">
        <Timer title="HOURS" time={0} />
        <Separator />
        <Timer title="MINUTES" time={0} />
        <Separator />
        <Timer title="SECONDS" time={0} />
      </div>
    </section>
  );
};

export default TimerDisplay;
