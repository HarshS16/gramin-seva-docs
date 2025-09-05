import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Stethoscope, 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  ArrowLeft,
  Mic,
  Languages,
  Clock,
  User
} from "lucide-react";
import { Link } from "react-router-dom";

const SymptomChecker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const steps = [
    "Describe Symptoms",
    "Additional Details", 
    "Risk Assessment",
    "Recommendations"
  ];

  const commonSymptoms = [
    "Fever", "Headache", "Cough", "Sore throat", "Fatigue", "Nausea",
    "Stomach pain", "Back pain", "Dizziness", "Chest pain", "Shortness of breath",
    "Skin rash", "Joint pain", "Muscle aches", "Difficulty sleeping"
  ];

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      setCurrentStep(3);
    }, 3000);
  };

  const riskLevel = "moderate"; // This would come from AI analysis
  
  const getRiskColor = (level: string) => {
    switch (level) {
      case "low": return "text-success";
      case "moderate": return "text-warning";
      case "high": return "text-emergency";
      default: return "text-muted-foreground";
    }
  };

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case "low": return "bg-success/10 text-success";
      case "moderate": return "bg-warning/10 text-warning";
      case "high": return "bg-emergency/10 text-emergency";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Analyzing Your Symptoms</h2>
          <p className="text-muted-foreground mb-6">Our AI is processing your information...</p>
          <Progress value={66} className="w-64 mx-auto" />
          <p className="text-sm text-muted-foreground mt-2">This may take a few moments</p>
        </div>
      </div>
    );
  }

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
            <h1 className="text-2xl font-bold text-foreground">AI Symptom Checker</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Languages className="h-4 w-4 mr-2" />
              हिंदी
            </Button>
            <Button variant="outline" size="sm">
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {index + 1}
                </div>
                <span className={`ml-2 text-sm ${
                  index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    index < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        {currentStep === 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="h-5 w-5 mr-2" />
                Describe Your Symptoms
              </CardTitle>
              <CardDescription>
                Tell us what you're experiencing. You can type or select from common symptoms.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Text Input */}
              <div>
                <label className="text-sm font-medium mb-2 block">Describe your symptoms</label>
                <div className="relative">
                  <Input
                    placeholder="I have been feeling..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="mb-2"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Common Symptoms */}
              <div>
                <label className="text-sm font-medium mb-3 block">Or select from common symptoms:</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {commonSymptoms.map((symptom) => (
                    <Button
                      key={symptom}
                      variant={selectedSymptoms.includes(symptom) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSymptomToggle(symptom)}
                      className="justify-start"
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Selected Symptoms */}
              {selectedSymptoms.length > 0 && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Selected symptoms:</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedSymptoms.map((symptom) => (
                      <Badge key={symptom} variant="secondary">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <Button 
                  onClick={() => setCurrentStep(1)}
                  disabled={selectedSymptoms.length === 0 && !userInput.trim()}
                >
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>
                Help us understand your condition better with some additional details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">When did symptoms start?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">Today</Button>
                    <Button variant="outline" size="sm">Yesterday</Button>
                    <Button variant="outline" size="sm">2-3 days ago</Button>
                    <Button variant="outline" size="sm">Over a week</Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Severity level</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm">Mild</Button>
                    <Button variant="outline" size="sm">Moderate</Button>
                    <Button variant="outline" size="sm">Severe</Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Age group</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">Under 18</Button>
                    <Button variant="outline" size="sm">18-35</Button>
                    <Button variant="outline" size="sm">35-60</Button>
                    <Button variant="outline" size="sm">Over 60</Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Gender</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm">Male</Button>
                    <Button variant="outline" size="sm">Female</Button>
                    <Button variant="outline" size="sm">Other</Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(0)}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <Button onClick={() => setCurrentStep(2)}>
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
              <CardDescription>
                Based on your symptoms, we'll provide a preliminary risk assessment.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <AlertTriangle className="h-16 w-16 text-warning mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ready to Analyze</h3>
                <p className="text-muted-foreground mb-6">
                  Our AI will analyze your symptoms and provide recommendations based on medical guidelines.
                </p>
                
                <div className="bg-muted/20 rounded-lg p-4 mb-6">
                  <h4 className="font-medium mb-2">Important Disclaimer</h4>
                  <p className="text-sm text-muted-foreground">
                    This tool provides general health information and should not replace professional medical advice. 
                    Always consult with a healthcare provider for proper diagnosis and treatment.
                  </p>
                </div>

                <Button size="lg" onClick={handleAnalyze}>
                  <Brain className="h-5 w-5 mr-2" />
                  Analyze Symptoms
                </Button>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && analysisComplete && (
          <div className="space-y-6">
            {/* Risk Level */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Analysis Complete
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className={`h-10 w-10 ${getRiskColor(riskLevel)}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Moderate Risk Level</h3>
                  <Badge className={getRiskBadgeColor(riskLevel)}>
                    Requires Attention
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/20 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Possible Conditions</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Viral upper respiratory infection (Common cold)</li>
                      <li>• Seasonal flu</li>
                      <li>• Allergic reaction</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-medium text-primary mb-2">Immediate Actions</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Rest and stay hydrated</li>
                      <li>• Monitor temperature</li>
                      <li>• Use over-the-counter fever reducers if needed</li>
                    </ul>
                  </div>

                  <div className="bg-warning/5 border border-warning/20 rounded-lg p-4">
                    <h4 className="font-medium text-warning mb-2">When to Seek Care</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Symptoms worsen after 3-5 days</li>
                      <li>• Fever above 103°F (39.4°C)</li>
                      <li>• Difficulty breathing</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link to="/consultation" className="flex-1">
                    <Button className="w-full">
                      <User className="h-4 w-4 mr-2" />
                      Consult a Doctor
                    </Button>
                  </Link>
                  <Link to="/pharmacy" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Find Medicines
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Warning */}
            <Card className="border-emergency bg-emergency/5">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-emergency" />
                  <div>
                    <p className="font-medium text-emergency">Emergency Warning</p>
                    <p className="text-sm text-muted-foreground">
                      If you experience severe symptoms like difficulty breathing, chest pain, or loss of consciousness, 
                      seek immediate emergency care.
                    </p>
                  </div>
                  <Button className="bg-emergency hover:bg-emergency/90 text-emergency-foreground ml-auto">
                    Emergency Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Disclaimer */}
        <Card className="mt-8 bg-muted/20">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-1">Medical Disclaimer</p>
                <p>
                  This symptom checker is for informational purposes only and is not a substitute for professional medical advice, 
                  diagnosis, or treatment. Always seek the advice of qualified health providers with any questions you may have 
                  regarding a medical condition.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SymptomChecker;