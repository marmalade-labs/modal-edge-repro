import { redirect } from "next/navigation";

export default function Home() {
  redirect("/for-you")
}

export const runtime = "edge";
