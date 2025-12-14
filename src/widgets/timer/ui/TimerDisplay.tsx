const TimerDisplay = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      {/* 1. Timer Area */}
      {/* role="timer" to indicate time information */}
      <div
        role="timer"
        aria-label="00 hours 00 minutes 00 seconds"
        className="flex items-center gap-4 text-center font-bold text-[#4C79FF]"
      >
        {/* HOURS */}
        <div className="flex h-[298px] w-[264px] flex-col items-center justify-center rounded-[12px] bg-[rgba(76,121,255,0.1)]">
          {/* Font should be replaced with a digital/monospace font if needed */}
          <span className="text-[120px] leading-none">00</span>
          <span className="mt-4 text-base font-semibold tracking-widest text-[#4C79FF]">HOURS</span>
        </div>

        {/* Separator (:) marked as decorative */}
        <div className="mb-12 flex flex-col gap-4 text-[40px] text-[#4C79FF] opacity-80" aria-hidden="true">
          <span>•</span>
          <span>•</span>
        </div>

        {/* MINUTES */}
        <div className="flex h-[298px] w-[264px] flex-col items-center justify-center rounded-[12px] bg-[rgba(76,121,255,0.1)]">
          <span className="text-[120px] leading-none">00</span>
          <span className="mt-4 text-base font-semibold tracking-widest text-[#4C79FF]">MINUTES</span>
        </div>

        {/* Separator (:) */}
        <div className="mb-12 flex flex-col gap-4 text-[40px] text-[#4C79FF] opacity-80" aria-hidden="true">
          <span>•</span>
          <span>•</span>
        </div>

        {/* SECONDS */}
        <div className="flex h-[298px] w-[264px] flex-col items-center justify-center rounded-[12px] bg-[rgba(76,121,255,0.1)]">
          <span className="text-[120px] leading-none">00</span>
          <span className="mt-4 text-base font-semibold tracking-widest text-[#4C79FF]">SECONDS</span>
        </div>
      </div>

      {/* 2. Control Buttons Area */}
      <div className="flex items-center gap-8">
        {/* Play Button */}
        <button
          aria-label="Start Timer"
          className="flex h-20 w-20 items-center justify-center transition-opacity hover:opacity-80"
        >
          {/* SVG Icon (Play) Placeholder */}
          <span className="text-2xl">▶</span>
        </button>

        {/* Pause Button */}
        <button
          aria-label="Pause Timer"
          className="flex h-20 w-20 items-center justify-center transition-opacity hover:opacity-80"
        >
          {/* SVG Icon (Pause) Placeholder */}
          <span className="text-2xl">||</span>
        </button>

        {/* Stop Button */}
        <button
          aria-label="Stop Timer"
          className="flex h-20 w-20 items-center justify-center transition-opacity hover:opacity-80"
        >
          {/* SVG Icon (Stop) Placeholder */}
          <span className="text-2xl">■</span>
        </button>
      </div>

      {/* 3. Utility Buttons */}
      <div className="flex gap-4">
        <button aria-label="View Todo List">
          {/* List Icon Placeholder */}
          List
        </button>
        <button aria-label="Reset Timer">
          {/* Reset Icon Placeholder */}
          Reset
        </button>
      </div>
    </section>
  );
};

export default TimerDisplay;
