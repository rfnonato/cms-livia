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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  File,
  FileEdit,
  Home,
  Eye,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Dummy data for pages
const pages = [
  {
    id: 1,
    title: "Home",
    slug: "/",
    template: "Default",
    status: "published",
    date: "2023-09-10",
    isHome: true,
  },
  {
    id: 2,
    title: "About",
    slug: "/about",
    template: "Default",
    status: "published",
    date: "2023-09-15",
    isHome: false,
  },
  {
    id: 3,
    title: "Contact",
    slug: "/contact",
    template: "Contact Form",
    status: "published",
    date: "2023-09-20",
    isHome: false,
  },
  {
    id: 4,
    title: "Services",
    slug: "/services",
    template: "Features",
    status: "published",
    date: "2023-10-05",
    isHome: false,
  },
  {
    id: 5,
    title: "Resources",
    slug: "/resources",
    template: "Default",
    status: "draft",
    date: "2023-11-01",
    isHome: false,
  },
];

export default function Pages() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Pages</h1>
            <p className="text-muted-foreground mt-1">
              Manage your static pages
            </p>
          </div>
          <Button 
            onClick={() => navigate("/admin/pages/new")} 
            className="flex items-center gap-1"
          >
            <Plus className="h-4 w-4" />
            <span>New Page</span>
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>All Pages</CardTitle>
            <CardDescription>View and manage your website pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search pages..."
                  className="pl-8 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>URL</TableHead>
                      <TableHead>Template</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPages.map((page) => (
                      <TableRow key={page.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {page.isHome ? (
                              <Home className="h-4 w-4 text-primary" />
                            ) : (
                              <File className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className="font-medium">{page.title}</span>
                            {page.isHome && (
                              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                                Home
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm text-muted-foreground">
                          {page.slug}
                        </TableCell>
                        <TableCell>{page.template}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={getStatusColor(page.status)}
                          >
                            {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(page.date).toLocaleDateString()}</TableCell>
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
                              <DropdownMenuItem onClick={() => navigate(`/admin/pages/edit/${page.id}`)}>
                                <FileEdit className="mr-2 h-4 w-4" />
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                <span>View</span>
                              </DropdownMenuItem>
                              {!page.isHome && (
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
