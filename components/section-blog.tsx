import Image from "next/image";
import { SectionContainer } from "./section-container";

const blogPosts = [
  {
    id: 1,
    title: "Staffing software: key capabilities and top products",
    date: "23 June 2022",
    image: "/images/publicity/img_1.png",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
    readMoreLink: "#",
  },
  {
    id: 2,
    title: "2022 software development trends explained with benefits",
    date: "22 June 2022",
    image: "/images/publicity/img_2.png",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
    readMoreLink: "#",
  },
  {
    id: 3,
    title: "Business analysis helps you in finance",
    date: "22 June 2022",
    image: "/images/publicity/img_3.png",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
    readMoreLink: "#",
  },
];

export default function SectionBlog({
  showDescription = false,
  header,
}: {
  header: string;
  showDescription?: boolean;
}) {
  return (
    <SectionContainer>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{header}</h1>
        <div className="w-20 h-1 bg-blue-600"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <time>{post.date}</time>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                {post.title}
              </h2>
              {showDescription && (
                <h3 className="text-base font-open-sans text-c-gray mb-2">
                  {post.description}
                </h3>
              )}
              <a
                href={post.readMoreLink}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
