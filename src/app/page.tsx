import RunningCalculator from "@/components/running-calculator";
import { Metadata } from "next";

import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/blog/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/blog/more-stories";
import { getAllPosts } from "@/lib/api";
import { CMS_NAME, CMS_SEPARATOR } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${CMS_NAME} ${CMS_SEPARATOR} Running Calories Burned Calculator`,
  description:
    "Calculate the calories burned during your runs with LeObserver's running calculator. Track your health and fitness easily.",
  authors: [{ name: "LObserver", url: "https://lobserver.com/" }],
};

export default function Home() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1, 3);

  return (
    <main className="pb-8">
      <RunningCalculator />
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Link
          href="/posts"
          className="group uppercase font-black flex justify-end items-center text-emerald-900 opacity-50 hover:opacity-100 transition duration-200 ease-in-out"
        >
          <span className="mr-2">View more posts</span>
          <div className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
            &rarr;
          </div>
        </Link>
      </Container>
    </main>
  );
}
