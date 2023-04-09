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
    <div className="min-h-screen px-4 md:px-6 py-6">
      <div className="container md:max-w-screen-md mx-auto">
        <header className="flex flex-col sm:flex-row gap-y-4 sm:justify-between sm:items-start mb-10">
          {/* author data */}
          <div className="flex items-stretch">
            <img
              alt={post.author.name}
              src="/images/1673374010628.jpg"
              className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-gray-300"
            />
            <div className="flex flex-col justify-between mr-4">
              <div>
                <span>{post.author.name}</span>
              </div>
              <span className="font-normal text-gray-400 text-xs hidden md:block">
                {post.author.biography}
              </span>

              <div className="font-normal text-gray-400 text-xs">
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
              <LinkIcon className="w-6 h-6 hover:text-hover-secondary-color text-secondary-color cursor-pointer transition-all" />
            </button>
            <button className="mr-4 transition-all border border-secondary-color text-secondary-color hover:text-hover-secondary-color rounded-full px-3 py-1 flex items-center">
              <span className="ml-1 text-xs">
                {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
              </span>
              <BookmarkIcon
                className={`w-6 h-6 ${
                  post.isBookmarked ? "fill-secondary-color stroke-none" : ""
                }`}
              />
            </button>
          </div>
        </header>
        <main className="prose md:prose-lg lg:prose-xl prose-invert prose-h1:font-extrabold prose-h1:text-2xl prose-h1:md:text-3xl prose-h1:mb-4 prose-p:text-base prose-p:leading-8 prose-p:md:leading-10 prose-p:md:text-lg prose-img:rounded-xl">
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
