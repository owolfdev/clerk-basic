import React from "react";

type Props = {
  params: { slug: string };
};

function BlogPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return <div>Some Blog Page: {slug}</div>;
}

export default BlogPage;
