import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tag } from "@/types";
import { TagTable } from "./TagTable";

const initialTags: Tag[] = [
  {
    id: 1,
    serialNo: 1,
    tagNo: "TT-338857A",
    instType: "Smart",
    make: "Rosemount",
    calDate: "22-04-24",
    reportNo: "123546",
  },
  {
    id: 2,
    serialNo: 2,
    tagNo: "PT-338857A",
    instType: "Smart",
    make: "Rosemount",
    calDate: "24-04-24",
    reportNo: "123565",
  },
  {
    id: 3,
    serialNo: 3,
    tagNo: "FT-338857A",
    instType: "Smart",
    make: "Rosemount",
    calDate: "26-04-24",
    reportNo: "123586",
  },
  {
    id: 4,
    serialNo: 4,
    tagNo: "LT-338857A",
    instType: "Smart",
    make: "Rosemount",
    calDate: "04-05-24",
    reportNo: "123542",
  },
];

export function TagList() {
  const [tags, setTags] = useState<Tag[]>(initialTags);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTags = tags.filter((tag) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      tag.tagNo.toLowerCase().includes(searchLower) ||
      tag.instType.toLowerCase().includes(searchLower) ||
      tag.make.toLowerCase().includes(searchLower) ||
      tag.reportNo.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Master Tag List</h1>
          <p className="text-sm text-gray-500 mt-1 mb-4">Project Name</p>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
            New Tag
          </Button>
          <Button size="sm" variant="outline" className="border-gray-300">
            Bulk Import
          </Button>
        </div>
      </div>

      <div className="flex-1">
        <TagTable tags={filteredTags} onSearch={setSearchTerm} />
      </div>
    </div>
  );
}