import {Bars3Icon} from "@heroicons/react/24/outline";
import MainTopSection from "@/pages/website/components/MainTopSection";

export default function MainSection({children, query, setQuery, userNavigation}:
                                      {
                                        children: any,
                                        query: string,
                                        setQuery: (arg0: string) => void,
                                        userNavigation: { name: string, href: string }[],
                                      }) {
  return (
    <>
      <div className="">
        <div
          className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">

          {/* Separator */}
          <div className="h-6 w-px bg-gray-200 lg:hidden " aria-hidden="true"/>

          <MainTopSection query={query} setQuery={setQuery} userNavigation={userNavigation}/>
        </div>

        <main className="py-10 bg-white p-10 2xl:container 2xl:mx-auto">
          {children}
        </main>
      </div>
    </>
  )
}
