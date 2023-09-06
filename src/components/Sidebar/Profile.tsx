import { LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/Kwan13.png"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Kawan Jose</span>
        <span className="truncate text-sm text-zinc-500">kawan@gmail.com</span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
