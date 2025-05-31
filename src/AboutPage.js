
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Meet Andres</h1>
        <p className="text-lg text-gray-600">
          Physician scientist, exercise physiologist, nutritionist and coach.
        </p>
      </header>

      <section className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src="/path-to-your-image.jpg"
            alt="Dr. Andres Digenio"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>I’m a physician scientist born in Montevideo, Uruguay, with a lifelong dedication to helping people live healthier lives. I hold an MD from the Universidad de la República (Uruguay), a PhD in exercise physiology, and a BSc (Hon) in Sports Medicine from the University of Cape Town (South Africa). I’m board certified in Preventive Medicine in the U.S.</p>

          <p>My medical career began in critical care, but it was while doing physicals at a Montevideo gym that I first noticed how profoundly diet and activity influence health and aging. That insight shaped my path.</p>

          <p>After moving to South Africa, I became Medical Director of the Johannesburg Cardiac Rehabilitation Center, where I led a team helping patients recover from heart attacks and bypass or valvular surgeries through lifestyle changes. I later established South Africa’s first hospital-based private wellness center and helped found the country’s Cardiovascular Rehabilitation Association.</p>

          <p>In the U.S., I joined Vanderbilt University as Medical Director of the Dayani Wellness Center and Clinical Director of its obesity clinic. Working closely with patients struggling with weight and chronic illness inspired me to reach more people—leading me to start the development of a web-based lifestyle program PulseStep, available in English, Spanish and French.</p>

          <p>I later transitioned to the pharmaceutical industry, where I guided clinical research in obesity, diabetes, and preventive cardiology for several major companies. One of my key achievements was persuading a large pharmaceutical firm to invest in the development of a lifestyle modification program to accompany a new weight loss medication—an approach that emphasized sustainable behavioral change alongside medical treatment.</p>

          <p>After serving as Vice President of Clinical Development at a biotech company, I chose to step away from the industry to return to my personal calling: helping people change their lifestyle. I launched PulseStep, promoting a Mediterranean diet, and after five successful years helping many people lose weight, I decided to discontinue it. Although the Mediterranean diet remains one of the healthiest options available, I became disillusioned—people in Mediterranean countries were still becoming obese and developing chronic diseases. This realization led me to conduct further research, which ultimately inspired The Natural Diet, the first book to take a strong, evidence-based stance on the avoidance of ultra-processed foods.</p>

          <p><strong>The Natural Diet</strong> blends scientifically grounded health strategies with storytelling to inspire readers to improve their eating habits, increase physical activity, and—most importantly—avoid ultra-processed foods, which I believe are the root cause of many chronic health issues today.</p>

          <p>I published 150+ papers and was a regular speaker at national and international conferences. I am a member of professional and patient organizations like the Obesity Society, the Obesity Action Coalition and the American Diabetes Association. I am active in health, diet, fitness, and medical social media groups with a total reach of 1.5 million.</p>

          <p>I live by the principles I teach—eating better, staying active, and continually learning. I’ve summited Mt. Kilimanjaro, experienced life on three continents, and enjoy diving, reading, playing chess online, and playing pickleball with my family and friends.</p>
        </div>
      </section>
    </div>
  );
}
