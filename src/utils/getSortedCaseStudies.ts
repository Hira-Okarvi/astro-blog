import type { CollectionEntry } from "astro:content";

const getSortedCaseStudies = (
  entries: CollectionEntry<"caseStudies">[]
): CollectionEntry<"caseStudies">[] =>
  entries
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        (b.data.pubDatetime?.getTime() ?? 0) -
        (a.data.pubDatetime?.getTime() ?? 0)
    );

export default getSortedCaseStudies;
