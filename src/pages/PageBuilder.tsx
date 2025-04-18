
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, Save, Layout } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Block } from "@/features/page-builder/components/Block";
import { BlockMenu } from "@/features/page-builder/components/BlockMenu";
import { useBlocks } from "@/features/page-builder/hooks/useBlocks";

export default function PageBuilder() {
  const navigate = useNavigate();
  const { blocks, addBlock, removeBlock, moveBlock } = useBlocks();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate("/pages")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">New Page</h1>
            <p className="text-muted-foreground mt-1">Create a new page for your website</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Page Editor</CardTitle>
                <CardDescription>Build your page using content blocks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Page Title</Label>
                  <Input id="title" placeholder="Enter page title..." />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Content Blocks</Label>
                    <BlockMenu onAddBlock={addBlock} />
                  </div>

                  <div className="space-y-4">
                    {blocks.map((block, index) => (
                      <Block
                        key={block.id}
                        block={block}
                        isFirst={index === 0}
                        isLast={index === blocks.length - 1}
                        onMove={moveBlock}
                        onRemove={removeBlock}
                      />
                    ))}

                    {blocks.length === 0 && (
                      <div className="flex flex-col items-center justify-center border border-dashed rounded-md py-8">
                        <Layout className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground text-sm">No content blocks yet</p>
                        <Button
                          variant="link"
                          onClick={() => addBlock("heading")}
                          className="mt-2"
                        >
                          Add your first block
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO</CardTitle>
                <CardDescription>Optimize your page for search engines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="seo-title">SEO Title</Label>
                  <Input id="seo-title" placeholder="SEO optimized title..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seo-description">Meta Description</Label>
                  <Textarea
                    id="seo-description"
                    placeholder="Brief description for search engines..."
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seo-keywords">Keywords</Label>
                  <Input id="seo-keywords" placeholder="digital, creator, influencer" />
                  <p className="text-xs text-muted-foreground mt-1">Separate keywords with commas</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Page Settings</CardTitle>
                <CardDescription>Configure page properties</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug</Label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                      /
                    </span>
                    <Input
                      id="slug"
                      placeholder="page-url"
                      className="rounded-l-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">The URL for your page</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template">Template</Label>
                  <Select defaultValue="default">
                    <SelectTrigger id="template">
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="landing">Landing Page</SelectItem>
                      <SelectItem value="contact">Contact Form</SelectItem>
                      <SelectItem value="features">Features/Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="home-page">Set as Home Page</Label>
                    <Switch id="home-page" />
                  </div>
                  <p className="text-xs text-muted-foreground">This will replace your current home page</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline" onClick={() => navigate("/pages")}>
                  Cancel
                </Button>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Page
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
