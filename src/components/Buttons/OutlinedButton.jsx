export default function OutlinedButton({ text, icon }) {
  return (
    <a
      className="bg-white hover:bg-neutral-100 transition-all flex items-center py-2 px-4 border text-small gap-2 font-medium text-neutral700 rounded-md shadow-md border-neutral300"
      href=""
    >
      {icon}
      {text}
    </a>
  );
}
