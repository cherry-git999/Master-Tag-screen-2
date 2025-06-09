import { useState } from "react";
import { Tag } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";

interface TagTableProps {
  tags: Tag[];
  onSearch: (value: string) => void;
}

export function TagTable({ tags, onSearch }: TagTableProps) {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const toggleTag = (id: number) => {
    setSelectedTags((prev) =>
      prev.includes(id) ? prev.filter((tagId) => tagId !== id) : [...prev, id]
    );
  };

  const toggleAllTags = () => {
    if (selectedTags.length === tags.length) {
      setSelectedTags([]);
    } else {
      setSelectedTags(tags.map((tag) => tag.id));
    }
  };

  return (
    <div className="w-fit">
      <div className="border rounded-md">
        {/* Search bar integrated above table */}
        <div className="bg-gray-50 border-b px-4 py-2">
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
              <Search className="h-3 w-3 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Input"
              className="pl-7 h-6 text-xs border-gray-300 rounded-sm bg-white"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
        
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow className="hover:bg-gray-50 h-8">
              <TableHead className="w-12 h-8 text-center">
                <div className="flex justify-center">
                  <Checkbox
                    checked={selectedTags.length === tags.length && tags.length > 0}
                    onCheckedChange={toggleAllTags}
                    aria-label="Select all"
                  />
                </div>
              </TableHead>
              <TableHead className="w-16 text-xs font-medium text-center">S NO.</TableHead>
              <TableHead className="text-xs font-medium w-28">TAG NO.</TableHead>
              <TableHead className="text-xs font-medium w-20">INST. TYPE</TableHead>
              <TableHead className="text-xs font-medium w-24">MAKE</TableHead>
              <TableHead className="text-xs font-medium w-20">CAL DATE</TableHead>
              <TableHead className="text-xs font-medium w-24">REPORT NO.</TableHead>
              <TableHead className="text-xs font-medium w-20">ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tags.map((tag) => (
              <TableRow key={tag.id} className="h-8 hover:bg-gray-50">
                <TableCell className="py-1 text-center">
                  <div className="flex justify-center">
                    <Checkbox
                      checked={selectedTags.includes(tag.id)}
                      onCheckedChange={() => toggleTag(tag.id)}
                      aria-label={`Select tag ${tag.tagNo}`}
                    />
                  </div>
                </TableCell>
                <TableCell className="py-1 text-xs text-center">{tag.serialNo}</TableCell>
                <TableCell className="py-1 text-xs">{tag.tagNo}</TableCell>
                <TableCell className="py-1 text-xs">{tag.instType}</TableCell>
                <TableCell className="py-1 text-xs">{tag.make}</TableCell>
                <TableCell className="py-1 text-xs">{tag.calDate}</TableCell>
                <TableCell className="py-1 text-xs">{tag.reportNo}</TableCell>
                <TableCell className="py-1">
                  <Button
                    variant="link"
                    size="sm"
                    className="text-blue-600 h-auto p-0 text-xs"
                    asChild
                  >
                    <a href={`/tags/${tag.id}`}>View Tag</a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}