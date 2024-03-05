import Link from "next/link";

export default function Page() {
  console.log("Modal");
  return (
    <div>
      <h1>Modal</h1>
      <ul>
        <li>
          <Link href="/u/steve2320/l">
            Profile Link (modal doesn't disappear)
          </Link>
        </li>
        <li>
          <Link href="/trending">
            Trending Link (modal does disappear)
          </Link>
        </li>
      </ul>
    </div>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "default-cache";
export const runtime = "edge";
