import React, { useState } from 'react'

const Position = () => {

  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true)

  return (
    <><p>We are currently looking for a full-time Virtual Executive Assistant to join our team and support the founder and CEO of our company, Michelle Chalfant. 
Michelle is a licensed therapist, holistic life coach, author, speaker, podcaster and developer of The Adult Chair, a transformational model of self-realization that helps people across the globe discover who they are, become unstuck, improve their relationships and develop self-love.
If you are a highly organized administrative professional with experience supporting C-Level Executives, read on to learn more about this exciting opportunity!  <button class="read-more-toggle" onClick={() => setToggle(!toggle)}>Read more</button></p>
          {!toggle && ( <div class="read-more">
<h4>MISSION:</h4> 
<p>The mission of the Virtual Executive Assistant is to stay five steps ahead of their leader, tracking all of the administrative details, and clearing the path for her to make his greatest contribution to our business. The Virtual Executive Assistant will be a key asset to the CEO by anticipating needs at an exceptionally high level, allowing her to develop vision and strategy for all aspects of business at The Michelle Chalfant Company so that we can reach our revenue and profitability goals. 
While repetitive tasks are certainly part of this position, the tasks assigned can vary from week to week based on the CEO’s needs and the needs of business. The most important responsibility of the Virtual Executive Assistant is to ensure that administrative tasks and projects are completed with a high level of efficiency, confidentiality, accuracy, flexibility, and positivity in order to support the initiatives of the CEO.</p>

<h4>PROFICIENCIES:</h4>
<p>Quality communication: Our EA must be an excellent communicator, in both written and oral form and come across clear, concise and professional. This includes proficiency in spelling, grammar, and punctuation. This also includes being able to take a large amount of information and summarize it quickly both in writing and orally on a regular basis. You must also be able to track communication (and be very responsive) across multiple channels without losing any details. Those channels could include in-person meetings, virtual video calls, Slack messages, text messages and/or emails.
Affinity for technology: Our EA will be a technologically savvy Mac user and will not be intimidated by learning new technology. Proficiency in the following tech platforms is ideal: Google Suite, Slack, Zoom, YouTube, Adobe Acrobat, Project Management Software (Monday.com, Asana, etc.), CRMs/email platforms (Keap, ActiveCampaign or similar) and course platforms (Kajabi, Teachable, Mighty Networks, Coach Accountable, etc.)
Self-starter who anticipates needs: As our new EA, you will know how to get things done and done in the most efficient way. You are intuitive and a big picture thinker, always two steps ahead. You are also an avid note-taker.</p> 
<p>Detail and process oriented: As our new EA, you are detail-oriented and have strong organizational and project management skills. When work priorities shift, you can switch gears and adapt quickly. You have a knack for both building on existing processes and building “from the ground up”. 
Heart based: You have a passion for the self-help industry and supporting a visionary CEO. You are positive and optimistic and you know everyone is doing the best they can. You take pride in helping the team be successful and always going the second mile for our clients and our community.</p>

<h4>RESPONSIBILITIES:</h4>
<p>What your day will look like:</p>
<p>Assist Michelle in organizing her schedule, preparing her for her meetings and being her right hand for all tasks needed.
Create and own a system of reminders/schedule for Michelle through our project management system and company calendar.
Manage Michelle's calendar and send her weekly overviews and daily briefs.
Manage Michelle's inboxes: personal and customer facing and replying when necessary.
Manage the podcast process of scheduling guests, post production and communication, including getting Michelle on other shows.
Minimal travel required (for live events) and all expenses covered.</p>

<h4>Example projects/tasks from Michelle:</h4>

<h5>A. MANAGE MY EMAIL INBOX</h5>
<p>The goal is for me to spend no time in my inbox. You’ll learn the types of emails coming in, how I respond to them, and you’ll become the first point of contact for every incoming email and will know how to respond in my place.
I currently have labels/tags assigned to the most common types of emails in my inbox. As emails come in you’ll ensure that I achieve “inbox zero” everyday by 10am CT and again at 5pm CT.
You’ll continue to identify trends & categories in my inbox and create categories/tags/organization and unsubscribe to unnecessary newsletters.
</p>
<h5>B. MANAGE & OPTIMIZE CALENDAR</h5>
<p>You’ll ask me what my ideal day, week, month and year look like and you’ll set up my calendar to reflect the ideal week.
You’ll set up my Google Calendar and Calendly to reflect my availability for each type of event so when I get requests for social gatherings, interviews, calls, etc., you know where to put them on the calendar without them being disruptive to my focus.
You’ll add agenda items to all of my meetings so I am prepared well in advance.
</p>

<h5>C. VIDEO/PODCAST RECORDING</h5>
<p>You will schedule and be the point of contact for all interviews, both for guests on my show and getting me on other shows.
You’ll ensure the recordings get to the editor and that all next steps are lined up, time stamping anything needed for production.
You will do post production of all of our podcast episodes (posting on the website, sending in email, and posting on YouTube).
You’ll send email reminders to our guests for the recording of and the going live date of the podcast. 
</p>

<h5>D. SOCIAL MEDIA</h5>
<p>Similar to my email inboxes, you will manage my community through social media by monitoring my DMs, responding to messages and tagged comments.
You’ll review and accept or deny individuals into The Adult Chair private Facebook group and review any “anonymous” post requests.
You’ll monitor and review comments on all platforms, liking and responding to the first few comments of each post.</p>

<h5>E. BRAINSTORMING & WRITING</h5>
<p>You’ll keep track of and organize all of my notes and any notes from team calls, including adding any key dates to the calendar as reminders.
You’ll join me on a lot of brainstorming sessions to flesh ideas out, voice record and take notes as I bounce concepts back and forth with my COO.
You’ll coordinate scheduling with potential editors, book agents, publishing houses and our PR team to ensure we stay on deadline.
</p>

<h5>F. TRAVELING + EVENTS</h5>
<p>When I travel for speaking engagements or events (around 3 to 5 per year, maybe more with our PR team and book tours), you’ll come with me.
You'll research locations, costs and present myself and the COO with top options.
You’ll book our travel and hotel arrangements.
You’ll book and manage local makeup artists, photographers, & videographers for each destination.
</p>

<h5>G. AUTOMATE & SYSTEMATIZE EVERYTHING</h5>
<p>You will work towards setting any recurring task on autopilot.
You will work on clearing as many repeatable items off your plate with as much vigor as getting them off mine.
You will create as much predictability and stability in my schedule and to dos, so I’m freed up to ideate and create at my highest level to ensure the success of our company.
</p>

<h5>H. PROJECT MANAGEMENT</h5>
<p>You’ll manage the most challenging project in our business: Me. :)
We’ll have daily check-in’s via Slack to communicate the priorities for the day and weekly phone meetings to ensure I’m on track to meet goals and complete pending tasks.
If you see one of my tasks has not been completed that day, you’ll put it on my calendar or list. If it’s not my calendar or list, it doesn’t exist.
You will close all loops for me. If I mention something to you – a request or task, I will look for you to take the item or task and report back to me the weekly status and when it is completed. 
</p>

<h4>REQUIREMENTS:</h4>
<p>Education: Bachelor’s degree, preferred. 
Experience: 2 - 5 years supporting C-suite executives and/or entrepreneurs
Location: Must be on Central or Eastern Time
Full-time, Salaried (with killer benefits!)</p>

<p>This is a full-time, remote position that will report directly to The CEO of The Michelle Chalfant Co. Pay is based on experience. Benefits + unlimited paid time off for full-time employees!</p>

<p>Equal Opportunity Employer.</p>

<h4>APPLICATION INSTRUCTIONS:</h4>
<p>To apply, please submit a cover letter and PDF of your resume to <a href="mailto:careers@michellechalfant.com">careers@michellechalfant.com</a> and bold the email address.</p>
</div>)}</>
  )
}
export default Position

