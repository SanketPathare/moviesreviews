import React from "react";
import { Film, Star, Users, Globe, Mail } from "lucide-react";
export default function About() {
  const features = [
    {
      icon: <Film className="w-6 h-6 " />,
      title: "Extensive Collection",
      description:
        "Access thousands of movies and TV shows across different genres, eras, and languages.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "User Reviews",
      description:
        "Share your thoughts and read honest reviews from our community of movie enthusiasts.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Features",
      description:
        "Create watchlists, follow other users, and participate in discussions about your favorite content.",
    },
  ];

  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <div className="flex items-center justify-center py-16">
        <div className="max-w-7xl mx-auto p-6 text-center">
          <h1 className="text-4xl font-bold mb-6">About Movies Reviews</h1>
          <p className="text-xl">
            Your Ultimate Destination for Movie Discovery and Reviews
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 ">
        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="">
            Welcome to Movies Reviews! We're passionate about creating the most
            comprehensive and user-friendly platform for movie enthusiasts. Our
            mission is to connect people through their love of cinema and
            provide accurate, detailed information about all forms of
            entertainment content. Whether you're a casual viewer or a dedicated
            cinephile, we strive to enhance your movie-watching experience with
            in-depth reviews, ratings, and recommendations.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-12 ">
          <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-900 dark:bg-white rounded-lg shadow-md"
              >
                <div className="text-sky-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 ">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 p-6 bg-neutral-900 dark:bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-sky-500 mr-2" />
                <h3 className="text-lg font-semibold">Contact Support</h3>
              </div>
              <p className="text-gray-500">
                Need help or have suggestions? Our support team is here to
                assist you.
              </p>
            </div>
            <div className="flex-1 p-6 bg-neutral-900 dark:bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 text-sky-500 mr-2" />
                <h3 className="text-lg font-semibold">Join Our Community</h3>
              </div>
              <p className="text-gray-500">
                Connect with other movie lovers and share your passion for
                cinema.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            Movies Reviews is constantly evolving. We appreciate your support in
            making this platform better every day.
          </p>
        </div>
      </div>
    </div>
  );
}
