import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Upload, 
  Download, 
  Calendar, 
  User, 
  Heart,
  Activity,
  Pill,
  TestTube,
  Shield,
  ArrowLeft,
  Search,
  Filter,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

const HealthRecords = () => {
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);

  const medicalRecords = [
    {
      id: "1",
      type: "Consultation",
      title: "General Checkup",
      doctor: "Dr. Priya Sharma",
      date: "2024-01-15",
      status: "Completed",
      category: "consultation"
    },
    {
      id: "2",
      type: "Lab Report",
      title: "Blood Test Results",
      doctor: "Dr. Rajesh Kumar",
      date: "2024-01-10",
      status: "Normal",
      category: "lab"
    },
    {
      id: "3",
      type: "Prescription",
      title: "Antibiotics Course",
      doctor: "Dr. Priya Sharma",
      date: "2024-01-05",
      status: "Active",
      category: "prescription"
    },
    {
      id: "4",
      type: "Vaccination",
      title: "COVID-19 Booster",
      doctor: "Health Center",
      date: "2023-12-20",
      status: "Completed",
      category: "vaccination"
    }
  ];

  const vitals = [
    { name: "Blood Pressure", value: "120/80", unit: "mmHg", status: "normal", date: "2024-01-15" },
    { name: "Heart Rate", value: "72", unit: "bpm", status: "normal", date: "2024-01-15" },
    { name: "Temperature", value: "98.6", unit: "°F", status: "normal", date: "2024-01-15" },
    { name: "Weight", value: "70", unit: "kg", status: "normal", date: "2024-01-15" },
    { name: "Blood Sugar", value: "95", unit: "mg/dL", status: "normal", date: "2024-01-10" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "normal": return "bg-success/10 text-success";
      case "active": return "bg-warning/10 text-warning";
      case "completed": return "bg-primary/10 text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "consultation": return <User className="h-4 w-4" />;
      case "lab": return <TestTube className="h-4 w-4" />;
      case "prescription": return <Pill className="h-4 w-4" />;
      case "vaccination": return <Shield className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Health Records</h1>
          </div>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Record
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="records" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="records">Medical Records</TabsTrigger>
            <TabsTrigger value="vitals">Vitals</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="allergies">Allergies</TabsTrigger>
          </TabsList>

          <TabsContent value="records" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search records..." className="pl-10" />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Record
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Records List */}
            <div className="space-y-4">
              {medicalRecords.map((record) => (
                <Card key={record.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {getCategoryIcon(record.category)}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-foreground">{record.title}</h3>
                            <Badge className={getStatusColor(record.status)}>
                              {record.status}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-2">{record.type}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{record.doctor}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(record.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vitals" className="space-y-6">
            {/* Vitals Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vitals.map((vital, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {vital.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {vital.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {vital.unit}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(vital.status)}>
                          {vital.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {new Date(vital.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Vitals Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Vitals Trends
                </CardTitle>
                <CardDescription>Track your health metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Activity className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Vitals chart will be displayed here</p>
                    <p className="text-sm">Connect wearable devices for automatic tracking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pill className="h-5 w-5 mr-2" />
                  Current Medications
                </CardTitle>
                <CardDescription>Manage your prescribed medications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h3 className="font-medium">Paracetamol 500mg</h3>
                      <p className="text-sm text-muted-foreground">2 tablets, twice daily</p>
                      <p className="text-sm text-muted-foreground">Prescribed by Dr. Priya Sharma</p>
                    </div>
                    <Badge className="bg-success/10 text-success">Active</Badge>
                  </div>
                  
                  <div className="text-center py-8 text-muted-foreground">
                    <Pill className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>No other active medications</p>
                    <Button variant="outline" className="mt-2">
                      Add Medication
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allergies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Allergies & Medical Conditions
                </CardTitle>
                <CardDescription>Important medical information for healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Shield className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No allergies or medical conditions recorded</p>
                  <Button variant="outline" className="mt-2">
                    Add Information
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default HealthRecords;