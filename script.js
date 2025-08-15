function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }
document.addEventListener('DOMContentLoaded', () => {
  // ----- Sticky sections: "The Philanthropist" -----
  const stickySections = [...document.querySelectorAll('.sticky')];

  const images = [
    'assets/images/Ant-Philanthropist.png',
    'assets/images/DFTW.png',
    'assets/images/AABCA.png',
    'assets/images/QSC.png',
    'assets/images/HBCU.png',
    'assets/images/Luca.png'
  ];

  images.forEach(img => {
    stickySections.forEach(section => {
      let container = document.createElement('div');

      container.style.display = 'flex';
      container.style.flexDirection = 'row';
      container.style.alignItems = 'center';
      container.style.width = img.includes('Golf-Charity') ? '2000px' : '1500px';
      container.style.marginRight = '50px';
      container.style.backgroundColor = 'black';

      let image = document.createElement('img');
      image.src = img;
      image.style.height = 'auto';
      image.style.borderRadius = '8px';

      let label = document.createElement('div');
      label.style.marginLeft = '30px';
      label.style.fontSize = '2rem';
      label.style.color = 'white';
      label.style.fontWeight = 'bold';

      if (img.includes('Ant-Philanthropist')) {
        image.style.width = '80%';
        label.textContent = 'The Philanthropist';
      } else if (img.includes('DFTW')) {
        image.style.width = '60%';
        label.textContent = 'Founded by Anthony Edwards and his business manager, Don’t Follow The Wave empowers student-athletes by educating them on sports-business careers, while championing youth, breast cancer awareness, single-mother support, and community uplift.';
      } else if (img.includes('AABCA')) {
        image.style.width = '60%';
        label.textContent = 'The African American Breast Cancer Alliance (AABCA) empowers Black families with culturally tailored support and education. Anthony Edwards-led initiatives amplify AABCA’s impact by fostering awareness, honoring survivor stories, and strengthening community resilience.';
      } else if (img.includes('QSC')) {
        image.style.width = '30%';
        label.textContent = "Queerspace Collective provides safe, affirming mentorship for LGBTQ+ youth in Minneapolis. Anthony Edwards contributed to its mission through a Pride Night donation, signaling his support and a step toward reconciliation with the LGBTQ+ community.";
      } else if (img.includes('HBCU')) {
        image.classList.add('scroll-image');
        image.style.width = '60%';
        label.textContent = "Anthony Edwards hosted F.A.I.T.H. youth football camps to mentor young athletes, combining sports training with his faith-driven leadership, nurturing character, athleticism, and community values through empowering outreach.";
      }else if (img.includes('Luca')) {
        image.classList.add('scroll-image');
        image.style.width = '60%';
        label.textContent = "Anthony Edwards wears a bracelet gifted by Luca, a young fan battling cancer. It symbolizes hope and resilience, inspiring Anthony to play with heart and support those facing tough challenges.";
      } else {
        image.style.width = '60%';
        label.textContent = 'Additional Coverage';
      }

      container.appendChild(image);
      container.appendChild(label);

      section.querySelector('.scroll_section')?.appendChild(container);
    });
  });

  function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }

  function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    if (!scrollSection) return;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = clamp(percentage, 0, 400);
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  }

  window.addEventListener('scroll', () => {
    stickySections.forEach(section => transform(section));
  });

  // ----- BUSINESSMAN horizontal scroll -----
  const businessmanSection = document.querySelector('.BusinessmanScroll_section');

  const businessmanImages = [
    {
      src: 'assets/images/Ant-Businessman.png',
      text: 'The Businessman',
      size: 'small1'
    },
    {
      src: 'assets/images/Anta-Claus.png',
      text: 'Anthony Edwards partnered with Sprite, embracing his playful personality and earning the nickname “Anta Claus” for his electrifying dunks and festive, crowd-pleasing style that connects with fans both on and off-court.',
      size: 'small2'
    },
    {
      src: 'assets/images/Fanatics.png',
      text: 'Anthony Edwards partnered with Fanatics to promote official sports merchandise, connecting with fans through exclusive gear, personalized apparel, and interactive campaigns that celebrate his career, style, and love for the game.',
      size: 'small3'
    },
    {
      src: 'assets/images/Hisense.png',
      text: "Anthony Edwards partnered with Hisense, showcasing the brand’s innovative TVs and technology in campaigns, blending his dynamic personality with cutting-edge entertainment products while connecting with fans both on and off the court.",
      size: 'big1'
    }
  ];

  if (businessmanSection) {
    businessmanImages.forEach(item => {
      let container = document.createElement('div');
      container.classList.add('slide');

      let image = document.createElement('img');
      image.src = item.src;
      image.classList.add(item.size);

      let label = document.createElement('div');
      label.classList.add('caption');
      label.textContent = item.text;

      container.appendChild(image);
      container.appendChild(label);
      businessmanSection.appendChild(container);
    });

    function transformBusinessman() {
      const sectionParent = document.querySelector('.BusinessmanSticky_Parent');
      if (!sectionParent) return;
      const sticky = sectionParent.querySelector('.BusinessmanSticky');
      if (!sticky) return;
      const scrollSection = sticky.querySelector('.BusinessmanScroll_section');
      if (!scrollSection) return;

      const offsetTop = sectionParent.offsetTop;
      const stickyHeight = sectionParent.clientHeight;
      const trackWidth = scrollSection.scrollWidth;
      const maxX = Math.max(0, trackWidth - window.innerWidth);

      const progress = clamp(
        (window.scrollY - offsetTop) / (stickyHeight - window.innerHeight),
        0, 1
      );

      const x = -maxX * progress;
      scrollSection.style.transform = `translate3d(${x}px, 0, 0)`;
    }

    window.addEventListener('scroll', transformBusinessman);
  }

  // ----- The Man horizontal scroll -----
  const ManSection = document.querySelector('.ManScroll_section');

  let ManImages = [
    {
      src: 'assets/images/The-Man-Cover.png',
      text: 'The Man',
      size: 'small1'
    },
    {
      src: 'assets/images/Anthony-Mom.png',
      text: 'Born August 5, 2001, in Atlanta, Anthony Edwards overcame tragedy after losing his mother and grandmother. Guided by siblings, he transitioned from football to basketball, developing into a generational athletic talent.',
      size: 'small2'
    },
    {
      src: 'assets/images/GrandMa-Ma.png',
      text: 'At age 14, Anthony Edwards lost his mother and grandmother to cancer months apart. Their memory drives his determination, inspiring him to honor their legacy through hard work and perseverance.',
      size: 'small3'
    },
    {
      src: 'assets/images/Ant-WithSiblings.png',
      text: "After losing his parents, Anthony Edwards was raised by his older brother and sister. They became his guardians, offering guidance, stability, and unwavering support throughout his journey to NBA stardom.",
      size: 'big1'
    },
    {
      src: 'assets/images/Ant-With-Friend.png',
      text: "Anthony Edwards values a tight circle of lifelong friends from Atlanta. Their loyalty, shared memories, and constant encouragement keep him grounded, reminding him of where he came from and who he represents.",
      size: 'big2'
    },
    {
      src: 'assets/images/Ant-Straight-Shot.png',
      text: "For Anthony Edwards, “I believe it and I put in the work” means pairing unshakable self-confidence with relentless preparation, proving that belief alone succeeds only when backed by consistent, focused effort.",
      size: 'big3'
    },
  ];

  if (ManSection) {
    ManImages.forEach(item => {
      let container = document.createElement('div');
      container.classList.add('slide');

      let image = document.createElement('img');
      image.src = item.src;
      image.classList.add(item.size);

      let label = document.createElement('div');
      label.classList.add('caption');
      label.textContent = item.text;

      container.appendChild(image);
      container.appendChild(label);
      ManSection.appendChild(container);
    });

    const SCROLL_PER_PX_MAN = 1.6; // same as The Athlete for equal speed
  function sizeManTrack() {
    const sectionParent = document.querySelector('.ManSticky_Parent');
    const sticky = sectionParent?.querySelector('.ManSticky');
    const track = sticky?.querySelector('.ManScroll_section');
    if (!sectionParent || !sticky || !track) return;

    const maxX = Math.max(0, track.scrollWidth - window.innerWidth);
    const targetHeightPx = window.innerHeight + maxX * SCROLL_PER_PX_MAN;
    sectionParent.style.height = `${targetHeightPx}px`;
  }
  window.addEventListener('load', sizeManTrack);
  window.addEventListener('resize', sizeManTrack);
  sizeManTrack();

    function transformMan() {
      const sectionParent = document.querySelector('.ManSticky_Parent');
      if (!sectionParent) return;
      const sticky = sectionParent.querySelector('.ManSticky');
      if (!sticky) return;
      const scrollSection = sticky.querySelector('.ManScroll_section');
      if (!scrollSection) return;

      const offsetTop = sectionParent.offsetTop;
      const stickyHeight = sectionParent.clientHeight;
      const trackWidth = scrollSection.scrollWidth;
      const maxX = Math.max(0, trackWidth - window.innerWidth);

      const progress = clamp(
        (window.scrollY - offsetTop) / (stickyHeight - window.innerHeight),
        0, 1
      );

      const x = -maxX * progress;
      scrollSection.style.transform = `translate3d(${x}px, 0, 0)`;
    }

    window.addEventListener('scroll', transformMan);
  }

  const video = document.querySelector('.highlight-video');
  function handleVideoZoom() {
    if (!video) return;
    const rect = video.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollRatio = 1 - Math.abs((rect.top + rect.bottom - windowHeight) / windowHeight);
    const scale = Math.max(0.9, Math.min(1.3, scrollRatio * 1.3));
    video.style.transform = `scale(${scale})`;
  }
  // keep one listener set
  window.addEventListener('scroll', handleVideoZoom);
  window.addEventListener('load', handleVideoZoom);

  const logos = document.querySelectorAll('.logo-container');

  const endorsementInfo = {
    Adidas: {
      title: "Adidas",
      lines: [
        "Anthony Edwards partners with Adidas,",
        "headlining signature basketball shoe releases.",
        "His collaboration blends performance",
        "innovation with bold style, reflecting his",
        "explosive game and elevating Adidas’",
        "presence among a new generation of NBA fans.",
      ]
    },
    FootLocker: {
      title: "Foot Locker",
      lines: [
        "Anthony Edwards teams with Foot Locker",
        "to promote athletic gear and lifestyle",
        "apparel, appearing in campaigns that",
        "highlight his charisma, style, and connection",
        "with fans both on and off the court.",
      ]
    },
    BBDD: {
      title: "Beats by Dre",
      lines: [
        "Anthony Edwards partners with Beats by Dre,",
        " showcasing their premium headphones",
        "in campaigns that fuse his pregame energy,",
        "personal style, and passion for music with",
        "the brand’s cutting-edge sound and culture.",
      ]
    },
    Aura: {
      title: "Aura",
      lines: [
        "Anthony Edwards serves as Aura’s brand",
        "ambassador and “Director of Trust,”",
        "partnering with the digital wellness",
        "company to promote online safety, while Aura",
        "holds the prestigious status of Timberwolves’",
        "official jersey-patch and presenting partner.",
      ]
    },
    Bose: {
      title: "Bose",
      lines: [
        "Anthony Edwards partners with Bose, showcasing",
        "their premium sound gear—like the Ultra Open",
        "Earbuds—in campaigns that blend his",
        "his on-court energy, personal style, and love for ",
        "music with the brand’s “Sound Is Power” ethos.",
      ]
    }
  };

  logos.forEach((logo, index) => {
    logo.addEventListener('click', () => {
      const isActive = logo.classList.contains('active');

      logos.forEach((l) => {
        l.classList.remove('active', 'shift-left', 'shift-right');
        const panel = l.querySelector('.endorsement-panel');
        if (panel) panel.remove();
      });

      if (isActive) return;

      logo.classList.add('active');

      logos.forEach((l, i) => {
        if (i < index) l.classList.add('shift-left');
        else if (i > index) l.classList.add('shift-right');
      });

      const brand = logo.getAttribute('data-brand');
      const info = endorsementInfo[brand];
      if (!info) return;

      const panel = document.createElement('div');
      panel.className = 'endorsement-panel';
      panel.innerHTML = `
        <h2>${info.title}</h2>
        ${info.lines.map(line => `<p>${line}</p>`).join('')}
      `;
      logo.appendChild(panel);
    });
  });

  const modal = document.getElementById('endorsement-modal');
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      logos.forEach(l => l.classList.remove('shift-left', 'shift-right', 'active'));
      document.querySelectorAll('.endorsement-panel').forEach(p => p.remove());
    });
  }

  // ----- Footlocker ad controls -----
  (function setupFootLockerAd() {
    const wrap = document.querySelector('.FootLocker-wrap');
    if (!wrap) return;

    const video = wrap.querySelector('.FootLockerAd');
    const btn = wrap.querySelector('.unmute-btn');
    if (!video || !btn) return;

    let hasLoaded = false;
    const updateBtn = () => { btn.textContent = video.muted ? 'Unmute ' : 'Mute '; };

    const io = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        if (!hasLoaded) { try { video.load(); } catch(_) {} hasLoaded = true; }
        try { await video.play(); } catch(_) {}
      } else {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
        updateBtn();
      }
    }, { threshold: [0, 0.6, 1] });

    io.observe(video);

    btn.addEventListener('click', async () => {
      video.muted = !video.muted;
      if (!video.muted) video.volume = 1.0;
      updateBtn();
      try { await video.play(); } catch(_) {}
    });

    video.addEventListener('click', () => {
      video.muted = !video.muted;
      updateBtn();
    });

    updateBtn();
  })();
});
  // ----- The Athlete horizontal scroll -----
  const athleteSection = document.querySelector('.AtheleteScroll_section');

  const athleteImages = [
    { src: 'assets/images/The-Athlete.png', text: 'The Athlete', size: 'athletesmall1' },
    { src: 'assets/images/GrandMa-Ma.png', text: 'On 2020 NBA Draft night, Anthony Edwards achieved his lifelong dream without his mother and grandmother present, honoring their memory with gratitude and determination as he became the Timberwolves’ first overall pick.', size: 'athletesmall2' },
    { src: 'assets/images/First-Team-Rookie.png', text: "In 2021, Anthony Edwards earned NBA All-Rookie First Team honors, showcasing explosive scoring, highlight-reel plays, and unwavering confidence, solidifying his status as one of the league’s most promising young stars."},
    { src: 'assets/images/Rookie-vs-Pistons.png', text: "During his rookie season, Anthony Edwards scored a career-high 42 points against the Pistons, displaying elite athleticism, shot-making, and confidence that signaled his arrival as a future NBA superstar.", size: 'athletesmall3'},
    { src: 'assets/images/Ant-vs-Nuggets.png', text: "Anthony Edwards became the youngest player in NBA history to hit 10 three-pointers in a game, showcasing his deep shooting range, confidence, and ability to dominate from beyond the arc.", size: 'athletesmall4'},
    { src: 'assets/images/49-points.png', text: "At age 21, Anthony Edwards scored a career-high 49 points, blending explosive drives, precise shooting, and relentless energy, further cementing his status as one of the NBA’s brightest young stars.", size: 'athletesmall5'},
    { src: 'assets/images/All-star-Ant.png', text: "In 2023, Anthony Edwards earned his first NBA All-Star selection, recognized for his explosive scoring, leadership, and dynamic play, marking a major milestone in his rapidly rising basketball career.", size: 'athletesmall6' },
    { src: 'assets/images/All-NBA.png', text: "In 2024, Anthony Edwards was named to the All-NBA Second Team, honoring his elite performance, consistency, and leadership, solidifying his place among the league’s most impactful and respected players.", size: 'atheletesmall7'},
    { src: 'assets/images/Most-3s.png', text: "Anthony Edwards set the Timberwolves’ franchise record for most three-pointers made, showcasing his evolving perimeter game, scoring versatility, and ability to change momentum with clutch shots from beyond the arc.", size: 'atheletsmall8'},
    { src: 'assets/images/Ant-playoff-defense.png', text: "In the playoffs, Anthony Edwards elevated his defense, locking down top scorers with relentless effort, quick reflexes, and physicality, proving he’s as committed to stopping opponents as scoring himself.", size: 'athletebig1' },
    { src: 'assets/images/Ant-Olympic.png', text: "Representing Team USA at the Olympics, Anthony Edwards showcased scoring, defense, and leadership, emerging as a breakout star while helping his country compete for gold on basketball’s most prestigious international stage.", size: 'athletebig2' },
  ];

  if (athleteSection) {
    athleteImages.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('slide');

      const img = document.createElement('img');
      img.src = item.src;
      img.classList.add(item.size);

      const cap = document.createElement('div');
      cap.classList.add('caption');
      cap.textContent = item.text;

      slide.appendChild(img);
      slide.appendChild(cap);
      athleteSection.appendChild(slide);
    });

    function transformAthlete() {
      const sectionParent = document.querySelector('.AtheleteSticky_Parent');
      if (!sectionParent) return;
      const sticky = sectionParent.querySelector('.AtheleteSticky');
      if (!sticky) return;
      const track = sticky.querySelector('.AtheleteScroll_section');
      if (!track) return;

      const offsetTop = sectionParent.offsetTop;
      const stickyHeight = sectionParent.clientHeight;
      const trackWidth = track.scrollWidth;
      const maxX = Math.max(0, trackWidth - window.innerWidth);

      const progress = clamp(
        (window.scrollY - offsetTop) / (stickyHeight - window.innerHeight),
        0, 1
      );

      const x = -maxX * progress;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    }

    // tune this: how many vertical pixels to scroll per 1px horizontal movement
const SCROLL_PER_PX = 1.6; // increase -> slower, decrease -> faster

function sizeAthleteTrack() {
  const sectionParent = document.querySelector('.AtheleteSticky_Parent');
  const sticky = sectionParent?.querySelector('.AtheleteSticky');
  const track = sticky?.querySelector('.AtheleteScroll_section');
  if (!sectionParent || !sticky || !track) return;

  const maxX = Math.max(0, track.scrollWidth - window.innerWidth);
  const targetHeightPx = window.innerHeight + maxX * SCROLL_PER_PX;

  // lock the parent height so progress maps 0..1 over the computed distance
  sectionParent.style.height = `${targetHeightPx}px`;
}

window.addEventListener('load', sizeAthleteTrack);
window.addEventListener('resize', sizeAthleteTrack);
sizeAthleteTrack();  // call once after slides are appended


    window.addEventListener('scroll', transformAthlete);
    window.addEventListener('resize', transformAthlete);
    window.addEventListener('load', transformAthlete);
    transformAthlete();
  } else {
    console.warn('No .AtheleteScroll_section found');
  }
