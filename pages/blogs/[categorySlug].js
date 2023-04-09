import BlogList from "@/components/BlogList/BlogList";
import DesktopCategory from "@/components/Category/DesktopCategory";
import MobileCategory from "@/components/Category/MobileCategory";
import DesktopSortBar from "@/components/SortBar/DesktopSortBar";
import axios from "axios";
import queryString from "query-string";

export default function CategoryPage({ blogData, postCategories }) {
  return (
    <div className="container mx-auto px-4 py-6 lg:max-w-screen-xl">
      <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)]">
        <div className="hidden md:col-span-3 md:row-span-2 md:block">
          <DesktopCategory postCategories={postCategories} />
        </div>

        <MobileCategory postCategories={postCategories} />

        <div className="hidden md:col-span-9 md:block">
          <DesktopSortBar />
        </div>

        <div className="grid grid-cols-6 gap-6 md:col-span-9">
          <BlogList blogData={blogData} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
  );
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );

  const { data } = result;

  return {
    props: {
      blogData: data,
      postCategories: postCategories.data,
    },
  };
}
