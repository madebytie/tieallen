import styles from "./love.module.css";
import LoveHero from "@/components/sections/LoveHero";

const featuredTestimonial = {
  name: "Core Love",
  role: "Creator of Sacred G",
  company: "Featured on MTV",
  highlight: "Tie could make an average company look like a booming all inclusive industry in a couple weeks with his skills."
};

const testimonials = [
  {
    name: "Kalen Wheeler",
    role: "Owner",
    company: "Blue Divine Med Spa",
    highlight: "After paying 5 companies who failed to give me a professional website I was sent to you and I'm so thankful! The website is absolutely beautiful, it's my dream website! I love your work and have never seen better!",
    text: "Thank you for everything! My business is already performing so much better with our new website. We are already getting new bookings and inquiries! I'm so excited and feel very blessed to have been referred to Tie! After paying 5 companies who failed to give me a professional website I was sent to you and I'm so thankful! The website is absolutely beautiful, it's my dream website! I love your work and have never seen better! I knew it would be worth it. Thank you for being such great communicators and keeping me updated! I'm super excited for the next phase, I can't wait for the e-commerce website! Thank you so much! My website is now both incredibly beautiful and is already helping grow my business after the first day of launching! So thankful!"
  },
  {
    name: "Matthew Haggett",
    role: "Founder",
    company: "mandelbulb.com",
    highlight: "Tie did everything I hoped for and then some. I would definitely recommend him.",
    text: "Tie did a great job with my site. He was easy to work with—fast, responsive, accurate, and thorough. He redeveloped a dated looking WordPress site and turned it into a flexible, functional, contemporary showpiece. The SEO aspect was a high priority in the project, and the site is always on the first page of Google results—and often the top Google result—in my specialty area. I could not have hoped for a better site or development experience. Tie did everything I hoped for and then some. I chose Tie because he had a strong portfolio and was genuinely interested in my content and my project. I would definitely recommend him."
  },
  {
    name: "Stephan Zenz",
    role: "Owner",
    company: "Exposé Hair Salon",
    highlight: "Every step of the way, he was accommodating and responsive. Five stars all the way. It was the best decision I made this year.",
    text: "As a small business / salon owner, I dreamt of a website that would tell our story and be our digital storefront. It's the first point of contact for any potential client searching on the web. In a matter of seconds, that person may move on. A good website is not important, it's crucial. It was good fortune that I met Michelle and Tie in person. Once we got started with the project, I anticipated a painful process. Instead, when the first draft arrived, it was already beyond expectations. All it took was some finishing touches and a couple of additions I had not thought of earlier. Every step of the way, he was accommodating and responsive. Now that I look at the final result, I am thrilled and confident I got the best. Five stars all the way. It was the best decision I made this year. I have previously had a website designed twice—each time it fell short in terms of performance across platforms, was impossible to maintain and update by myself, and required multiple changes and corrections. Do yourself a favour, for peace of mind and a brilliant result, choose Tie."
  },
  {
    name: "Jeanette Lucero",
    role: "Founder",
    company: "85-15 Lifestyle",
    highlight: "I have worked with several website development companies, but Tie tops them in ease and professionalism.",
    text: "WHAT A GREAT EXPERIENCE! It was such an easy process of build out and touch ups. Tie & Michelle really understood my vision and helped bring it to life. I am really excited to know that I now have them on my side as I grow and for adjustments. If there is one thing I have learned over the years it is that your website being clear and precise really matters. Thank you guys!"
  },
  {
    name: "Shannon Price",
    role: "Founder & Developer",
    company: "We Got Code",
    highlight: "The process couldn't have gone better and I couldn't be happier with the results.",
    text: "I recently worked with Tie to do a thorough rework of my business website. The process couldn't have gone better and I couldn't be happier with the results. The graphic design work was impressive – he seemed to know exactly the result I was going for. The work was delivered on time and the cost was very reasonable. I'll definitely work with Tie again in the future!"
  },
  {
    name: "Greg Jones",
    role: "Co-Founder",
    company: "Jennings Brands",
    highlight: "I would have Tie do my next website in a heartbeat.",
    text: "Jennings Brands needed a complete website overhaul and of course we needed it done yesterday. We decided to go with Tie based on his experience and his promise to execute within our timeline. In addition to a friendly, professional website, Tie also set us up with the other 'must have' components like analytic tools, social media integration and ecommerce (all mobile ready) and oh…ahead of schedule! I would have Tie do my next website in a heartbeat. Thanks for your knowledge, attention to detail and execution!"
  },
  {
    name: "Jenny Hudson",
    role: "Agent",
    company: "Wilson Hutchison Realty",
    highlight: "We really feel like the design of our website has helped market our business and make us look more reputable.",
    text: "We very much enjoyed working with Tie. He was very easy to talk to and get in touch with. We chose Tie because of some of his previous work that really caught our eye. He did not disappoint when designing our new website. We love the layout, graphics and all of the touches put in to really showcase our business. We really feel like the design of our website has helped market our business and make us look more reputable."
  },
  {
    name: "Mary Zimmer",
    role: "Founder",
    company: "A Great Impression",
    highlight: "Tie got me out of something that could have actually sunk my 8 year old company.",
    text: "Tie came into a situation that I know was a little unsure for him. I had been working with someone who had made my new website into a nightmare situation. I was stuck beyond knowing what to even do. Tie came into a mess, gave me great communication right from the start, took a look at everything, and began to fix before the ink was dry on our agreement. Tie went above and beyond to help me, on a weekend that he could have been with his family. Tie got me out of something that could have actually sunk my 8 year old company. From that beginning his service continued. We have continued to work together in a wonderful partnership, and I cannot say enough how peaceful it has been to have Tie on my team. He is knowledgeable and confident without being arrogant, or condescending. He makes wise suggestions, and cares very much for his clients."
  },
  {
    name: "Steve Faegan",
    role: "Founder",
    company: "UVC",
    highlight: "Tie's designs are next-level quality. Thank you for all you've done for us!",
    text: ""
  },
  {
    name: "Scott Cohen",
    role: "President",
    company: "Stanlok",
    highlight: "We are very happy with our results and would definitely recommend Tie as a strong resource for anyone's web-based marketing needs.",
    text: "Tie has helped us put a very professional digital face to our company. He redesigned an older, underperforming website and created a bold new look with greater functionality, better graphics and a more logical flow. Tie was great to work with. He guided us through the brainstorming process and came up to speed quickly on some of our technical product requirements. We are very happy with our results and would definitely recommend Tie as a strong resource for anyone's web-based marketing needs. We will continue to utilize him for larger projects in the future."
  },
  {
    name: "Mack Biggs",
    role: "CEO",
    company: "New Media Enterprises, Inc.",
    highlight: "He really understands Design & Branding and was able to deliver an end result beyond what I was expecting.",
    text: "It was a pleasure working with Tie. He really understands Design & Branding and was able to deliver an end result beyond what I was expecting. His design process was very thorough and the level of vibrancy and life he brought to our brand's image was high-end quality. Overall, the end result was just amazing and I would absolutely work with Tie again for future design needs."
  },
  {
    name: "Tonya Stelljas",
    role: "Advertising Marketing Director",
    company: "",
    highlight: "What an incredible website! I Love it!",
    text: "Very Beautiful! I'm continually impressed by your work. What an incredible website! I Love it! Great simplicity and not too much info but just the right amount of content to peak interest and allure all! A really great service especially with all components included. The look and feel across all areas are cohesive and great consistency throughout the entire Brand!"
  },
  {
    name: "Kit Thomas",
    role: "EMMY Award Winning Director & Producer",
    company: "",
    highlight: "This definitely stands alone as really quality world class design work.",
    text: "Beautiful work! Tie is capable of dialing into any flavor of design. This definitely stands alone as really quality world class design work."
  }
];

export default function LovePage() {
  return (
    <main className={styles.lovePage}>
      <LoveHero 
        title="Wall of Love"
        subtitle="I've been fortunate to work with some incredible humans over the years—here's what they have to say."
        image="/assets/IMG_3254.jpg"
        objectPosition="center 20%"
        overlay={true}
      />

      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          {/* Featured pullquote — large & centered */}
          <div className={styles.featured}>
            <p className={styles.featuredQuote}>"{featuredTestimonial.highlight}"</p>
            <div className={styles.featuredAuthor}>
              <span className={styles.featuredName}>{featuredTestimonial.name}</span>
              <span className={styles.featuredRole}>{featuredTestimonial.role}, {featuredTestimonial.company}</span>
            </div>
          </div>

          <div className={styles.divider} />

          {/* Masonry grid */}
          <div className={styles.masonryGrid}>
            {testimonials.map((t, idx) => (
              <div key={idx} className={styles.testimonialItem}>
                <p className={styles.highlight}>"{t.highlight}"</p>
                {t.text && <p className={styles.text}>{t.text}</p>}
                <div className={styles.author}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}{t.company ? `, ${t.company}` : ''}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
