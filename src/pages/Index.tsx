import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Users, Clock, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800">CommSync</h1>
          <div className="space-x-2 sm:space-x-4">
            <Link to="/signin">
              <Button variant="ghost" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition-colors">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative py-20 sm:py-32">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Background" 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 mix-blend-multiply" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">
                Streamline Your Communication Schedule
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 animate-fade-up delay-150 px-4 leading-relaxed">
                Keep track of your company communications effortlessly with our intuitive calendar system.
              </p>
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-lg animate-fade-up delay-300 transition-all duration-300 hover:shadow-xl"
                >
                  Start Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="p-8 bg-white rounded-xl shadow-md animate-fade-up hover:shadow-lg transition-all duration-300 border border-slate-100">
                <Calendar className="w-12 h-12 mb-4 text-indigo-500 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-slate-800">
                  Schedule Communications
                </h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  Easily plan and organize your company communications using our intuitive calendar interface.
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-md animate-fade-up delay-150 hover:shadow-lg transition-all duration-300 border border-slate-100">
                <Users className="w-12 h-12 mb-4 text-indigo-500 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-slate-800">
                  Manage Companies
                </h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  Keep track of all your company contacts and communication history in one place.
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-md animate-fade-up delay-300 hover:shadow-lg transition-all duration-300 border border-slate-100">
                <Clock className="w-12 h-12 mb-4 text-indigo-500 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center text-slate-800">
                  Never Miss a Follow-up
                </h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  Get timely reminders for upcoming communications and stay on top of your schedule.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base text-slate-600">
          © 2024 CommSync. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;