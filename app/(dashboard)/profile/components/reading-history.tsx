import type { ReadingHistoryItem } from "../data";

interface ReadingHistoryProps {
  items: ReadingHistoryItem[];
}

export function ReadingHistory({ items }: ReadingHistoryProps) {
  if (items.length === 0) {
    return (
      <section className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
        <h3 className="text-xl font-semibold text-text-strong">
          Recent Reading Activity
        </h3>
        <p className="mt-2 text-sm text-[#6E6E6E]">
          You have not read any articles yet. Once you explore the library, your
          recent reading activity will show up here.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_32px_rgba(15,20,27,0.04)]">
      <h3 className="text-xl font-semibold text-text-strong">
        Recent Reading Activity
      </h3>
      <div className="mt-6 flex flex-col max-h-[400px] md:max-h-[500px] lg:max-h-[600px] overflow-y-auto gap-3">
        {items.map(({ id, title, category, readDuration, readAt }) => (
          <article
            key={id}
            className="flex flex-col gap-3 rounded-xl border border-[#F0F1F5] bg-white px-2 md:px-4 py-3 md:py-4.5 shadow-[0_6px_18px_rgba(15,20,27,0.04)] md:flex-row md:items-center md:justify-between"
          >
            <div className="flex gap-3 items-center">
              <span className="inline-flex size-2 shrink-0 translate-y-0.5 rounded-full bg-blue-400" />
              <div className="flex flex-col gap-2">
                <h4 className="max-w-[32rem] text-base font-semibold leading-snug text-text-strong md:text-lg line-clamp-2">
                  {title}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex rounded-lg bg-[#EDF2FD] px-3 py-1 text-xs font-medium text-blue-700">
                    {category}
                  </span>
                  <span className="text-xs text-gray-400 md:text-sm">
                    {readDuration}
                  </span>
                  <span className="text-xs text-gray-400 md:text-sm">
                    {readAt}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
