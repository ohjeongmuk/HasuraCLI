import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
    return <DashboardSkeleton />;
  }


/*
  loading.tsx 는 Suspense 기반으로 구축된 특별한 Next.js 파일이다.
  이것은 fallback UI를 생성하여 페이지 내용이 로드되는 동안에 대체품을 보여준다.


  유저가 페이지 전체 로딩이 끝날때까지 기다릴 필요가 없는 것을 
  'interruptable navigation' 이라고 부른다.

  Fixing the loading skeleton bug with route groups

  loading.tsx 페이지는 invoices/page.tsx 와 customers/page.tsx 보다 높은 수준이다.
*/

/*
  loading.tsx 파일은 대시보드 오버뷰 페이지에 적용된다.
  경로 그룹을 사용하면 URL 경로 구조에 영향을 주지 않고 파일을 논리 그룹으로 구성할 수 있다.
  괄호 ()를 사용하여 새 폴더를 생성하면 해당 이름이 URL경로에 포함되지 않는다.
  따라서 dashboard/(overview)/page.tsx 는 /dashboard 경로에 있는 페이지로 간주된다.

*/