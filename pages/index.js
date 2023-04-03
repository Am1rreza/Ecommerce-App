import BlogList from "@/components/BlogList/BlogList";
import DesktopCategory from "@/components/Category/DesktopCategory";
import MobileCategory from "@/components/Category/MobileCategory";
import DesktopSortBar from "@/components/SortBar/DesktopSortBar";
import axios from "axios";

export default function Home({ blogData, postCategories }) {
  return (
    <div className="container mx-auto lg:max-w-screen-xl px-4 py-6">
      <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,1fr)]">
        <div className="hidden md:block md:row-span-2 md:col-span-3">
          <DesktopCategory postCategories={postCategories} />
        </div>

        <MobileCategory postCategories={postCategories} />

        <div className="hidden md:block md:col-span-9">
          <DesktopSortBar />
        </div>

        <div className="md:col-span-9 grid grid-cols-6 gap-6">
          <BlogList blogData={blogData} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data: result } = await axios.get(
    "http://localhost:5000/api/posts?limit=10&page=1"
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
