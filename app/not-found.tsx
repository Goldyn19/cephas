import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4" style={{ background: 'linear-gradient(135deg, #18122B 0%, #635985 100%)' }}>
      <h2 className="text-xl md:text-2xl font-bold text-[#36C5F0] mb-4 text-center">Cephas Artworld Studios</h2>
      <h1 className="text-[6rem] md:text-[8rem] font-extrabold leading-none mb-4 text-center">404</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-md">
        Within this portfolio, you&apos;ll find a curated collection of my best work
      </p>
      <Link href="/" className="px-6 py-3 rounded-lg bg-[#36C5F0] text-white font-semibold text-lg shadow hover:bg-[#2499c7] transition">Back To Home</Link>
    </div>
  );
} 