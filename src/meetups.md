---
layout: base.njk
title: Women Techmakers Meetups | Women Techmakers Vienna
---

<section class="meetups-hero">
  <div class="container meetups-hero__inner">
    <div class="meetups-hero__text">
      <span class="meetups-hero__eyebrow">Community Events</span>
      <h1>Women Techmakers Meetups</h1>
      <p>Next meetups will happen in May 2026. Follow <a href="https://www.linkedin.com/company/women-techmakers-vienna/">WTM Vienna on LinkedIn</a> and subscribe to our <a href="https://147292833.hs-sites-eu1.com/women-techmakers-vienna">newsletter</a> to stay in the loop.</p>
    </div>
  </div>
</section>

<section class="meetups-info">
  <div class="container meetups-info__grid">
    <div class="meetups-info__block">
      <span class="meetups-info__icon" aria-hidden="true">📍</span>
      <div>
        <h2>Location</h2>
        <address>
          <strong>enspired GmbH</strong><br>
          Euro Plaza, Wagenseilgasse 3<br>
          1120 Wien
        </address>
      </div>
    </div>
    <div class="meetups-info__divider" aria-hidden="true"></div>
    <div class="meetups-info__block">
      <span class="meetups-info__icon" aria-hidden="true">🚇</span>
      <div>
        <h2>Public Transport</h2>
        <ul class="meetups-transport-list">
          <li>Badner Bahn → Schedifkaplatz</li>
          <li>U6 → Meidling</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="meetups-past">
  <div class="container">
    <header class="meetups-past__header">
      <h2>Previous Events</h2>
      <p>Relive the highlights — browse schedules, speakers, and recordings from our past meetups.</p>
    </header>
    <ul class="meetup-list" role="list">
      {%- for event in pastMeetups -%}
      <li class="meetup-list-item">
        <time class="meetup-list-date" datetime="{{ event.date }}">{{ event.date | date: "%B %Y" }}</time>
        <span class="meetup-list-name">{{ event.name }}</span>
        <span class="meetup-list-links">
          {%- if event.schedule and event.schedule != "" -%}
          <a href="{{ event.schedule }}" class="meetup-link" target="_blank" rel="noopener">Schedule &amp; Speakers</a>
          {%- endif -%}
          {%- if event.livestream_url and event.livestream_url != "" -%}
          <a href="{{ event.livestream_url }}" class="meetup-link meetup-link--primary" target="_blank" rel="noopener">▶ Recording</a>
          {%- endif -%}
          {%- if event.photo_album_url and event.photo_album_url != "" -%}
          <a href="{{ event.photo_album_url }}" class="meetup-link" target="_blank" rel="noopener">Photos</a>
          {%- endif -%}
        </span>
      </li>
      {%- endfor -%}
    </ul>
  </div>
</section>
