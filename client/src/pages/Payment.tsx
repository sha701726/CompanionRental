import { ArrowLeft, QrCode, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Payment() {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const paymentMethods = [
    {
      title: "Paytm QR Code",
      description: "Scan with any UPI app or Paytm",
      qrImage: "/paytm-qr.jpg", // You'll upload your QR code here
      upiId: "nitin7400@ptaxis"
    },
    {
      title: "Google Pay",
      description: "Quick payment via Google Pay",
      upiId: "nit80379@okhdfcbank"
    },
    {
      title: "PhonePe",
      description: "Pay securely with PhonePe",
      upiId: "nitin7400@ptaxis"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => window.close()}
              className="p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Payment Options</h1>
              <p className="text-slate-600">Choose your preferred payment method</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <QrCode className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                {method.qrImage && (
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-slate-200">
                    <div className="text-slate-400 text-sm mb-2">QR Code will appear here</div>
                    <div className="text-xs text-slate-500">Upload your Paytm QR screenshot</div>
                  </div>
                )}
                
                <div className="bg-slate-100 p-3 rounded-lg">
                  <div className="text-sm text-slate-600 mb-1">UPI ID:</div>
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono">{method.upiId}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(method.upiId, "UPI ID")}
                      className="p-1"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 text-accent mr-3" />
            Payment Instructions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">How to Pay:</h3>
              <ol className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  Choose your preferred payment method above
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  Scan QR code or copy UPI ID to your payment app
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  Enter the amount as discussed during booking
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  Send payment screenshot to confirm booking
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Important Notes:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  50% advance payment secures your booking
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  Remaining amount payable after session
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  Refund available for cancellations 24hrs before
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                  Share payment proof via WhatsApp for confirmation
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button
              onClick={() => window.open('https://wa.me/917017267400?text=Hi Nitin! I have made the payment. Sharing screenshot now.', '_blank')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
            >
              Send Payment Confirmation via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}