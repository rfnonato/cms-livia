
import { Input } from "@/components/ui/input";
import { Image } from "lucide-react";

export const ImageBlockEditor = () => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col items-center justify-center border border-dashed rounded-md h-40 cursor-pointer hover:bg-muted/50 transition-colors">
        <Image className="h-10 w-10 text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground">
          Click to add image or drag and drop
        </p>
      </div>
      <Input placeholder="Alt text for accessibility" />
    </div>
  );
};
