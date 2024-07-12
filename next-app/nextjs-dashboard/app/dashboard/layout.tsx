// First, you're importing the <SideNav /> component into your layout. Any components you import into this file will be part of the layout.
// 그니까 이 layout.tsx 파일로 import된 모든 Components 들은 이 레이아웃의 부분이 된다.


import SideNav from '@/app/ui/dashboard/sidenav';
 
// The <Layout /> component receives a children prop. This child can either be a page or another layout.
// In your case, the pages inside /dashboard will automatically be nested inside a <Layout /> like so:

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}