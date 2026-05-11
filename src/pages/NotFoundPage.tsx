import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NotFoundPage() {
  return (
    <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
        <p className="font-mono text-sm text-slate-400/90">404</p>
        <h1 className="mt-4 text-4xl font-bold text-white">This route does not exist.</h1>
        <p className="mt-4 max-w-md text-slate-400">Check the URL, or head back to the homepage.</p>
        <Link
          to="/"
          className="mt-10 inline-flex rounded-md bg-[#d8bc83] px-8 py-3 text-sm font-semibold text-[#17110a] transition hover:bg-[#f0d8a8]"
        >
          Go home
        </Link>
      </motion.div>
    </main>
  );
}
