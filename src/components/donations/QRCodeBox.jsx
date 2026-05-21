export function QRCodeBox() {
  return (
    <div className="grid aspect-square w-full place-items-center rounded-lg border border-slate-200 bg-white p-4" aria-label="QR Code Pix demonstrativo">
      <div className="grid h-full w-full grid-cols-7 gap-1">
        {Array.from({ length: 49 }).map((_, index) => {
          const filled = [0, 1, 2, 4, 6, 7, 9, 10, 12, 14, 16, 18, 20, 21, 22, 24, 27, 29, 31, 33, 34, 36, 38, 40, 42, 44, 45, 46, 48].includes(index);
          return <span key={index} className={filled ? "bg-slate-950" : "bg-slate-100"} />;
        })}
      </div>
    </div>
  );
}
