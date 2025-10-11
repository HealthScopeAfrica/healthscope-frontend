import { FiClock } from "react-icons/fi";
import { PiTrendUpFill } from "react-icons/pi";
import { featuredArticles } from "../data";
import { DashboardCard } from "./dashboard-card";

function ArticleCard({
  title,
  category,
  author,
  readTime,
  trending,
  image,
}: (typeof featuredArticles)[number]) {
  return (
    <DashboardCard className="flex flex-col gap-4 py-6 md:flex-row md:items-start md:gap-6">
      <div className="relative h-28 w-full max-w-[172px] rounded-xl md:h-[156px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {trending ? (
          <span className="absolute right-0 -top-3 inline-flex items-center gap-2 rounded-lg bg-[#fb2c36] px-2 py-1 text-xs font-semibold text-white shadow-[0_8px_18px_rgba(230,66,91,0.35)]">
            <PiTrendUpFill className="size-4" />
            Trending
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <span className="inline-flex w-fit items-center rounded-full bg-[#eceef2] px-3 py-1 text-xs font-medium text-text-strong">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-text-strong">{title}</h3>

        <div className="flex flex-wrap items-center gap-3 text-sm text-[#6E6E6E]">
          <span>By {author}</span>
          <span className="flex items-center gap-1">
            <FiClock className="size-4" />
            {readTime}
          </span>
        </div>
      </div>
    </DashboardCard>
  );
}

export function FeaturedArticlesSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-text-strong">
        Featured Articles
      </h2>
      <div className="flex flex-col gap-4">
        {featuredArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
}
