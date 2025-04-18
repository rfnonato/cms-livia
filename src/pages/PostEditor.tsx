
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
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Calendar, AlignLeft, Image, Link, List, ListOrdered, Save } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

export default function PostEditor() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate("/posts")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">New Post</h1>
            <p className="text-muted-foreground mt-1">Create a new blog post</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-6">
          <div className="md:col-span-4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>Write your post content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter post title..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <div className="border rounded-md p-1">
                    <div className="flex flex-wrap gap-1 border-b p-1 mb-2">
                      <Button variant="ghost" size="icon" title="Bold">
                        <span className="font-bold">B</span>
                      </Button>
                      <Button variant="ghost" size="icon" title="Italic">
                        <span className="italic">I</span>
                      </Button>
                      <Button variant="ghost" size="icon" title="Heading">
                        <AlignLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="List">
                        <List className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Numbered List">
                        <ListOrdered className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Add Image">
                        <Image className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Add Link">
                        <Link className="h-4 w-4" />
                      </Button>
                    </div>
                    <Textarea
                      id="content"
                      placeholder="Write your post content here..."
                      rows={12}
                      className="border-0 focus-visible:ring-0 resize-none p-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Write a short excerpt for your post..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO</CardTitle>
                <CardDescription>Optimize your post for search engines</CardDescription>
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
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input id="keywords" placeholder="content, blog, digital, creator" />
                  <p className="text-xs text-muted-foreground mt-1">Separate keywords with commas</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publish</CardTitle>
                <CardDescription>Manage publishing options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visibility">Visibility</Label>
                  <Select defaultValue="public">
                    <SelectTrigger id="visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="password">Password Protected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="publish-date">Publish Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="publish-date" type="date" className="pl-10" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button variant="outline">Save as Draft</Button>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Publish
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Organize your content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tutorials">Tutorials</SelectItem>
                      <SelectItem value="growth">Growth</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="resources">Resources</SelectItem>
                      <SelectItem value="news">News</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="content, blog, tips" />
                  <p className="text-xs text-muted-foreground mt-1">Separate tags with commas</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
                <CardDescription>Add a visual to your post</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center border border-dashed rounded-md h-40 cursor-pointer hover:bg-muted/50 transition-colors">
                  <Image className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Click to add image or drag and drop
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
