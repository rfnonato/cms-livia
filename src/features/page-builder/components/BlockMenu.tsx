
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BlockIcon } from "./BlockIcon";

type BlockMenuProps = {
  onAddBlock: (type: string) => void;
};

export const BlockMenu = ({ onAddBlock }: BlockMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" />
          Add Block
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Choose Block Type</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onAddBlock("heading")}>
          <BlockIcon type="heading" className="h-4 w-4 mr-2" />
          <span>Heading</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddBlock("paragraph")}>
          <BlockIcon type="paragraph" className="h-4 w-4 mr-2" />
          <span>Paragraph</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddBlock("image")}>
          <BlockIcon type="image" className="h-4 w-4 mr-2" />
          <span>Image</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddBlock("list")}>
          <BlockIcon type="list" className="h-4 w-4 mr-2" />
          <span>List</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddBlock("video")}>
          <BlockIcon type="video" className="h-4 w-4 mr-2" />
          <span>Video</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddBlock("quote")}>
          <BlockIcon type="quote" className="h-4 w-4 mr-2" />
          <span>Quote</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAddBlock("grid")}>
          <BlockIcon type="grid" className="h-4 w-4 mr-2" />
          <span>Grid Layout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
