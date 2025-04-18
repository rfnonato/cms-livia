
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Clock,
  Download,
  Mail,
  MailCheck,
  MailX,
  MoreHorizontal,
  PenSquare,
  Plus,
  Search,
  Send,
  Trash2,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Dummy data for subscribers
const subscribers = [
  {
    id: 1,
    email: "user1@example.com",
    name: "John Doe",
    status: "active",
    date: "2023-09-15",
    source: "Website",
  },
  {
    id: 2,
    email: "user2@example.com",
    name: "Jane Smith",
    status: "active",
    date: "2023-10-05",
    source: "Instagram",
  },
  {
    id: 3,
    email: "user3@example.com",
    name: "Mike Johnson",
    status: "inactive",
    date: "2023-08-20",
    source: "YouTube",
  },
  {
    id: 4,
    email: "user4@example.com",
    name: "Sarah Williams",
    status: "active",
    date: "2023-11-01",
    source: "Website",
  },
  {
    id: 5,
    email: "user5@example.com",
    name: "Alex Brown",
    status: "unsubscribed",
    date: "2023-07-12",
    source: "Website",
  },
];

// Dummy data for campaigns
const campaigns = [
  {
    id: 1,
    title: "October Newsletter",
    status: "sent",
    date: "2023-10-15",
    opens: 427,
    clicks: 128,
    recipients: 573,
  },
  {
    id: 2,
    title: "New Course Announcement",
    status: "draft",
    date: "2023-11-10",
    opens: 0,
    clicks: 0,
    recipients: 0,
  },
  {
    id: 3,
    title: "Holiday Special",
    status: "scheduled",
    date: "2023-12-01",
    opens: 0,
    clicks: 0,
    recipients: 573,
  },
  {
    id: 4,
    title: "September Updates",
    status: "sent",
    date: "2023-09-10",
    opens: 401,
    clicks: 95,
    recipients: 550,
  },
];

export default function Newsletter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("subscribers");

  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscriber.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "unsubscribed":
        return "bg-red-100 text-red-800";
      case "sent":
        return "bg-blue-100 text-blue-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      case "scheduled":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCampaignIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <MailCheck className="h-4 w-4 text-blue-500" />;
      case "draft":
        return <PenSquare className="h-4 w-4 text-gray-500" />;
      case "scheduled":
        return <Clock className="h-4 w-4 text-purple-500" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Newsletter</h1>
            <p className="text-muted-foreground mt-1">
              Manage subscribers and send newsletters
            </p>
          </div>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={activeTab === "subscribers" ? "default" : "outline"}>
                  <Users className="h-4 w-4 mr-2" />
                  Add Subscriber
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Subscriber</DialogTitle>
                  <DialogDescription>
                    Add a new subscriber to your newsletter
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="source">Source</Label>
                    <Select>
                      <SelectTrigger id="source">
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="manual">Manual Entry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add Subscriber</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant={activeTab === "campaigns" ? "default" : "outline"}>
                  <Send className="h-4 w-4 mr-2" />
                  Create Campaign
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create Newsletter Campaign</DialogTitle>
                  <DialogDescription>
                    Craft a new newsletter to send to your subscribers
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-title">Campaign Title</Label>
                    <Input id="campaign-title" placeholder="November Newsletter" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Email Subject Line</Label>
                    <Input id="subject" placeholder="Check out our latest update!" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Email Content</Label>
                    <div className="border rounded-md p-1">
                      <div className="flex flex-wrap gap-1 border-b p-1 mb-2">
                        <Button variant="ghost" size="icon" title="Bold">
                          <span className="font-bold">B</span>
                        </Button>
                        <Button variant="ghost" size="icon" title="Italic">
                          <span className="italic">I</span>
                        </Button>
                        <Button variant="ghost" size="icon" title="Link">
                          <span className="underline">Link</span>
                        </Button>
                      </div>
                      <Textarea
                        id="content"
                        placeholder="Write your newsletter content here..."
                        rows={12}
                        className="border-0 focus-visible:ring-0 resize-none p-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="recipients">Recipients</Label>
                      <Select defaultValue="all">
                        <SelectTrigger id="recipients">
                          <SelectValue placeholder="Select recipients" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Subscribers</SelectItem>
                          <SelectItem value="active">Active Only</SelectItem>
                          <SelectItem value="recent">Recent Subscribers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="send-time">Send Time</Label>
                      <Select defaultValue="now">
                        <SelectTrigger id="send-time">
                          <SelectValue placeholder="Select send time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="now">Send Immediately</SelectItem>
                          <SelectItem value="schedule">Schedule</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DialogFooter className="flex justify-between">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Send Newsletter</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <Tabs 
              defaultValue="subscribers" 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
                  <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                  <TabsTrigger value="integrations">Integrations</TabsTrigger>
                </TabsList>
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={activeTab === "subscribers" ? "Search subscribers..." : "Search campaigns..."}
                    className="pl-8 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <TabsContent value="subscribers" className="pt-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Subscribed Date</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSubscribers.map((subscriber) => (
                        <TableRow key={subscriber.id}>
                          <TableCell className="font-medium">{subscriber.email}</TableCell>
                          <TableCell>{subscriber.name}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={getStatusColor(subscriber.status)}
                            >
                              {subscriber.status.charAt(0).toUpperCase() + subscriber.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(subscriber.date).toLocaleDateString()}</TableCell>
                          <TableCell>{subscriber.source}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="h-8 w-8 p-0"
                                >
                                  <span className="sr-only">Open menu</span>
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" />
                                  <span>Send Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <PenSquare className="mr-2 h-4 w-4" />
                                  <span>Edit</span>
                                </DropdownMenuItem>
                                {subscriber.status !== "unsubscribed" ? (
                                  <DropdownMenuItem>
                                    <MailX className="mr-2 h-4 w-4" />
                                    <span>Unsubscribe</span>
                                  </DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem>
                                    <MailCheck className="mr-2 h-4 w-4" />
                                    <span>Reactivate</span>
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredSubscribers.length} of {subscribers.length} subscribers
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="campaigns" className="pt-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Recipients</TableHead>
                        <TableHead>Performance</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCampaigns.map((campaign) => (
                        <TableRow key={campaign.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getCampaignIcon(campaign.status)}
                              <span className="font-medium">{campaign.title}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={getStatusColor(campaign.status)}
                            >
                              {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(campaign.date).toLocaleDateString()}</TableCell>
                          <TableCell>{campaign.recipients}</TableCell>
                          <TableCell>
                            {campaign.status === "sent" ? (
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span>Opens: {campaign.opens} ({Math.round(campaign.opens / campaign.recipients * 100)}%)</span>
                                  <span>Clicks: {campaign.clicks} ({Math.round(campaign.clicks / campaign.recipients * 100)}%)</span>
                                </div>
                                <Progress value={Math.round(campaign.opens / campaign.recipients * 100)} className="h-2" />
                              </div>
                            ) : (
                              <span className="text-sm text-muted-foreground">
                                {campaign.status === "draft" ? "Not sent yet" : "Scheduled"}
                              </span>
                            )}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="h-8 w-8 p-0"
                                >
                                  <span className="sr-only">Open menu</span>
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                {campaign.status !== "sent" && (
                                  <DropdownMenuItem>
                                    <PenSquare className="mr-2 h-4 w-4" />
                                    <span>Edit</span>
                                  </DropdownMenuItem>
                                )}
                                {campaign.status === "draft" && (
                                  <DropdownMenuItem>
                                    <Send className="mr-2 h-4 w-4" />
                                    <span>Send Now</span>
                                  </DropdownMenuItem>
                                )}
                                {campaign.status === "sent" && (
                                  <DropdownMenuItem>
                                    <ChevronDown className="mr-2 h-4 w-4" />
                                    <span>View Report</span>
                                  </DropdownMenuItem>
                                )}
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" />
                                  <span>Preview</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="integrations" className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-md p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-md bg-red-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Mailchimp</h3>
                        <p className="text-sm text-muted-foreground">Connect your Mailchimp account</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Connect</Button>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center">
                        <span className="font-bold text-green-600">CK</span>
                      </div>
                      <div>
                        <h3 className="font-medium">ConvertKit</h3>
                        <p className="text-sm text-muted-foreground">Connect your ConvertKit account</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Connect</Button>
                  </div>
                  <div className="border rounded-md p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                        <span className="font-bold text-blue-600">SG</span>
                      </div>
                      <div>
                        <h3 className="font-medium">SendGrid</h3>
                        <p className="text-sm text-muted-foreground">Connect your SendGrid account</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Connect</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </DashboardLayout>
  );
}
