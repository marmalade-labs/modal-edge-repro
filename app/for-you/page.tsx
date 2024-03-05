import Link from "next/link";

const ForYouPage = () => {
  const productId = "some-text";
  return (
    <>
      <h1>For You</h1>
      <div>
        <Link
          scroll={false}
          href={`/comments/${encodeURIComponent(productId)}`}
        >
          Open Modal
        </Link>
      </div>
    </>
  );
};

export default ForYouPage;
