import {allBlogs} from "contentlayer/generated";
// import HomeCoverSection from "../components/Home/HomeCoverSection";
// import FeaturedPosts from "../components/Home/FeaturedPosts";
// import RecentPosts from "../components/Home/RecentPosts";
import dynamic from "next/dynamic"

const RecentPosts = dynamic(()=>import('../components/Home/RecentPosts'))
const FeaturedPosts = dynamic(()=>import('../components/Home/FeaturedPosts'))
const HomeCoverSection = dynamic(()=>import('../components/Home/HomeCoverSection'))

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />

    </main>
  )
}
