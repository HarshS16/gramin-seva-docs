import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  MessageSquare, 
  Calendar,
  Star,
  Clock,
  User,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Consultation = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isInCall, setIsInCall] = useState(false);

  const availableDoctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "General Medicine",
      rating: 4.8,
      experience: "8 years",
      available: true,
      price: "₹500",
      languages: ["Hindi", "English"]
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialization: "Pediatrics",
      rating: 4.9,
      experience: "12 years",
      available: true,
      price: "₹600",
      languages: ["Hindi", "English", "Punjabi"]
    },
    {
      id: 3,
      name: "Dr. Anita Desai",
      specialization: "Dermatology",
      rating: 4.7,
      experience: "10 years",
      available: false,
      price: "₹700",
      languages: ["Hindi", "English", "Gujarati"]
    }
  ];

  if (isInCall) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        {/* Video Call Interface */}
        <div className="flex-1 relative">
          {/* Doctor's Video */}
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-white text-center">
              <User className="h-24 w-24 mx-auto mb-4 opacity-50" />
              <p className="text-xl">Dr. Priya Sharma</p>
              <p className="text-gray-400">General Medicine</p>
            </div>
          </div>

          {/* User's Video (PiP) */}
          <div className="absolute top-4 right-4 w-48 h-36 bg-gray-800 rounded-lg border-2 border-white overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-white">
              <User className="h-12 w-12 opacity-50" />
            </div>
          </div>

          {/* Call Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-4 bg-black/50 rounded-full px-6 py-4">
              <Button
                size="icon"
                variant={isVideoOn ? "secondary" : "destructive"}
                className="h-12 w-12 rounded-full"
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
              </Button>
              
              <Button
                size="icon"
                variant={isAudioOn ? "secondary" : "destructive"}
                className="h-12 w-12 rounded-full"
                onClick={() => setIsAudioOn(!isAudioOn)}
              >
                {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
              </Button>

              <Button
                size="icon"
                variant="secondary"
                className="h-12 w-12 rounded-full"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                variant="destructive"
                className="h-12 w-12 rounded-full"
                onClick={() => setIsInCall(false)}
              >
                <PhoneOff className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Call Info */}
          <div className="absolute top-4 left-4 bg-black/50 rounded-lg px-4 py-2 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Connected • 05:32</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Video Consultation</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-emergency bg-emergency/5">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-emergency mx-auto mb-2" />
              <h3 className="font-semibold text-emergency mb-1">Emergency Call</h3>
              <p className="text-sm text-muted-foreground mb-3">Connect immediately</p>
              <Button className="bg-emergency hover:bg-emergency/90 text-emergency-foreground">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Schedule Appointment</h3>
              <p className="text-sm text-muted-foreground mb-3">Book for later</p>
              <Button variant="outline">Schedule</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Chat Support</h3>
              <p className="text-sm text-muted-foreground mb-3">Text consultation</p>
              <Button variant="outline">Start Chat</Button>
            </CardContent>
          </Card>
        </div>

        {/* Search Doctors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find a Doctor</CardTitle>
            <CardDescription>Search by specialization or symptoms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input 
                placeholder="Search by specialization, symptoms, or doctor name..." 
                className="flex-1"
              />
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Available Doctors */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Available Doctors</h2>
          
          {availableDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-foreground">{doctor.name}</h3>
                        {doctor.available && (
                          <Badge variant="secondary" className="bg-success/10 text-success">
                            Available
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-2">{doctor.specialization}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>{doctor.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-sm text-muted-foreground">Languages:</span>
                        {doctor.languages.map((lang, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {doctor.price}
                    </div>
                    <div className="space-y-2">
                      {doctor.available ? (
                        <Button
                          onClick={() => setIsInCall(true)}
                          className="w-full"
                        >
                          <Video className="h-4 w-4 mr-2" />
                          Start Call
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full" disabled>
                          Unavailable
                        </Button>
                      )}
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Consultation;