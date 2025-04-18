
import { BlockType } from "../types";
import { HeadingBlockEditor } from "./block-editors/HeadingBlockEditor";
import { ParagraphBlockEditor } from "./block-editors/ParagraphBlockEditor";
import { ImageBlockEditor } from "./block-editors/ImageBlockEditor";

type BlockEditorProps = {
  block: BlockType;
};

export const BlockEditor = ({ block }: BlockEditorProps) => {
  switch (block.type) {
    case "heading":
      return <HeadingBlockEditor />;
    case "paragraph":
      return <ParagraphBlockEditor />;
    case "image":
      return <ImageBlockEditor />;
    default:
      return (
        <div className="flex h-20 items-center justify-center border border-dashed rounded-md">
          {block.type} block editor
        </div>
      );
  }
};
