
import {
  Heading,
  AlignLeft,
  Image,
  List,
  Check,
  Video,
  Quote,
  Grid,
  Layout,
} from "lucide-react";

type BlockIconProps = {
  type: string;
  className?: string;
};

export const BlockIcon = ({ type, className = "h-5 w-5" }: BlockIconProps) => {
  switch (type) {
    case "heading":
      return <Heading className={className} />;
    case "paragraph":
      return <AlignLeft className={className} />;
    case "image":
      return <Image className={className} />;
    case "list":
      return <List className={className} />;
    case "checklist":
      return <Check className={className} />;
    case "video":
      return <Video className={className} />;
    case "quote":
      return <Quote className={className} />;
    case "grid":
      return <Grid className={className} />;
    default:
      return <Layout className={className} />;
  }
};
