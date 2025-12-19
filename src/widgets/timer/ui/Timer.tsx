interface TimerProps {
  time: number;
  title: "HOURS" | "MINUTES" | "SECONDS";
}

const Timer = ({ time, title }: TimerProps) => {
  return (
    <div className="border-primary flex min-h-[298px] min-w-[264px] flex-col items-center rounded-xl border bg-[linear-gradient(135deg,rgba(76,121,255,0)_0%,rgba(76,121,255,0.2)_100%)] p-[8px_8px_36px_8px]">
      <span className="font-digital text-primary text-regular mb-9 text-[154px]">{String(time).padStart(2, "0")}</span>
      <span className="text-bodysmall text-primary">{title}</span>
    </div>
  );
};

export default Timer;
