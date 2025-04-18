import { useState } from "react";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Save,
  Globe,
  Share2,
  Paintbrush,
  User,
  Lock,
  KeyRound,
  Mail,
  BellRing,
  UploadCloud,
  Smartphone,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your CMS and website settings
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Card className="md:w-64 h-fit">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Configure your preferences</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <TabsList className="grid grid-cols-1 h-auto w-full rounded-none bg-transparent">
                <TabsTrigger
                  value="general"
                  className={`justify-start rounded-none border-l-2 px-4 py-3 text-sm font-medium transition-none data-[state=active]:border-l-primary ${
                    activeTab === "general" ? "border-l-primary bg-accent" : "border-l-transparent"
                  }`}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="profile"
                  className={`justify-start rounded-none border-l-2 px-4 py-3 text-sm font-medium transition-none data-[state=active]:border-l-primary ${
                    activeTab === "profile" ? "border-l-primary bg-accent" : "border-l-transparent"
                  }`}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="appearance"
                  className={`justify-start rounded-none border-l-2 px-4 py-3 text-sm font-medium transition-none data-[state=active]:border-l-primary ${
                    activeTab === "appearance" ? "border-l-primary bg-accent" : "border-l-transparent"
                  }`}
                >
                  <Paintbrush className="mr-2 h-4 w-4" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger
                  value="social"
                  className={`justify-start rounded-none border-l-2 px-4 py-3 text-sm font-medium transition-none data-[state=active]:border-l-primary ${
                    activeTab === "social" ? "border-l-primary bg-accent" : "border-l-transparent"
                  }`}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Social Media
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className={`justify-start rounded-none border-l-2 px-4 py-3 text-sm font-medium transition-none data-[state=active]:border-l-primary ${
                    activeTab === "notifications" ? "border-l-primary bg-accent" : "border-l-transparent"
                  }`}
                >
                  <BellRing className="mr-2 h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className={`justify-start rounded-none border-l-2 px-4 py-3 text-sm font-medium transition-none data-[state=active]:border-l-primary ${
                    activeTab === "security" ? "border-l-primary bg-accent" : "border-l-transparent"
                  }`}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Security
                </TabsTrigger>
              </TabsList>
            </CardContent>
          </Card>

          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Manage your website information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="site-name">Site Name</Label>
                      <Input id="site-name" defaultValue="ContentMinimal" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="site-url">Site URL</Label>
                      <Input id="site-url" defaultValue="https://contentminimal.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="site-description">Site Description</Label>
                      <Textarea
                        id="site-description"
                        defaultValue="A modern and minimalist CMS for digital influencers."
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="utc">
                        <SelectTrigger id="timezone">
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="et">Eastern Time (ET)</SelectItem>
                          <SelectItem value="ct">Central Time (CT)</SelectItem>
                          <SelectItem value="mt">Mountain Time (MT)</SelectItem>
                          <SelectItem value="pt">Pacific Time (PT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="pt">Portuguese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="maintenance">Maintenance Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Temporarily disable your site for visitors
                        </p>
                      </div>
                      <Switch id="maintenance" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Storage Settings</CardTitle>
                    <CardDescription>Manage your storage preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>File Upload Size</Label>
                        <p className="text-sm text-muted-foreground">
                          Maximum size for file uploads
                        </p>
                      </div>
                      <Select defaultValue="10">
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5MB</SelectItem>
                          <SelectItem value="10">10MB</SelectItem>
                          <SelectItem value="20">20MB</SelectItem>
                          <SelectItem value="50">50MB</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex items-center gap-4">
                        <UploadCloud className="h-8 w-8 text-muted-foreground" />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Storage Usage</p>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-full w-1/3 rounded-full bg-primary" />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Using 350MB of 1GB (35%)
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Manage your personal information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col items-center gap-3 sm:flex-row">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder.svg" alt="Profile" />
                        <AvatarFallback>UI</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">Profile Picture</p>
                        <p className="text-xs text-muted-foreground">
                          Upload a new photo (JPG or PNG, max 5MB)
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline">
                            Upload
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-500">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="User Influencer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="display-name">Display Name</Label>
                        <Input id="display-name" defaultValue="User" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="user@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" defaultValue="Administrator" disabled />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Write a short bio..."
                        rows={4}
                        defaultValue="Digital content creator and influencer passionate about technology and minimalist design."
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Profile
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="appearance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance Settings</CardTitle>
                    <CardDescription>Customize how your site looks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex cursor-pointer flex-col items-center gap-2 rounded-md border p-4 hover:border-primary">
                          <div className="h-20 w-full rounded-md bg-[#FFFFFF]"></div>
                          <span className="text-sm">Light</span>
                        </div>
                        <div className="flex cursor-pointer flex-col items-center gap-2 rounded-md border p-4 hover:border-primary">
                          <div className="h-20 w-full rounded-md bg-[#1E293B]"></div>
                          <span className="text-sm">Dark</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Accent Color</Label>
                      <div className="grid grid-cols-4 gap-2">
                        {["#8B5CF6", "#EC4899", "#F97316", "#10B981"].map((color) => (
                          <div
                            key={color}
                            className="flex h-10 cursor-pointer items-center justify-center rounded-md"
                            style={{ backgroundColor: color }}
                          >
                            <span className="sr-only">{color}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="font">Font Family</Label>
                      <Select defaultValue="inter">
                        <SelectTrigger id="font">
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inter">Inter</SelectItem>
                          <SelectItem value="roboto">Roboto</SelectItem>
                          <SelectItem value="poppins">Poppins</SelectItem>
                          <SelectItem value="montserrat">Montserrat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="animations">Animations</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable animations throughout the site
                        </p>
                      </div>
                      <Switch id="animations" defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Appearance
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="social" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Social Media Links</CardTitle>
                    <CardDescription>Connect your social media accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">instagram.com/</span>
                        <Input id="instagram" placeholder="username" className="flex-1" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="youtube">YouTube</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">youtube.com/</span>
                        <Input id="youtube" placeholder="channel" className="flex-1" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">twitter.com/</span>
                        <Input id="twitter" placeholder="username" className="flex-1" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tiktok">TikTok</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">tiktok.com/@</span>
                        <Input id="tiktok" placeholder="username" className="flex-1" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Social Sharing</Label>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4 className="text-sm font-medium">Auto Share Posts</h4>
                            <p className="text-xs text-muted-foreground">
                              Automatically share new posts to social media
                            </p>
                          </div>
                          <Switch id="auto-share" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Social Links
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifs">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about your content via email
                        </p>
                      </div>
                      <Switch id="email-notifs" defaultChecked />
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Notification Types</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>New Comments</Label>
                            <p className="text-xs text-muted-foreground">
                              When someone comments on your content
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>New Subscribers</Label>
                            <p className="text-xs text-muted-foreground">
                              When someone subscribes to your newsletter
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>Content Performance</Label>
                            <p className="text-xs text-muted-foreground">
                              Weekly content performance reports
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label>System Updates</Label>
                            <p className="text-xs text-muted-foreground">
                              New features and system updates
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Preferences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Change Password</h3>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                      <Button className="mt-3">Update Password</Button>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
                            <p className="text-xs text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch id="2fa" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Sessions</h3>
                      <div className="rounded-md border">
                        <div className="p-4 border-b">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-primary/10">
                                <Smartphone className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">Current Session</p>
                                <p className="text-xs text-muted-foreground">
                                  Last active: Just now
                                </p>
                              </div>
                            </div>
                            <Badge>Active</Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-muted">
                                <Smartphone className="h-4 w-4 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">iPhone Safari</p>
                                <p className="text-xs text-muted-foreground">
                                  Last active: 2 days ago
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-red-500">
                              Log Out
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
