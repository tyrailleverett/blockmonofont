export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-center">
          <p className="text-sm text-zinc-400">
            {new Date().getFullYear()} Block Mono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
