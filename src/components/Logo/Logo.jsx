import Image from "next/image";
import Link from "next/link";

const Logo = ({ variant = "default" }) => {
  const isFooter = variant === "footer";

  if (isFooter) {
    return (
      <Link href="/" className="inline-flex items-center gap-3 group">
        <div className="relative w-40 h-10">
          <Image
            src="/assets/logo-white.png"
            alt="ABIRA Logistics Logo"
            fill
            sizes="(max-width: 768px) 100vw, 160px"
            priority
            className="object-contain"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center gap-3 group">
      <div className="relative w-40 h-10">
        <Image
          src="/assets/logo.png"
          alt="ABIRA Logistics Logo"
          fill
          sizes="(max-width: 768px) 100vw, 160px"
          priority
          className="object-contain dark:hidden"
        />
        <Image
          src="/assets/logo-white.png"
          alt="ABIRA Logistics Logo"
          fill
          sizes="(max-width: 768px) 100vw, 160px"
          priority
          className="object-contain hidden dark:block"
        />
      </div>
    </Link>
  );
};

export default Logo;