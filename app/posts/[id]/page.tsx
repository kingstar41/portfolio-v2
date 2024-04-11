import Date from "@/components/Date";
import { useRouter } from "next/navigation";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { IconArrowLeft } from "@tabler/icons-react";
import { BackButton } from "@/components/BackButton";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return (
    <>
      <BackButton />

      <h1 className="font-extrabold text-4xl mb-0">{postData.title}</h1>

      <p className="font-bold text-mid">
        <Date dateString={postData.date} />
      </p>

      {/* Post Content */}
      <div
        className="flex flex-col gap-y-4"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
