export default function Page({
  params: { productId },
}: {
  params: { productId: string };
}) {
  return <h1>{productId}</h1>;
}

export const dynamic = "force-dynamic";
export const fetchCache = "default-cache";
// export const runtime = "edge";
