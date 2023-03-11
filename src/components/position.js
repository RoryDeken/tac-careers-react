import React, { useState } from 'react'
import ApplyForm from './apply-form'

const Position = () => {

  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true)

  return (
    <>
    <p>We are currently looking for a full-time Virtual Executive Assistant to join our team and support the founder + CEO of our company, Michelle Chalfant and COO, Sarah Langhans.  This position will be mainly remote with minimal in-person support needed in the Nashville/Franklin, TN area.
 <button class="read-more-toggle" onClick={() => setToggle(!toggle)}>{toggle ? 'Read more' : 'Read less'}</button></p>
          {!toggle && ( <div class="read-more">
          <h4>COMPANY OVERVIEW:</h4>

<p>The Michelle Chalfant Company is a self-help company that helps individuals who are stuck, overwhelmed and hopeless understand where they are today, what’s blocking them from where they want to be and provide them with the method on how to get there, so they can lead empowered, authentic lives filled with passion and purpose.</p>
<p>We do this through our globally recognized Coaching Certification Program, top ranked podcast, online courses, live events/workshops, books and more.</p>
<p>We are a mission-driven organization that lives by our core values, both personally and professionally, and are committed to growing our team with other like minded individuals.</p>

<h4>MISSION:</h4> 
<p>The mission of the Virtual Executive Assistant is to stay five steps ahead of their leader(s), tracking all of the administrative details, and clearing the path for them to make their greatest contribution to our business. The Virtual Executive Assistant will be a key asset to the CEO and COO by anticipating needs at an exceptionally high level, allowing them to develop the vision and strategy for all aspects of business at The Michelle Chalfant Company so we can reach our revenue and profitability goals.</p>
<p>While repetitive tasks are certainly part of this position, the tasks assigned can vary from week to week based on the CEO and COO’s needs and the needs of business. The most important responsibility of the Virtual Executive Assistant is to ensure that administrative tasks and projects are completed with a high level of efficiency, confidentiality, accuracy, flexibility, and positivity in order to support the initiatives of the leadership team.</p>


<h4>PROFICIENCIES:</h4>
<p>
  <ul>
    <li><strong>Quality communication:</strong> Our EA must be an excellent communicator, in both written and oral form and come across clear, concise and professional. This includes proficiency in spelling, grammar, and punctuation. This also includes being able to take a large amount of information and summarize it quickly both in writing and orally on a regular basis. You must also be able to track communication across multiple channels without losing any details. Those channels could include in-person meetings, virtual video calls, Slack messages, text messages and/or emails.</li>
    <li><strong>Affinity for technology:</strong> Our EA will be a tech savvy Mac user and will not be intimidated by learning new technology. Proficiency in the following tech platforms is ideal: Google Suite, Slack, Zoom, YouTube, Adobe Acrobat, Project Management Software (Monday.com), WordPress, CRMs/email platforms (Keap, ActiveCampaign or similar) and course platforms (Kajabi, Teachable, Mighty Networks, Coach Accountable, etc.)</li>
    <li><strong>Self-starter who anticipates needs:</strong> As our new EA, you will know how to get things done and done in the most efficient way. You are intuitive and a big picture thinker, always two steps ahead. You are also an avid note-taker and closer of open loops.</li>
    <li><strong>Detail and process oriented:</strong> As our new EA, you are detail-oriented and have strong organizational and project management skills. When work priorities shift, you can switch gears and adapt quickly. You have a knack for both building on existing processes and building “from the ground up”.</li>
    <li><strong>Heart based:</strong> You have a passion for the self-help industry and supporting a visionary CEO. You are positive and optimistic and you know everyone is doing the best they can. You take pride in helping the team be successful and always going the second mile for our clients and our community.</li>
    </ul>
    </p>
<h4>RESPONSIBILITIES:</h4>
<p style={{textDecoration:'underline'}}>What your day will look like:</p>
<p>
  <ul>
    <li>Assist Michelle + Sarah in organizing their schedules, preparing them for their meetings and being their right hand for all tasks needed.</li>
    <li>Create and own a system of reminders/schedule for Michelle + Sarah through our project management system and company calendar.</li>
    <li>Manage Michelle's calendar and send weekly overviews and daily briefs to both Michelle + Sarah.</li>
    <li>Manage Michelle + Sarah’s inboxes: personal and customer facing and replying when necessary.</li>
    <li>Manage the podcast process of scheduling guests, post production and communication, including getting Michelle on other shows.</li>
    <li>Manage all expense tracking, organizing and submitting the expenses to our financial team.</li>
    <li>Assist with company and personal projects in Franklin, TN to free Michelle + Sarah up, allowing them to focus on the priorities of the business to ensure the utmost focus needed for the growth of the company.</li>
    <li>Minimal travel required (for live events) and all expenses covered.</li>
  </ul>
  </p>

  <p style={{textDecoration:'underline'}}>Example projects/tasks from Michelle:</p>

<h5>A. MANAGE OUR EMAIL INBOXES</h5>
<p>The goal is for Michelle + Sarah to spend minimal time in their inboxes. You’ll learn the types of emails coming in, how they respond to them, and you’ll become the first point of contact for every incoming email and will know how to respond in their place.
We currently have labels/tags assigned to the most common types of emails in our inboxes. As emails come in you’ll utilize the tags and standard responses, ensuring that we achieve “inbox zero” everyday.
You’ll continue to identify trends and categories in our inboxes and create categories/tags/organization and unsubscribe to unnecessary newsletters.
</p>

<h5>B. MANAGE & OPTIMIZE CALENDAR</h5>
<p>You’ll ask Michelle + Sarah what their ideal day, week, month and year look like and you’ll set up their calendars to reflect this.
You’ll set up their Google Calendars and Calendly accounts to reflect their availability for each type of event so when they get requests for social gatherings, interviews, calls, etc., you know where to put them on the calendar without needing to ask them.
You’ll add an itinerary and agenda items to all of the meetings so both leaders are prepared well in advance. This includes internal and external meetings.
</p>

<h5>C. VIDEO/PODCAST RECORDING</h5>
<p>You will schedule and be the point of contact for all interviews, both for guests on our show and getting Michelle on other shows.
You’ll ensure all recordings get to the editor on time and that all next steps are lined up and time stamp anything needed for production.
You will do post production of all of our podcast episodes (posting on the website, sending in email, and posting on YouTube).
You’ll send email reminders to our guests for the recording of and the going live date of the podcast. 
</p>

<h5>D. SOCIAL MEDIA</h5>
<p>Similar to the email inboxes, you will manage our community through social media by monitoring DMs and responding to messages and tagged comments.
You’ll review and accept or deny individuals into The Adult Chair private Facebook group and review any “anonymous” post requests.
You’ll monitor and review comments on all platforms, liking and responding to the first few comments of each post.
</p>

<h5>E. PROJECT MANAGEMENT + NOTE TAKING</h5>
<p>You’ll join Michelle + Sarah on brainstorming sessions, voice recording and taking notes as they bounce ideas back and forth together.
You will attend almost every meeting/call, taking notes and creating action items with due dates, adding these to the calendar as reminders.
You will follow up on all action items to ensure all loops are getting closed.
If Michelle or Sarah mentions something to you – a request or task, they will look for you to take the item and report back to them the weekly status and when it is completed.
If you see any tasks not completed that day, you’ll put it on their list for the following day. If it’s not on their calendar or list, it doesn’t exist.
You will have weekly Monday phone meetings with Michelle + Sarah to ensure they are on track to meet goals and complete any pending tasks. You will also provide a morning brief for them that includes a checklist of key items.
</p>

<h5>F. TRAVELING + EVENTS</h5>
<p>When we travel for speaking engagements or events (3 to 5 per year), you’ll travel with Michelle and/or Sarah.
You'll research locations, costs and present them with top options.
You’ll book all travel and hotel arrangements.
You’ll book and manage local makeup artists, photographers, and videographers for each destination as needed.
</p>

<h5>G. AUTOMATE & SYSTEMATIZE EVERYTHING</h5>
<p>You will work towards setting any recurring task on autopilot.
You will work on clearing as many repeatable items off your plate with as much vigor as getting them off Michelle + Sarah's plates.
You will create as much predictability and stability in Michelle + Sarah's schedules and to-do lists so they are freed up to ideate and create at their highest level to ensure the success of our company.
</p>

<h5>H. EXPENSES + MISC.</h5>
<p>You will keep track of all expenses/receipts for Michelle + Sarah and review all invoices for submission to our accounting team.
You will assist with company and personal projects in the Nashville/Franklin, TN area, allowing Michelle + Sarah to focus on the priorities of the business, ensuring the utmost focus needed by them for the growth of the company.
You will pick up and drop off packages, organize all swag items in storage, run errands, and order gifts for employee birthdays and anniversaries.
</p>

<h4>REQUIREMENTS:</h4>
<p>Education: Bachelor’s degree, preferred.
Experience: 2 - 5 years administrative or customer service experience. Experience in supporting C-suite executives and/or entrepreneurs preferred, but not required.
Location: Nashville, TN or surrounding area
Full-time, Salaried (with killer benefits!)
</p>

<p>This is a full-time, remote position with minimal in-person requirements that will report directly to the CEO and COO of The Michelle Chalfant Co. Pay is based on experience. Equal Opportunity Employer.</p>

<p>Equal Opportunity Employer.</p>

<h4>APPLICATION INSTRUCTIONS:</h4>
<p>To apply:</p>
<p><em>*You can combine into a single PDF to submit.</em></p>
<ul>
  <li>Please submit a cover letter and PDF of your resume</li>
  <li>Kolbe A Index Assessment (optional, but highly recommended) </li>
  <li>StrengthsFinder Top-5 Strengths Report (optional)</li>
</ul>
<ApplyForm/>
<button class="read-more-toggle" onClick={() => setToggle(!toggle)}>{toggle ? 'Read more' : 'Read less'}</button>
</div>)}</>
  )
}
export default Position

