import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface TagSearchProps {
  onSearch: (value: string) => void;
}

export function TagSearch({ onSearch }: TagSearchProps) {
  return (
    <div className="relative w-48">
      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
        <Search className="h-3 w-3 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Input"
        className="pl-7 h-7 text-xs border-gray-300 rounded-sm"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}