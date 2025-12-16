import Eclipse from "@/shared/assets/ellipse.svg?react";
import Start from "@/shared/assets/start.svg?react";
import Pause from "@/shared/assets/pause.svg?react";
import Finish from "@/shared/assets/finish.svg?react";

const Home = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-indigo mb-2.5 text-7xl font-bold">WELCOME</h1>
      <p className="text-bodysmall font-regular text-indigo">DevTime을 사용하려면 로그인이 필요합니다.</p>
      <section className="mt-[50px] mb-20 flex items-center">
        <div role="timer" aria-label="Timer" className="flex items-center gap-12">
          {/* HOURS */}
          <div className="border-primary flex min-h-[298px] min-w-[264px] flex-col items-center rounded-xl border bg-[linear-gradient(135deg,rgba(76,121,255,0)_0%,rgba(76,121,255,0.2)_100%)] p-[8px_8px_36px_8px]">
            <span className="font-digital text-primary text-regular mb-9 text-[154px]">00</span>
            <span className="text-bodysmall text-primary">HOURS</span>
          </div>
          {/* Separator */}
          <div className="flex flex-col gap-16">
            <Eclipse />
            <Eclipse />
          </div>
          {/* MINUTES */}
          <div className="border-primary flex min-h-[298px] min-w-[264px] flex-col items-center rounded-xl border bg-[linear-gradient(135deg,rgba(76,121,255,0)_0%,rgba(76,121,255,0.2)_100%)] p-[8px_8px_36px_8px]">
            <span className="font-digital text-primary text-regular mb-9 text-[154px]">00</span>
            <span className="text-bodysmall text-primary">MINUTES</span>
          </div>
          {/* Separator */}
          <div className="flex flex-col gap-16">
            <Eclipse />
            <Eclipse />
          </div>
          {/* SECONDS */}
          <div className="border-primary flex min-h-[298px] min-w-[264px] flex-col items-center rounded-xl border bg-[linear-gradient(135deg,rgba(76,121,255,0)_0%,rgba(76,121,255,0.2)_100%)] p-[8px_8px_36px_8px]">
            <span className="font-digital text-primary text-regular mb-9 text-[154px]">00</span>
            <span className="text-bodysmall text-primary">SECONDS</span>
          </div>
        </div>
      </section>
      <section className="flex items-center gap-20">
        <Start
          width={120}
          height={120}
          className="hover:[&_path]:fill-primary hover:fill-path-opacity-1 cursor-pointer"
        />
        <Pause width={120} height={120} className="hover:[&_path]:fill-primary hover:fill-opacity-1 cursor-pointer" />
        <Finish
          width={120}
          height={120}
          className="hover:[&_path]:fill-primary hover:[&_path]:fill-opacity-100 cursor-pointer"
        />
      </section>
    </main>
  );
};

export default Home;
