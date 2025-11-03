---
layout: base.njk
title: Jobs | Women Techmakers Vienna
---

<section class="iwd">
  <div class="container">
    <h1>Connect with Great Companies</h1>
    <p>Explore the latest job openings from companies looking to hire talented tech professionals like you. Women Techmakers Austria is proud to feature these roles from a variety of companies within our network.</p>
    <p>
To apply, simply click on a job that interests you, and you will be taken directly to the company's career page to complete your application. We hope this resource helps you take the next step in your career journey.</p>

  <div class="jobs-container">
  <div class="page-header">
  <div class="job-listings">
    {%- for job in jobs -%}
    <h2 class="sr-only">Jobs by {{ job.company }}</h2>
      <div class="job-card">
        <div class="job-card-header">
        <div>
          <img src="{{ job.logo_url }}" alt="{{ job.company }} Logo" class="company-logo">
        </div>
        </div>
        <div class="job-card-body">
          <h3>{{ job.title }}</h3>
          <p class="location">{{ job.location }}</p>
        </div>
        <div class="job-card-footer">
          <a href="{{ job.apply_url }}" class="apply-button" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </div>
    {%- endfor -%}
  </div>
    </div>
</div>
</div>
</section>
