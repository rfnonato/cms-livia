
import { Textarea } from "@/components/ui/textarea";

export const ParagraphBlockEditor = () => {
  return (
    <Textarea
      placeholder="Enter your text here..."
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      rows={4}
    />
  );
};
