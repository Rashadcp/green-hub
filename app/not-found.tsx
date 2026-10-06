import Link from "next/link";
import PremiumNav from "./components/PremiumNav";
import { SiteFooter } from "./components/SiteChrome";

export default function NotFound() {
  return (
    <>
      <PremiumNav />
      <main
        className="site-shell"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "100px 20px 80px",
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            <i /> 404 &bull; Page Not Found
          </p>
          <h1 style={{ margin: "20px auto", maxWidth: "640px" }}>
            The page you are looking for <em>doesn&apos;t exist.</em>
          </h1>
          <p className="lede" style={{ margin: "0 auto 32px" }}>
            It may have been moved, renamed, or is temporarily unavailable.
          </p>
          <Link href="/" className="button lime">
            Return Home &rarr;
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
