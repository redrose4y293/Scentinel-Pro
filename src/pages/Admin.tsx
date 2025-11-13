import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, Package, AlertCircle } from "lucide-react";

const Admin = () => {
  // In real app, would check authentication and redirect if not admin
  
  return (
    <div className="min-h-screen flex flex-col bg-section-bg">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                  <p className="text-3xl font-bold">1,234</p>
                </div>
                <Users className="h-10 w-10 text-primary" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Devices Sold</p>
                  <p className="text-3xl font-bold">3,456</p>
                </div>
                <Package className="h-10 w-10 text-success" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Alerts</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <AlertCircle className="h-10 w-10 text-accent" />
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                  <p className="text-3xl font-bold">$123K</p>
                </div>
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
            </Card>
          </div>

          {/* Management Tabs */}
          <Card className="p-6">
            <Tabs defaultValue="blog" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                <TabsTrigger value="firmware">Firmware</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
              </TabsList>

              <TabsContent value="blog" className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Blog Management</h2>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                    New Post
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="p-4 border border-border rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Top 5 Home Safety Tips for 2025</p>
                      <p className="text-sm text-muted-foreground">Published Jan 15, 2025</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm border border-border rounded hover:bg-secondary">Edit</button>
                      <button className="px-3 py-1 text-sm border border-destructive text-destructive rounded hover:bg-destructive/10">Delete</button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="firmware" className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Firmware Versions</h2>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
                    Upload New
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="p-4 border border-border rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Version 2.1.3</p>
                      <p className="text-sm text-muted-foreground">Released Jan 10, 2025 • 12.4 MB</p>
                    </div>
                    <span className="px-3 py-1 bg-success/10 text-success rounded text-sm font-medium">Current</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="users" className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">User Management</h2>
                <p className="text-muted-foreground">User management features coming soon...</p>
              </TabsContent>

              <TabsContent value="alerts" className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Real-time Alerts</h2>
                <p className="text-muted-foreground">Alert dashboard features coming soon...</p>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;