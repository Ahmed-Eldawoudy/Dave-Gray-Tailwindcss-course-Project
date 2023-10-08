let testimonials = [
  {
    quate:
      "Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience.",
    auther: "Wile E. Coyote, Genius",
  },
  {
    quate:
      "The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several occassions. This makes me very, very angry! Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and sturdy designs.",
    auther: "Marvin The Martian & K-9",
  },
  {
    quate:
      "I knew I not only wanted — I needed — Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing says Take me to your leader like Acme's Infinity Rocket! 💯",
    auther: "Buzz Lightyear",
  },
];

const generatTestimonials = (arr) => {
  let items = "";
  arr.map((testimonial) => {
    items += `<div class="my-12">
    <div class="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
        <p
            class="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\\201D'] dark:text-slate-400 sm:text-3xl">
            ${testimonial.quate}
        </p>
    </div>
    <p class="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
        —${testimonial.auther}
    </p>
</div>`;
  });
  return items;
};

document.getElementById("testimonials-container").innerHTML =
  generatTestimonials(testimonials);
