import Link from "next/link";

const ForYouPage = () => {
  const productId = "some-text";
  return (
    <>
      <h1>For You</h1>
      <div>
        <Link
          className="flex flex-row gap-1 items-center font-sans text-sm font-bold leading-none"
          scroll={false}
          href={`/comments/${encodeURIComponent(productId)}`}
        >
          Open Modal
        </Link>
      </div>
    </>
  );
};

export const fetchCache = "default-cache";
// export const runtime = "edge";

export default ForYouPage;
