import { To, useNavigate } from "react-router";

export default function SidebarButton({
  title,
  route,
}: {
  title: string;
  route: To;
}) {
  const navigator = useNavigate();
  return (
    <button
      className="p-4 w-full hover:bg-primary"
      onClick={() => {
        navigator(route);
      }}
    >
      {title}
    </button>
  );
}
