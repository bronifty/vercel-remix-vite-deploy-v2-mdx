import { Link } from "@remix-run/react";
export default function Navigation() {
  return (
    <ul className="text-red-500">
      <li>
        <Link to="blah">About</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
}
