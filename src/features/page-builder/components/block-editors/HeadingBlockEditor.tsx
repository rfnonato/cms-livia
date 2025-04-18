
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const HeadingBlockEditor = () => {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Select defaultValue="h2">
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="h1">H1</SelectItem>
            <SelectItem value="h2">H2</SelectItem>
            <SelectItem value="h3">H3</SelectItem>
            <SelectItem value="h4">H4</SelectItem>
          </SelectContent>
        </Select>
        <Input defaultValue="Section Title" className="flex-1" />
      </div>
    </div>
  );
};
