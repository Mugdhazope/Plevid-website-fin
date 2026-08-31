import { useNavigate } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu.jsx';
import { scrollToSection } from '../animations.js';
import { menuItems, socialItems } from '../data/navConfig.js';

export default function SiteMenu() {
  const navigate = useNavigate();

  function handleNavigate(link) {
    if (link.startsWith('#')) {
      scrollToSection(link);
      return;
    }
    navigate(link);
  }

  return (
    <StaggeredMenu
      isFixed
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      logoUrl="/img/PLEVID.svg"
      logoLink="/"
      menuButtonColor="#000000"
      openMenuButtonColor="#000000"
      changeMenuColorOnOpen={false}
      colors={['#ffffff', '#f5f5f5']}
      accentColor="var(--plevid-accent)"
      className="plevid-staggered-menu"
      onItemNavigate={handleNavigate}
    />
  );
}
