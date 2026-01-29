---
layout: base.njk
title: Women Techmakers Vienna
---

<!-- Hero Section -->
<section class="hero" style="background: #0434AB; color: var(--white); padding: 4rem 0; text-align: center;">
  <div class="container">
    <h1 style="color: var(--white); font-size: 3.5rem; margin-bottom: 0.5rem;">Women Techmakers Conference</h1>
    <h2 style="color: var(--white); font-size: 2rem; margin-bottom: 2rem; font-weight: normal;"><b>March 14th 2026</b> @ TUtheSky</h2>
    
    <div class="hero-actions" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="https://147292833.hs-sites-eu1.com/wtmvienna" class="btn btn-event" style="font-size: 1.2rem; padding: 1rem 2rem;">Register Now</a>
        <a href="/conference/2026" class="btn" style="background: transparent; border: 2px solid var(--white); font-size: 1.2rem; padding: 1rem 2rem;">Conference Details</a>
    </div>
  </div>
</section>

<!-- Content Layout -->
<div class="container" style="display: flex; flex-wrap: wrap; gap: 3rem; margin-top: 3rem; margin-bottom: 3rem;">
  
  <!-- Main Content -->
  <div style="flex: 2; min-width: 300px;">
    <section class="about" style="padding: 0; text-align: left;">
      <h2 style="text-align: left; margin-bottom: 1rem;">About Women Techmakers Vienna</h2>
        <p style="margin: 0 0 2rem 0; padding: 0; max-width: 100%;">
          Women Techmakers Vienna is a vibrant community empowering <b>women and people with disabilities in tech</b> in the heart of Vienna. We foster an inclusive environment where every individual can thrive.
        </p>
      
      <div class="cards" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); padding: 0;">
        <div class="card" style="border: 1px solid #eaeaea;">
          <h3>Conference</h3>
          <img src="./assets/images/homepage/conference.png" width="250" height="170" alt="" />
          <p>Supporting women and people with disabilities in tech through the power of example.</p>
        </div>
        <div class="card" style="border: 1px solid #eaeaea;">
          <h3>MeetUps</h3>
          <img src="./assets/images/homepage/discussion.png" width="250" height="170" alt="" />
          <p>In-person meetups with experts and leaders to close the gender gap.</p>
        </div>
        <div class="card" style="border: 1px solid #eaeaea;">
          <h3>Workshops</h3>
          <img src="./assets/images/homepage/hackathon.png" width="250" height="170" alt="" />
          <p>High-tech workshops, hands-on experience, hacking and debugging.</p>
        </div>
      </div>
    </section>
  </div>

  <!-- Sidebar -->
  <aside style="flex: 1; min-width: 280px;">
    
    <!-- Next Meetup Widget -->
    <div class="sidebar-widget" style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; border-left: 4px solid var(--clr-green);">
      <h3 style="margin-top: 0; color: var(--clr-blue-dark);">🗓️ Next Meetup</h3>
      <p style="font-size: 1.1rem; margin-bottom: 1rem;">
        <b>Currently working on it</b><br>
        at enspired
      </p>
      <a href="#" class="btn btn-event" style="width: 100%; text-align: center;">Registration is opening soon</a>
    </div>

    <!-- Previous Meetups Widget -->
    <div class="sidebar-widget" style="margin-bottom: 2rem;">
      <h3 style="border-bottom: 2px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem;">Previous Meetups</h3>
      <p style="font-size: 1.1rem; margin-bottom: 1rem;">
        <b>January 28th, 2026</b><br>
        at enspired
      </p>
      <ul style="list-style: none; padding: 0;">
        {% for meetup in pastMeetups %}
          {% if loop.index <= 3 %}
          <li style="margin-bottom: 1rem;">
            <a href="{{ meetup.photo_album_url }}" target="_blank" style="font-weight: bold; color: var(--clr-blue);">{{ meetup.name }}</a>
            <br>
            <span style="color: #666; font-size: 0.9rem;">{{ meetup.date }}</span>
          </li>
          {% endif %}
        {% endfor %}
      </ul>
      <a href="/meetups" style="color: var(--clr-green-dark); font-weight: bold;">View All Previous Events &rarr;</a>
    </div>

    <!-- Quicklinks Widget -->
    <div class="sidebar-widget">
      <h3 style="border-bottom: 2px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem;">Quicklinks</h3>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 0.8rem;">
            <a href="/conference/2026" style="display: flex; align-items: center; color: var(--text-dark); text-decoration: none;">
                <span style="font-size: 1.2rem; margin-right: 0.5rem;">🎉</span> Conference 2026
            </a>
        </li>
        <li style="margin-bottom: 0.8rem;">
            <a href="/become-a-sponsor" style="display: flex; align-items: center; color: var(--text-dark); text-decoration: none;">
                <span style="font-size: 1.2rem; margin-right: 0.5rem;">🤝</span> Become a Sponsor
            </a>
        </li>
        <li style="margin-bottom: 0.8rem;">
            <a href="/cod" style="display: flex; align-items: center; color: var(--text-dark); text-decoration: none;">
                <span style="font-size: 1.2rem; margin-right: 0.5rem;">📜</span> Code of Conduct
            </a>
        </li>
        <li style="margin-bottom: 0.8rem;">
            <a href="mailto:team@womentechmakers.at" style="display: flex; align-items: center; color: var(--text-dark); text-decoration: none;">
                 <span style="font-size: 1.2rem; margin-right: 0.5rem;">✉️</span> Contact Us
            </a>
        </li>
      </ul>
    </div>

  </aside>

</div>

<section class="values">
  <div class="container">
    <h2>What we stand for</h2>
    <div class="cards">
      <div class="card">  
        <h3>🎯 Mission</h3>
        <p>
          To empower women and people with disabilities in Vienna's tech community through learning, innovation, and growth. We host engaging events, foster mentorship, and advocate for change to break down barriers in the STEM landscape.
        </p>
      </div>
      <div class="card">
        <h3>🙆 Values</h3>
        <p>
          We believe in inclusivity, respect, and collaboration as the cornerstones of progress. Our commitment to transparency, continuous learning, and mutual support ensures every voice is celebrated, fostering a culture of innovation where everyone can thrive.
        </p>
      </div>
      <div class="card">
        <h3>✨ Vision</h3>
        <p>
          To transform Vienna into a leading center for inclusive tech innovation. We envision a future where gender, ability, and background are celebrated as strengths, and opportunities in STEM are accessible to all, inspiring global change in the technology industry.
        </p>
      </div>
  </div>
</section>

<!-- Partners/Sponsors Section -->
<section class="partners">
  <div class="container">
  <h2>Sponsors & Partners</h2>
  <p>
    We extend our heartfelt thanks to our dedicated organizers and supportive partners for making our events a success and empowering women and people with disabilities in tech.
  </p>

  <h3>Platinum Sponsors</h3>
  <div class="partner-items">
    <div class="partner-item">
      <img src="/assets/images/sponsors/enspired.png" alt="enspired" width="350" height="350" />
    </div>
    <div class="partner-item">
      <img src="/assets/images/sponsors/tuwien.png" alt="TU Wien" width="350" height="350" />
    </div>
  </div>
    <h3>Partners & Organizers</h3>
    <div class="partner-items">
    <div class="partner-item">
      <a href="https://www.enspired-trading.com/">
        <img src="/assets/images/sponsors/enspired.png" alt="enspired" width="150" height="150">
      </a>
    </div>
    <div class="partner-item">
      <a href="https://developers.google.com/womentechmakers">
        <img src="/assets/images/WTM-logos/logo-full.png" alt="Women Techmakers" width="350" height="350">
      </a>
    </div>
    <div class="partner-item">
      <a href="https://gdg.community.dev/gdg-vienna/">
        <img src="/assets/images/sponsors/gdg-vienna.png" alt="GDG Vienna" width="250" height="250">
      </a>
    </div>
  </div>
  <a href="/become-a-sponsor/" class="btn">Become a Sponsor</a>
</div>
</section>

<section class="sdg-section">
  <h2>Our Commitment to the Sustainable Development Goals</h2>
  <p>We proudly align our work with the UN SDGs to promote inclusion, accessibility, and sustainability.</p>
  <div class="sdg-grid">
    <div class="sdg-item">
      <img src="/assets/images/sdg/5.png" alt="SDG 5 - Gender Equality">
      <h3>SDG 5</h3>
      <p>Empowering women in technology and advocating for gender balance.</p>
    </div>
    <div class="sdg-item">
      <img src="/assets/images/sdg/10.png" alt="SDG 10 - Reduced Inequalities">
      <h3>SDG 10</h3>
      <p>Championing accessibility and inclusion for people with disabilities.</p>
    </div>
    <div class="sdg-item">
      <img src="/assets/images/sdg/9.png" alt="SDG 9 - Industry, Innovation and Infrastructure">
      <h3>SDG 9</h3>
      <p>Innovative digital tools for accessibility and inclusion.</p>
    </div>
    <div class="sdg-item">
      <img src="/assets/images/sdg/11.png" alt="SDG 11 - Sustainable Cities and Communities">
      <h3>SDG 11</h3>
      <p>Promoting accessible mobility and assistive technology.</p>
    </div>
    <div class="sdg-item">
      <img src="/assets/images/sdg/13.png" alt="SDG 13 - Climate Action">
      <h3>SDG 13</h3>
      <p>Advocating for green code and eco-conscious solutions.</p>
    </div>
  </div>
  <p class="sdg-note">The SDG icons are used in line with UN guidelines to represent our commitment to these global goals.</p>
</section>
