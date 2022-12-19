import FooterSide from "./FooterSide";
import MenuItem from "./MenuItem";
import Profile from "./Profile"

interface SideBarProps{
  activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function SideBar(props: SideBarProps) {
  const {activeMenu} = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="icon-menu-overview" active={activeMenu === 'overview'} href="/member" />
          <MenuItem title="Transactions" icon="icon-menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions" />
          <MenuItem title="Messages" icon="icon-menu-messages" href="/member" />
          <MenuItem title="Card" icon="icon-menu-card" href="/member" />
          <MenuItem title="Reward" icon="icon-menu-reward" href="/member" />
          <MenuItem title="Setting" icon="icon-menu-setting" active={activeMenu === 'settings'} href="/member/edit-profile" />
          <MenuItem title="Log out" icon="icon-menu-logout" href="/Sign-In" />
        </div>
        <FooterSide />
      </div>
    </section>
  );
}
