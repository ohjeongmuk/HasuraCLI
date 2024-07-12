'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

/*
  In Next.js, you can use the <Link /> Component to link between pages in your application.
  <Link> allows you to do client-side navigation with JavaScript.
*/
import Link from 'next/link';
import { usePathname } from 'next/navigation'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

/*
  As you can see, the Link component is similar to using  <a> tags, but instead of <a href="..">,
  you use <Link href="..">.

  <a> 는 full refresh를 하는 반면에, <Link> 는 페이지들 사이를 navigate 할수있다. 
  You should now be able to navigate between the pages without seeing a full refresh. Although parts
  of your application are rendered on the server, making it feel like a web app. 


  To improve the navigate experience, Next.js automatically code splits your application by route segments.
  This is different from a traditional React SPA, where the browser loads all your application code on initial code.
  

*/