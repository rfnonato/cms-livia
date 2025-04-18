
import { Button } from "@/components/ui/button";
import { BlockType, BlockMoveDirection } from "../types";
import { BlockEditor } from "./BlockEditor";
import { BlockIcon } from "./BlockIcon";
import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";

type BlockProps = {
  block: BlockType;
  isFirst: boolean;
  isLast: boolean;
  onMove: (id: number, direction: BlockMoveDirection) => void;
  onRemove: (id: number) => void;
};

export const Block = ({ block, isFirst, isLast, onMove, onRemove }: BlockProps) => {
  return (
    <div className="border rounded-md p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BlockIcon type={block.type} />
          <span className="font-medium capitalize">{block.type}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onMove(block.id, "up")}
            className="h-8 w-8"
            disabled={isFirst}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onMove(block.id, "down")}
            className="h-8 w-8"
            disabled={isLast}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(block.id)}
            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div>
        <BlockEditor block={block} />
      </div>
    </div>
  );
};
