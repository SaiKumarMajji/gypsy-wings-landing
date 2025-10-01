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
  Star,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/aviation-hero.jpg";
import captainImage from "@/assets/captain-vijay.png";
import hamsaImage from "@/assets/hamsa-durgesh.png";

const Index = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      review: "Exceptional training experience! The instructors are highly knowledgeable and supportive. I cleared my CPL exams with confidence thanks to Gypsy Aviators.",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      review: "Best aviation academy in Hyderabad! The personalized mentorship and practical approach made all the difference in my pilot training journey.",
    },
    {
      name: "Arjun Reddy",
      rating: 5,
      review: "Captain Vijay's teaching methods are outstanding. His real-world experience and dedication helped me achieve my aviation dreams.",
    },
    {
      name: "Sneha Patel",
      rating: 5,
      review: "The ground school program is comprehensive and well-structured. Mock tests and doubt-clearing sessions were extremely helpful for DGCA exams.",
    },
    {
      name: "Vikram Singh",
      rating: 5,
      review: "Professional and supportive environment. The career mentorship program gave me valuable insights into the aviation industry.",
    },
  ];

  const partners = [
    { name: "United States", flag: "🇺🇸" },
    { name: "India", flag: "🇮🇳" },
    { name: "Philippines", flag: "🇵🇭" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Europe", flag: "🇪🇺" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "New Zealand", flag: "🇳🇿" },
  ];

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

      {/* Meet Your Mentors Section */}
      <section id="mentor" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Meet Your Mentors
            </h2>
          </div>

          {/* Mentor 1 - Captain Vijay Simha */}
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto mb-20">
            <div className="lg:w-1/3">
              <div className="relative">
                <img
                  src={captainImage}
                  alt="Captain Vijay Simha - Aviation Mentor"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-elegant"
                />
              </div>
            </div>

            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                <span className="text-primary">Capt. Vijay Simha</span>
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With 7+ years of aviation and real cockpit experience, Capt.
                Vijay Simha has trained 50+ aspiring pilots with near 100%
                success rates. Certified ground instructor and expert in all CPL
                subjects.
              </p>
            </div>
          </div>

          {/* Mentor 2 - Hamsa Durgesh */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/3">
              <div className="relative">
                <img
                  src={hamsaImage}
                  alt="Hamsa Durgesh - Founder and Instructor"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-elegant"
                />
              </div>
            </div>

            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                <span className="text-primary">Hamsa Durgesh</span> - Founder & Instructor
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Hello, I'm Hamsa Durgesh, Founder and Instructor at Gypsy Aviators Aviation Academy - GAAA. With over 10+ years of experience in the aviation industry, I've had the privilege of working across different areas of aviation and training, which allows me to bring real-world knowledge and professional insights to every student I mentor.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Throughout my career, I've trained and guided aspiring pilots, helping them develop not just the technical skills, but also the confidence, discipline, and professionalism needed to thrive in this highly competitive industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Gypsy Aviators, what sets our teaching apart is a personalized approach—I believe every student has unique strengths, and I work closely to bring out the best in them. My goal is to create an environment where learning is not just about passing exams, but about building a strong foundation for a successful aviation career.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aviation is more than a career—it's a passion. And through this academy, my mission is to inspire the next generation of aviators to aim higher, dream bigger, and soar with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section id="reviews" className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              What Our Students Say
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-card border-border shadow-card h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                          "{review.review}"
                        </p>
                        <p className="font-semibold text-card-foreground">
                          – {review.name}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              We Are Partnered With
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={partner.name}
                className="bg-card border-border shadow-card text-center animate-scale-in hover:shadow-elegant transition-shadow"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{partner.flag}</div>
                  <h3 className="font-semibold text-card-foreground text-lg">
                    {partner.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
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
