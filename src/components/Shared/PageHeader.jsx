import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export default function PageHeader({
  title,
  highlightTitle,
  subtitle,
  breadcrumbs = [],
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 py-6 dark:border-slate-800 lg:py-8">
      <div className="pointer-events-none absolute -left-16 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {breadcrumbs.length > 0 && (
            <nav className="mb-1.5 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              {breadcrumbs.map((item, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <span key={idx} className="flex items-center gap-2">
                    <FaChevronRight className="h-2.5 w-2.5 text-slate-400 dark:text-slate-600" />
                    {isLast || !item.href ? (
                      <span className="text-primary">{item.label}</span>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </span>
                );
              })}
            </nav>
          )}

          <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {title} {highlightTitle && <span className="text-primary">{highlightTitle}</span>}
          </h1>

          {subtitle && (
            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}