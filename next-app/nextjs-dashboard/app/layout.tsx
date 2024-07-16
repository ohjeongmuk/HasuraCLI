import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { ApolloWrapper } from "./ApolloWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {`${inter.className} antialiased`}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
  
/*
  This Page: app/layout.tsx 
  
  This is called a root layout and is required. Any UI you add to the root layout will be shared across all pages in your application.
  You can use the root layout to modify your <html> and <body> tags, and add metadata.
  
  Since the new layout you've just created (/app/dashboard/layout.tsx) is unique to the dashboard pages, you don't need to add any any UI to the root layout above.
*/