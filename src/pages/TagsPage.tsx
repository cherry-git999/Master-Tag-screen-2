import { Layout } from "@/components/layout/Layout";
import { TagList } from "@/components/tags/TagList";

export function TagsPage() {
  return (
    <Layout>
      <div className="p-6 h-full">
        <div className="mb-1 text-xs text-gray-500">
          Tags / Master Tag List
        </div>
        <TagList />
      </div>
    </Layout>
  );
}