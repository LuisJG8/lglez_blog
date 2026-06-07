import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";

export const isPostPublishTimePassed = ({ data }: CollectionEntry<"blog">) => {
  return Date.now() > new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
};

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  return (
    !data.draft && !data.unlisted && (import.meta.env.DEV || isPostPublishTimePassed({ data }))
  );
};

export default postFilter;
