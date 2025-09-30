import Navigation from "@/components/Navigation";
import FeatureCard from "@/components/FeatureCard";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Users,
  Heart,
  BookOpen,
  GraduationCap,
  Globe,
  Award,
  Target,
  Compass,
  Wrench,
  Radio,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import heroImage from "@/assets/aviation-hero.jpg";
import captainImage from "@/assets/captain-vijay.png";

const Index = () => {
  const features = [
    {
      icon: Award,
      title: "Veteran Pilot Instructors",
      description:
        "Learn from experienced pilots with real-world aviation expertise and industry insights.",
    },
    {
      icon: Heart,
      title: "Personalized Mentorship",
      description:
        "One-on-one guidance tailored to your learning pace and career goals.",
    },
    {
      icon: Target,
      title: "Practical & Engaging Learning",
      description:
        "Hands-on training with interactive sessions that prepare you for real aviation scenarios.",
    },
    {
      icon: BookOpen,
      title: "Industry-Relevant Curriculum",
      description:
        "Up-to-date courses aligned with DGCA standards and industry requirements.",
    },
    {
      icon: Users,
      title: "Supportive Aviators' Community",
      description:
        "Join a network of aspiring pilots and aviation professionals for ongoing support.",
    },
  ];

  const programs = [
    {
      icon: Plane,
      title: "Pilot Training",
      description: "Comprehensive flight training programs",
      features: [
        "Private Pilot License (PPL)",
        "Commercial Pilot License (CPL)",
        "Airline Interview Prep",
        "Pre & Post Type Rating",
      ],
    },
    {
      icon: GraduationCap,
      title: "Ground School",
      description: "DGCA-focused theoretical training",
      features: [
        "DGCA-focused modules",
        "Interactive sessions",
        "Mock tests",
        "Doubt-clearing support",
      ],
    },
    {
      icon: Globe,
      title: "Career Mentorship",
      description: "Professional development and career guidance",
      features: [
        "Application & Interview Prep",
        "Simulator Training",
        "Global Aviation Insights",
        "Career Planning",
      ],
    },
  ];

  const subjects = [
    "Meteorology",
    "Air Regulations",
    "Air Navigation",
    "Technical General",
    "Technical Specific",
    "RTR-A",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Fly With Those Who've
            <br />
            Been There. Done That.
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-in-left"
            style={{ animationDelay: "200ms" }}
          >
            At Gypsy Aviators Aviation Academy, you're not just learning from
            trainers—you're learning from real pilots.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 shadow-hero animate-scale-in"
            style={{ animationDelay: "400ms" }}
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Welcome to Gypsy Aviators Aviation Academy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-in-right">
              With 7+ years of hands-on aviation experience, industry insights,
              and a passion for mentoring, we shape aviators and turn your dream
              of flying into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Not Just a Flight School – A Launchpad
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="animate-fade-in">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Our Courses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProgramCard
                  icon={program.icon}
                  title={program.title}
                  description={program.description}
                  features={program.features}
                />
              </div>
            ))}
          </div>

          {/* Subjects */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-center text-card-foreground mb-6">
                Core Aviation Subjects
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {subjects.map((subject, index) => (
                  <div
                    key={subject}
                    className="flex flex-col md:flex-row justify-center items-center bg-gradient-sky text-white md:px-4 py-3 rounded-lg animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span className="font-medium">{subject}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet Your Mentor Section */}
      <section id="mentor" className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Image */}
            <div className="lg:w-1/3">
              <div className="relative">
                <img
                  src={captainImage}
                  alt="Captain Vijay Simha - Aviation Mentor"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-elegant"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in">
                Meet Your Mentor
                <span className="block lg:inline lg:ml-2 text-primary">
                  – Capt. Vijay Simha
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-in-right">
                With 7+ years of aviation and real cockpit experience, Capt.
                Vijay Simha has trained 50+ aspiring pilots with near 100%
                success rates. Certified ground instructor and expert in all CPL
                subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Ready to Take Off?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-in-left">
              Whether you have questions, need guidance, or are ready to
              enroll—we're here to help.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="bg-card border-border shadow-card text-center animate-scale-in">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">Kukatpally, Hyderabad</p>
                </CardContent>
              </Card>

              <Card
                className="bg-card border-border shadow-card text-center animate-scale-in"
                style={{ animationDelay: "100ms" }}
              >
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    gypsyaviators@gmail.com
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-card border-border shadow-card text-center animate-scale-in"
                style={{ animationDelay: "200ms" }}
              >
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Phone
                  </h3>
                  <p className="text-muted-foreground">+91 8121859590</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-hero animate-fade-in"
                style={{ animationDelay: "300ms" }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/gypsy_aviators"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-background/80 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-background hover:text-background/80 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-background hover:text-background/80 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-background hover:text-background/80 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-background hover:text-background/80 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm">
                © 2025 Gypsy Aviators Aviation Academy. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
