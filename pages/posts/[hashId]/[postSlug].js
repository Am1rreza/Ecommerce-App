import PostInteraction from "@/components/PostInteraction/PostInteraction";
import toPersianDigits from "@/utils/toPersianDigits";
import { LinkIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import BlogList from "@/components/BlogList/BlogList";
import PostComments from "@/components/PostComments/PostComments";
import toPersianDate from "@/utils/toPersianDate";
import Layout from "@/Layout/Index";
import Head from "next/head";
import http from "@/services/httpService";

const PostPage = ({ post }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  // Handlers
  const copyHandler = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  // for react hydration error
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="min-h-screen px-4 py-6 md:px-6">
        <div className="container mx-auto mt-14 md:max-w-screen-lg">
          <header className="mx-auto mb-10 flex max-w-screen-md flex-col gap-y-4 sm:flex-row sm:items-start sm:justify-between">
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
                  <span>{toPersianDate(post.createdAt)}</span>
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
                <LinkIcon className="h-6 w-6 cursor-pointer text-secondary-color transition-all hover:border-hover-secondary-color hover:text-hover-secondary-color" />
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
          <main className="prose prose-invert mx-auto max-w-screen-md md:prose-lg lg:prose-xl prose-h1:mb-4 prose-h1:text-2xl prose-h1:font-extrabold prose-p:text-base prose-p:leading-8 prose-ul:mt-0 prose-ul:mb-2 prose-img:rounded-xl prose-h1:md:text-3xl prose-p:md:text-lg prose-p:md:leading-10">
            <h1>{post.title}</h1>
            <h2>عنوان تستی</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <img alt={post.slug} src={post.coverImage} />
            <h2>عنوان تستی دوم</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <h2>جمع بندی</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <section className="flex flex-col md:flex-row md:items-center md:justify-between">
              {/* post tags */}
              <ul className="flex flex-wrap items-center gap-x-4">
                {post.tags.map((tag) => {
                  return (
                    <li
                      key={tag}
                      className="mb-4 block cursor-pointer rounded-3xl border-gray-500 bg-secondary-color px-3 py-1 text-sm transition-all hover:bg-hover-secondary-color md:text-base"
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
              {/* like - bookmark - comment */}
              <PostInteraction post={post} />
            </section>
            {/* share buttons section*/}
            <section className="mt-4 flex flex-row-reverse items-center justify-end gap-x-5 md:mt-0 md:flex-row">
              <div className="relative">
                {copied && (
                  <span className="absolute bottom-full block -translate-y-1 -translate-x-1/4 rounded-2xl bg-primary-color px-3 py-1 text-sm text-white md:bottom-1/2 md:translate-y-1/2 md:translate-x-full">
                    کپی شد
                  </span>
                )}
                <CopyToClipboard
                  text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
                  onCopy={copyHandler}
                >
                  <div className="-mr-1 flex cursor-pointer items-center gap-x-2 rounded-2xl border border-secondary-color px-4 py-1.5 text-secondary-color transition-all hover:border-hover-secondary-color hover:text-hover-secondary-color md:mr-1">
                    <span className="text-sm">کپی&nbsp;لینک</span>
                    <MdContentCopy size={20} />
                  </div>
                </CopyToClipboard>
              </div>
              <div className="flex items-center justify-start gap-x-7 md:ml-0.5 md:w-auto md:justify-end">
                <a
                  target="_blank"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
                  className="block"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin
                    size={24}
                    className="cursor-pointer fill-gray-400 transition-all hover:fill-gray-500"
                  />
                </a>
                <a
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=${post.title}`}
                  className="block"
                  rel="noreferrer"
                >
                  <IoLogoTwitter
                    size={24}
                    className="cursor-pointer fill-gray-400 transition-all hover:fill-gray-500"
                  />
                </a>
                <a
                  target="_blank"
                  href={`https://t.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}&text=${post.title}`}
                  className="block"
                  rel="noreferrer"
                >
                  <FaTelegram
                    size={24}
                    className="cursor-pointer fill-gray-400 transition-all hover:fill-gray-500"
                  />
                </a>
              </div>
            </section>
          </main>
          <div className="mx-auto mb-8 max-w-screen-md border-b border-gray-700 pb-8"></div>
          {/* related posts */}
          <section className="mx-auto max-w-screen-md">
            <h2 className="mb-8 px-1 text-2xl font-extrabold md:text-3xl">
              پست های مشابه
            </h2>
            <div className="grid grid-cols-6 gap-6">
              <BlogList blogData={post.related} />
            </div>
          </section>
          {/* post comments */}
          <div className="mx-auto mb-8 max-w-screen-md border-b border-gray-700 pb-8"></div>
          <section className="mx-auto max-w-screen-md">
            <PostComments post={post} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const { data } = await http.get(`/posts/${query.postSlug}`, {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });

  return {
    props: {
      post: data.data,
    },
  };
}
