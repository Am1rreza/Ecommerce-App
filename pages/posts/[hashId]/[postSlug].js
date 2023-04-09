import toPersianDigits from "@/utils/toPersianDigits";
import { LinkIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";

const PostPage = ({ post }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  // for react hydration error
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  }

  return (
    <div className="min-h-screen px-4 py-6 md:px-6">
      <div className="container mx-auto md:max-w-screen-md">
        <header className="mb-10 flex flex-col gap-y-4 sm:flex-row sm:items-start sm:justify-between">
          {/* author data */}
          <div className="flex items-stretch">
            <img
              alt={post.author.name}
              src="/images/1673374010628.jpg"
              className="h-14 w-14 rounded-full ring-2 ring-gray-300 md:h-20 md:w-20"
            />
            <div className="mr-4 flex flex-col justify-between">
              <div>
                <span>{post.author.name}</span>
              </div>
              <span className="hidden text-xs font-normal text-gray-400 md:block">
                {post.author.biography}
              </span>

              <div className="text-xs font-normal text-gray-400">
                <span>
                  {new Date(post.createdAt).toLocaleString("fa-IR", {
                    dateStyle: "medium",
                  })}
                </span>
                <span className="mx-1"> &bull; </span>
                <span>
                  <span>زمان مطالعه: </span>
                  <span>{toPersianDigits(post.readingTime)} </span>
                  <span>دقیقه</span>
                </span>
              </div>
            </div>
          </div>
          {/* interaction buttons */}
          <div className="flex">
            <button>
              <LinkIcon className="h-6 w-6 cursor-pointer text-secondary-color transition-all hover:text-hover-secondary-color" />
            </button>
            <button className="mr-4 flex items-center rounded-full border border-secondary-color px-3 py-1 text-secondary-color transition-all hover:text-hover-secondary-color">
              <span className="ml-1 text-xs">
                {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
              </span>
              <BookmarkIcon
                className={`h-6 w-6 ${
                  post.isBookmarked ? "fill-secondary-color stroke-none" : ""
                }`}
              />
            </button>
          </div>
        </header>
        <main className="prose prose-invert md:prose-lg lg:prose-xl prose-h1:mb-4 prose-h1:text-2xl prose-h1:font-extrabold prose-p:text-base prose-p:leading-8 prose-img:rounded-xl prose-h1:md:text-3xl prose-p:md:text-lg prose-p:md:leading-10">
          <h1>{post.title}</h1>
          <h2>عنوان تستی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <img alt={post.slug} src={post.coverImage} />
          <h2>عنوان تستی دوم</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <h2>جمع بندی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </main>
        {/* post footer */}
        <section>
          {/* post tags */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-4">
            {post.tags.map((tag) => {
              return (
                <li
                  key={post._id}
                  className="mb-3 block cursor-pointer rounded-3xl border-gray-500 bg-secondary-color px-3 py-1 text-sm transition-all hover:bg-hover-secondary-color md:text-base"
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const { data } = await axios.get(
    `http://localhost:5000/api/posts/${query.postSlug}`
  );

  return {
    props: {
      post: data.data,
    },
  };
}
