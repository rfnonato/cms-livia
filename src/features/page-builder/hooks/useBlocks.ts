
import { useState } from "react";
import { BlockType, BlockMoveDirection } from "../types";

export const useBlocks = () => {
  const [blocks, setBlocks] = useState<BlockType[]>([
    { id: 1, type: "heading" },
    { id: 2, type: "paragraph" },
    { id: 3, type: "image" },
  ]);

  const addBlock = (type: string) => {
    const newId = blocks.length > 0 ? Math.max(...blocks.map(b => b.id)) + 1 : 1;
    setBlocks([...blocks, { id: newId, type }]);
  };

  const removeBlock = (id: number) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  const moveBlock = (id: number, direction: BlockMoveDirection) => {
    const index = blocks.findIndex(block => block.id === id);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === blocks.length - 1)
    ) {
      return;
    }
    
    const newBlocks = [...blocks];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    
    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
    setBlocks(newBlocks);
  };

  return {
    blocks,
    addBlock,
    removeBlock,
    moveBlock
  };
};
