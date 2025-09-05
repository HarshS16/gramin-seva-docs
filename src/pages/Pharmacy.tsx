import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  MapPin, 
  Search, 
  Filter, 
  Phone, 
  Clock, 
  Star,
  ArrowLeft,
  Navigation,
  ShoppingCart,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Pharmacy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPharmacy, setSelectedPharmacy] = useState<string | null>(null);

  const pharmacies = [
    {
      id: "1",
      name: "City Medical Store",
      address: "Main Road, Sector 5, Near City Hospital",
      distance: "1.2 km",
      rating: 4.5,
      isOpen: true,
      closingTime: "10:00 PM",
      phone: "+91 98765 43210",
      medicines: [
        { name: "Paracetamol 500mg", price: "₹25", inStock: true },
        { name: "Amoxicillin 250mg", price: "₹85", inStock: true },
        { name: "Cetirizine 10mg", price: "₹15", inStock: false }
      ]
    },
    {
      id: "2",
      name: "Health Plus Pharmacy",
      address: "Market Street, Near Bus Stand",
      distance: "2.1 km",
      rating: 4.3,
      isOpen: true,
      closingTime: "11:00 PM",
      phone: "+91 98765 43211",
      medicines: [
        { name: "Paracetamol 500mg", price: "₹28", inStock: true },
        { name: "Amoxicillin 250mg", price: "₹90", inStock: false },
        { name: "Cetirizine 10mg", price: "₹18", inStock: true }
      ]
    },
    {
      id: "3",
      name: "Apollo Pharmacy",
      address: "Shopping Complex, Ground Floor",
      distance: "3.5 km",
      rating: 4.7,
      isOpen: false,
      closingTime: "9:00 AM",
      phone: "+91 98765 43212",
      medicines: [
        { name: "Paracetamol 500mg", price: "₹22", inStock: true },
        { name: "Amoxicillin 250mg", price: "₹80", inStock: true },
        { name: "Cetirizine 10mg", price: "₹16", inStock: true }
      ]
    }
  ];

  const commonMedicines = [
    { name: "Paracetamol 500mg", category: "Pain Relief" },
    { name: "Amoxicillin 250mg", category: "Antibiotics" },
    { name: "Cetirizine 10mg", category: "Antihistamine" },
    { name: "Omeprazole 20mg", category: "Antacid" },
    { name: "Metformin 500mg", category: "Diabetes" },
    { name: "Amlodipine 5mg", category: "Blood Pressure" }
  ];

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
            <h1 className="text-2xl font-bold text-foreground">Find Medicines</h1>
          </div>
          <Button variant="outline">
            <Navigation className="h-4 w-4 mr-2" />
            Enable Location
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search Medicines</CardTitle>
            <CardDescription>Find medicines and compare prices across nearby pharmacies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for medicines..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            
            {/* Common Medicines */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Common medicines:</p>
              <div className="flex flex-wrap gap-2">
                {commonMedicines.map((medicine, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setSearchQuery(medicine.name)}
                  >
                    {medicine.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Medicine Alert */}
        <Card className="mb-8 border-warning bg-warning/5">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-warning" />
              <div>
                <p className="font-medium text-warning">Need medicine urgently?</p>
                <p className="text-sm text-muted-foreground">Call our 24/7 emergency medicine delivery service</p>
              </div>
              <Button variant="outline" className="ml-auto">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Nearby Pharmacies */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Nearby Pharmacies</h2>
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4 mr-2" />
              View on Map
            </Button>
          </div>

          {pharmacies.map((pharmacy) => (
            <Card key={pharmacy.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{pharmacy.name}</h3>
                      {pharmacy.isOpen ? (
                        <Badge className="bg-success/10 text-success">Open</Badge>
                      ) : (
                        <Badge variant="secondary">Closed</Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-1 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{pharmacy.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span>{pharmacy.rating}</span>
                      </div>
                      <span>{pharmacy.distance}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {pharmacy.isOpen ? `Closes at ${pharmacy.closingTime}` : `Opens at ${pharmacy.closingTime}`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedPharmacy(
                        selectedPharmacy === pharmacy.id ? null : pharmacy.id
                      )}
                    >
                      {selectedPharmacy === pharmacy.id ? "Hide" : "View"} Medicines
                    </Button>
                  </div>
                </div>

                {/* Medicine Availability */}
                {selectedPharmacy === pharmacy.id && (
                  <div className="border-t border-border pt-4">
                    <h4 className="font-medium mb-3">Medicine Availability</h4>
                    <div className="space-y-2">
                      {pharmacy.medicines.map((medicine, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-3 bg-muted/20 rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{medicine.name}</p>
                            <p className="text-lg font-bold text-primary">{medicine.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {medicine.inStock ? (
                              <>
                                <Badge className="bg-success/10 text-success">In Stock</Badge>
                                <Button size="sm">
                                  <ShoppingCart className="h-4 w-4 mr-1" />
                                  Order
                                </Button>
                              </>
                            ) : (
                              <Badge variant="secondary">Out of Stock</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Prescription */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Pill className="h-5 w-5 mr-2" />
              Upload Prescription
            </CardTitle>
            <CardDescription>
              Upload your prescription and we'll help you find the medicines at the best prices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Pill className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">
                Click to upload or drag and drop your prescription
              </p>
              <Button>
                Upload Prescription
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Pharmacy;