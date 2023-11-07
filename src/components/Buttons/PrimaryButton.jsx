export default function PrimaryButton({ text, icon }) {
  return (
    <a
      className="bg-primary600 flex items-center py-2 px-4  text-small font-medium text-white rounded-md shadow-md "
      href=""
    >
      {icon}
      {text}
    </a>
  );
}
