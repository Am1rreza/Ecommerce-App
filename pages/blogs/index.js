import Layout from "@/Layout/Index";
import PaginationComponent from "@/common/Pagination";
import BlogList from "@/components/BlogList/BlogList";
import DesktopCategory from "@/components/Category/DesktopCategory";
import MobileCategory from "@/components/Category/MobileCategory";
import DesktopSortBar from "@/components/SortBar/DesktopSortBar";
import http from "@/services/httpService";
import Head from "next/head";
import queryString from "query-string";

export default function Blogs({ blogData, postCategories }) {
  return (
    <Layout>
      <Head>
        <title>بلاگ ها</title>
      </Head>
      <div className="container mx-auto mt-14 px-4 py-6 lg:max-w-screen-xl">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)]">
          <div className="hidden md:col-span-3 md:row-span-2 md:block">
            <DesktopCategory postCategories={postCategories} />
          </div>

          <MobileCategory postCategories={postCategories} />

          <div className="hidden md:col-span-9 md:block">
            <DesktopSortBar />
          </div>

          <div className="grid min-h-max grid-cols-6 gap-6 md:col-span-9">
            <BlogList blogData={blogData.docs} />
            <PaginationComponent
              page={blogData.page}
              totalPages={blogData.totalPages}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}`,
    {
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );
  const { data: postCategories } = await http.get("/post-category");

  const { data } = result;

  return {
    props: {
      blogData: data,
      postCategories: postCategories.data,
    },
  };
}
