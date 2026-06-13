import SiteMenu from '../SiteMenu.jsx';
import Footer from '../Footer.jsx';

export default function PageShell({ children, showFooter = true }) {
  return (
    <>
      <SiteMenu />
      <main className="plevid-page">{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
