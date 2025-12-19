"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Coffee, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="mediumSizeExtraSmallSpacing"
      background="noise"
      cardStyle="inset"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "#menu"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Discover Your Perfect Cup"
          description="Handcrafted coffee beverages made with premium beans from sustainable sources around the world"
          tag="Specialty Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "#menu" },
            { text: "Visit Us", href: "#contact" }
          ]}
          carouselItems={[
            {
              id: "carousel-1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072258848-gplqn194.jpg",
              imageAlt: "Premium espresso shot"
            },
            {
              id: "carousel-2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139800506-2izztgb9.jpg",
              imageAlt: "Creamy cappuccino"
            },
            {
              id: "carousel-3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072259772-irg1vrov.jpg",
              imageAlt: "Refreshing iced coffee"
            },
            {
              id: "carousel-4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766160718211-lb0rnlzz.jpg",
              imageAlt: "Strong espresso"
            },
            {
              id: "carousel-5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072256607-48o3q63l.jpg",
              imageAlt: "Decadent mocha"
            },
            {
              id: "carousel-6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139802219-k6w8pvso.jpg",
              imageAlt: "Classic macchiato"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Crafted with passion, served with pride. We believe every cup tells a story of origin, roasting expertise, and dedication to quality."
          buttons={[
            { text: "Our Story", href: "#contact" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Drinks"
          description="Explore our carefully curated selection of specialty coffee beverages"
          tag="Menu"
          tagIcon={Sparkles}
          products={[
            {
              id: "espresso",
              name: "Classic Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139803345-mpi91384.jpg",
              imageAlt: "Single or double shot espresso",
              initialQuantity: 1
            },
            {
              id: "latte",
              name: "Silky Latte",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766160718839-9ynigqjm.jpg",
              imageAlt: "Smooth espresso with steamed milk",
              initialQuantity: 1
            },
            {
              id: "americano",
              name: "Americano",
              price: "$4.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766160719358-vhelxy3o.jpg",
              imageAlt: "Bold espresso with hot water",
              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Why Coffee Lovers Choose Us"
          description="Proven excellence in every metric"
          tag="By The Numbers"
          metrics={[
            {
              id: "1",
              value: "8000+",
              title: "Happy Coffee Drinkers",
              items: ["Loyal customers since 2015", "Growing community daily"]
            },
            {
              id: "2",
              value: "25",
              title: "Specialty Beverages",
              items: ["Seasonal limited editions", "Custom drink creations"]
            },
            {
              id: "3",
              value: "12",
              title: "Coffee Bean Origins",
              items: ["Ethically sourced farms", "Direct trade partnerships"]
            },
            {
              id: "4",
              value: "4.9/5",
              title: "Average Customer Rating",
              items: ["Trusted quality consistency", "Exceptional service"]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Our Customers Say"
          description="Real reviews from real coffee enthusiasts"
          tag="Testimonials"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              nameTitle: "Maria Chen, Local Barista",
              quote: "The quality of their beans is outstanding. I recommend Brew & Bean to all my friends. The espresso pulls are consistently perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262056-5fc6gm95.jpg",
              imageAlt: "Maria Chen portrait"
            },
            {
              id: "2",
              nameTitle: "James Mitchell, Coffee Enthusiast",
              quote: "Best coffee shop in town. The atmosphere is welcoming and the staff really knows their craft. I've been coming here for three years.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072263646-sc25uolx.jpg",
              imageAlt: "James Mitchell portrait"
            },
            {
              id: "3",
              nameTitle: "Sarah Johnson, Business Owner",
              quote: "Perfect spot for morning meetings. The coffee is exceptional and the WiFi is reliable. Can't ask for more.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262868-xhcc7k2g.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "4",
              nameTitle: "David Kim, Student",
              quote: "My go-to place for studying. Great coffee, friendly baristas, and the perfect environment to focus. Worth every penny.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072264557-nwn1qdme.jpg",
              imageAlt: "David Kim portrait"
            },
            {
              id: "5",
              nameTitle: "Emily Rodriguez, Food Blogger",
              quote: "The latte art is beautiful and the taste is even better. Their commitment to sustainability is admirable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262056-5fc6gm95.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "6",
              nameTitle: "Thomas Brown, Regular Customer",
              quote: "Five years and counting. The consistency in quality and service is unmatched. This is my second home.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072263646-sc25uolx.jpg",
              imageAlt: "Thomas Brown portrait"
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofOne
          title="Trusted By Leading Brands"
          description="We partner with premium coffee suppliers and ethical sourcing organizations"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139808424-mna7nt0w.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139809173-8cuxps6z.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139809955-6pjg7i02.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139810762-1euljwkk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139811510-n9knt0v0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139812276-3mjs656a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139812995-8sbtos96.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Visit Brew & Bean"
          description="Located in the heart of downtown, we're open Monday through Sunday. Come experience the perfect cup of coffee."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your favorite coffee order...",
            rows: 4,
            required: false
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139806112-sg2xn65q.jpg"
          imageAlt="Cozy coffee shop interior"
          mediaPosition="right"
          buttonText="Get In Touch"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766139807067-hyte1626.jpg"
          imageAlt="Coffee beans background"
          logoText="Brew & Bean"
          copyrightText="© 2025 Brew & Bean Coffee. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Espresso Drinks", href: "#menu" },
                { label: "Cold Beverages", href: "#menu" },
                { label: "Pastries", href: "#menu" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "#about" },
                { label: "Sourcing", href: "#about" },
                { label: "Sustainability", href: "#about" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Mon-Fri: 6am - 8pm" },
                { label: "Sat-Sun: 7am - 9pm" },
                { label: "Closed on Major Holidays" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}