---
layout: base.njk
title: Women Techmakers Meetups | Women Techmakers Vienna
---

<section class="wtm">
  <div class="container">
    <h1>Women Techmakers Meetups</h1>
    <p>Next meetups will happen in January 2026. <br>Follow <a href="https://www.meetup.com/women-techmakers-vienna/">WTM Vienna on MeetUp</a> to get notified about upcoming events.</p>
    <address>
      <h3>Location</h3>
      <p>enspired GmbH<br>
      located in Euro Plaza <br>
      Wagenseilgasse 3 <br>
      1120 Wien
      </p>
    </address>
    <h3>Public transport</h3>
    <ul>
      <li>Badner Bahn to Schedifkaplatz</li>
      <li>U6 to Meidling</li>
    </ul>
    <section class="past-meetups-section">
      <div class="container">
        <h2>Previous Events</h2>
        <p class="section-description">
          See what we've been up to! Relive the highlights, check out the schedules, and watch the recordings from our previous meetups.  
        </p>
        <div class="events-grid">
          {% for event in pastMeetups %}
          <div class="event-card">
            <div class="card-image">
              <img src="{{ event.image_url }}" alt="Photos from {{ event.name }} meetup" loading="lazy">
            </div>
            <div class="card-content">
              <span class="event-date">{{ event.date | date: "%B %Y" }}</span>
              <h3>{{ event.name }}</h3>
              <div class="event-details">
                <a href="{{ schedule.url }}" class="btn btn-secondary">
                  Schedule & Speakers
                </a>
              </div>
              <div class="card-actions">
                {% if event.livestream_url %}
                <a href="{{ event.livestream_url }}" class="btn btn-primary" target="_blank" rel="noopener">
                  ▶️ Watch Livestream
                </a>
                {% endif %}
                <a href="{{ event.url }}" class="btn btn-secondary">
                  View Event Photos
                </a>
              </div>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </section>
  </div>
</section>
