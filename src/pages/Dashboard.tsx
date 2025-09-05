import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, FileText, Pill, Stethoscope, Calendar, User, Bell, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">SehatSaathi</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Your health is our priority. How can we help you today?</p>
        </div>

        {/* Emergency Button */}
        <Card className="mb-8 border-emergency bg-emergency/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-emergency mb-2">Emergency Consultation</h3>
                <p className="text-muted-foreground">Connect with a doctor immediately</p>
              </div>
              <Button size="lg" className="bg-emergency hover:bg-emergency/90 text-emergency-foreground">
                Emergency Call
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/consultation">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Video className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Video Consultation</CardTitle>
                <CardDescription>Connect with doctors online</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/health-records">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Health Records</CardTitle>
                <CardDescription>View your medical history</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/pharmacy">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Pill className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Find Medicines</CardTitle>
                <CardDescription>Locate nearby pharmacies</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/symptom-checker">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Stethoscope className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Symptom Checker</CardTitle>
                <CardDescription>AI-powered health assessment</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Recent Activities and Upcoming Appointments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Dr. Sharma</p>
                    <p className="text-sm text-muted-foreground">General Consultation</p>
                    <p className="text-sm text-muted-foreground">Today, 3:00 PM</p>
                  </div>
                  <Button size="sm">Join Call</Button>
                </div>
                <div className="text-center py-4 text-muted-foreground">
                  <p>No more appointments scheduled</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Nearby Healthcare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">City Hospital</p>
                    <p className="text-sm text-muted-foreground">2.5 km away</p>
                    <p className="text-sm text-success">Open 24/7</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Health Pharmacy</p>
                    <p className="text-sm text-muted-foreground">1.2 km away</p>
                    <p className="text-sm text-success">Open until 10 PM</p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;