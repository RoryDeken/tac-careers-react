import './App.scss';
import Menu from './components/menu';
import Footer from './components/footer';
import Position from './components/position';
import {Chair, Michelle, Location, Job} from './assets/img'
import SubForm from './components/sub-form';


function App() {
  return (
    <div className="tac">
      <header className="tac-header">
        <Menu />
        
        <div class="container">
          <div class="row">
           <div class="col-sm-12">
           <div class="row">
           <div class="col text-center pt-5">
            <h2>Where your passion, purpose and skills collide.</h2>
            <h3>Help bring healing and transformation to the world.</h3>
            <a class="btn btn-primary mt-5" href="#openings">Search Current Job Openings</a>
            </div>
            </div>
           </div>
          </div>
        </div>
      </header>
      <main>
        <section class="what-we-do text-center container p-5">
          <h2 class="small-heading">What We Do</h2>
          <h3 class="p-3">We are a self-help company that helps individuals move from stuck, overwhelmed and hopeless to an empowered, authentic life filled with passion and purpose.</h3>
          <hr class="pt-5 mt-3 mb-0 pb-0"></hr>
          <h4 class="small-heading">We do this through:</h4>
          <div class="methods">
            <ul>
              <li><span><img src="https://michellechalfant.com/careers/icons/microphone.png" alt=""/></span> <p>Top-Ranked Podcast</p></li>
              <li><span><img src="https://michellechalfant.com/careers/icons/files.png" alt=""/></span> <p>Empowering Free Resources</p></li>
              <li><span><img src="https://michellechalfant.com/careers/icons/event.png" alt=""/></span> <p>Transformational Live Events</p></li>
              <li><span><img src="https://michellechalfant.com/careers/icons/certificate.png" alt=""/></span> <p>Globally-Recognized Coaching Certification Programs</p></li>
              <li><span><img src="https://michellechalfant.com/careers/icons/hat.png" alt=""/></span> <p>In-Depth Online Courses</p></li>
              <li><span><img src="https://michellechalfant.com/careers/icons/coaching.png" alt=""/></span> <p>One-on-One Coaching</p></li>
            </ul>
          </div>

          <div class="inset-image-wrapper mb-3 pb-3">
            <img src={Chair} class="large-img" alt=""/>
            <img src={Michelle} class="small-img" alt=""/>
          </div>
          <h3 class="our-story">Our Story</h3>
          <div class="row our-story-row mt-5">
          <div class="col-md-6 col-sm-12">
          <p>Michelle Chalfant is a licensed therapist, holistic life coach, speaker, author and podcaster. For more than 25 years, she operated a private practice, working directly with clients using experiential therapy and coaching tools that helped her clients get quick results and significant life transformation — sometimes in just a few sessions.</p> 

<p>Over the course of her career as a therapist, Michelle participated in hundreds of trainings and became certified in dozens of methods across a range of disciplines. A seeker who was always looking for new ways to help her clients, Michelle studied psychotherapy, life coaching, energy medicine, holistic healing and more to find the simple tools that truly worked.</p> 

<p>She combined the best of those tools and approaches into The Adult Chair® model, a roadmap and manual for life that helps individuals feeling stuck or overwhelmed understand where they are today, what’s blocking them from where they want to be and how to get there.</p></div>
<div class="col-md-6 col-sm-12">
<p>In 2014, Michelle started her podcast, The Adult Chair, to help create a resource for her clients who were learning to work with this model...and it spread like wildfire! Today, it is ranked in the top 1 percent of all podcasts and has over 8 million downloads and counting.</p>

<p>Since then, The Michelle Chalfant Co. has become a thriving and growing company, made up of incredible experts and coaches who are all on a mission to bring healing to this world. We offer online courses, live events, a coaching certification program and more, designed to help people do their own healing work and transform their lives through simple psychology and grounded spirituality.</p></div></div>

        </section>
        <section class="movement-banner text-center container-fluid p-5">
        <h2 class="p-5">Working here is so much more than a job. It’s a movement. It’s changing lives worldwide. And we want you to join us!</h2>
        </section>
        <section class="who-we-are text-center container p-5" style={{display:'none'}}>
          
          <div class="leadership" >
          <h2 class="small-heading">Who we are</h2>
            <h3 class="leadership-team">Our Leadership Team</h3>
            <ul class="leadership-team-list mt-4">
              <li><img src={Michelle} alt=""/><h4>Michelle Chalfant</h4><h5>CEO The Adult Chair</h5></li>
              <li><img src={Michelle} alt=""/><h4>Michelle Chalfant</h4><h5>CEO The Adult Chair</h5></li>
              <li><img src={Michelle} alt=""/><h4>Michelle Chalfant</h4><h5>CEO The Adult Chair</h5></li>
              <li><img src={Michelle} alt=""/><h4>Michelle Chalfant</h4><h5>CEO The Adult Chair</h5></li>
              <li><img src={Michelle} alt=""/><h4>Michelle Chalfant</h4><h5>CEO The Adult Chair</h5></li>
              <li><img src={Michelle} alt=""/><h4>Michelle Chalfant</h4><h5>CEO The Adult Chair</h5></li>
            </ul>
          </div>
        </section>
        <section class="values text-center container-fluid p-5" >
          <h3>Our Core Values</h3>
            <ul>
              <li><img src="https://michellechalfant.com/careers/icons/integrity.svg" alt="Integrity"/><h4>Unyielding Integrity</h4>
              <span>We tell the truth, do what’s right and honor our word, even when it’s expensive, inconvenient or embarrassing. Honesty and transparency guide our work.</span></li>
              <li><img src="https://michellechalfant.com/careers/icons/candor.svg" alt="Integrity"/><h4>Radical Candor</h4><span>We bust stories, are honest with ourselves and say what we mean to each other. We do not blame, shame or gossip.</span></li>
              <li><img src="https://michellechalfant.com/careers/icons/authentic.svg" alt="Integrity"/><h4>Consistent Authenticity</h4><span>We show up authentically, we say what we mean and we do this consistently – because we’re the same people at work, at home and by ourselves. We don’t put anything out we don’t believe in, and we want the highest good for all who interact with us. </span></li>
              <li><img src="https://michellechalfant.com/careers/icons/people-first.svg" alt="Integrity"/><h4>Heart + People First</h4><span>We believe that all people deserve to be seen, heard and understood. We honor the worth of every individual and treat everyone with kindness and respect. </span></li>
              <li><img src="https://michellechalfant.com/careers/icons/contribution.svg" alt="Integrity"/><h4>Passionate Contribution</h4><span>We see our work and the people we work with as a gift and demonstrate our gratitude by adding value to every person and situation we encounter. Everyone's ideas and gifts matter here.</span></li>
              <li><img src="https://michellechalfant.com/careers/icons/intentional.svg" alt="Integrity"/><h4>Intentional Living</h4><span>We practice what we preach. We value well-being, self-care, work/life balance, healthy relationships and living in alignment with our true selves. We prioritize what matters most while striving for extraordinary results. </span></li>
              <li><img src="https://michellechalfant.com/careers/icons/future-focused.svg" alt="Integrity"/><h4>Future Focused</h4><span>We take responsibility for delivering high-leverage outcomes in our individual performance and company goals, and we learn from both wins and misses. Everything we do is motivated by our mission, vision and the future we are here to achieve. </span></li>
              <li><img src="https://michellechalfant.com/careers/icons/2-mile-standard.svg" alt="Integrity"/><h4>Two-mile Standard of Excellence</h4><span>We strive to be excellent in what we do and who we are. We create great products, we live consciously and we passionately serve each other and our community. Going the extra two miles is our standard.</span></li>
              <li><img src="https://michellechalfant.com/careers/icons/growth.svg" alt="Integrity"/><h4>Continuous Growth</h4><span>We view personal and professional growth as a divine calling and individual responsibility. We constantly learn, constantly grow and constantly improve our products, operations and ourselves.</span></li>
            </ul>
          </section>
        <section class="reasons text-center container-fluid p-5">
    <h2>Why You Will Love Working Here</h2>

    <div class="reason">
<h3>Health, Dental and Vision Insurance</h3>
<p>We care about your physical, mental and spiritual health, so we offer a comprehensive benefits package that kicks in the day you start work.</p></div>

<div class="reason">
<h3>Flexible Schedules</h3>
<p>We believe that everyone is fully capable of managing and getting their work done – in a way that works for them. You are free to flex your schedule and work when you feel most productive and balanced, while still showing up for your team.</p>
</div>

<div class="reason">
<h3>Fully Remote Work</h3>
<p>Work where you want, whether that’s from a coffee shop, your couch or another country! We are a fully virtual company with employees around the U.S. and world. Required travel is limited, and when you do travel with us, all of your expenses will be covered.</p>
</div>

<div class="reason">
<h3>Unlimited PTO</h3>
<p>Work/life balance is very important to us; we preach this, so we are committed to practicing it too! Whether you need a day off to recharge or need a few hours in the middle of the day to take care of life, you’re free to take it…as much as you need.</p>
</div>

<div class="reason">
<h3>Three Months of Parental Leave</h3>
<p>Family is important to us, and self-care is a priority. We understand the importance of bonding with your newborn as well as the mental and physical energy that is needed during this time. We’re proud to offer parental leave to all new parents, whether you’re the birth parent or not.</p>
</div>

<div class="reason">
<h3>Closed Two Full Weeks at the End of Every Year (+ Other Holidays!)</h3>
<p>In addition to seven company holidays throughout the year, we close for the last two weeks of the year to give you time to fully recharge and reset. Taking time off together gives us space to breathe and set intentions for the next year – without worrying about coming back to a pile of emails.</p>
</div>
        </section>
        <section id="openings" class="openings text-center container p-5">
          <h2>Current Job Openings</h2>
          <div class="position-wrapper mt-5 pt-5">
            <div class="meta">
              <div class="status">
                Posted
              </div>
              <time>Feb 13</time>
            </div>
            <div class="content">
            <h3>Virtual Executive Assistant to CEO </h3>
            <span><img alt="" src={Location} /> Nashville, TN / Remote</span>
            <div class="position">
            <Position />
          </div>
          </div>
          </div>
        </section>
        <section class="growing-banner text-center container-fluid p-5">
        <h2>Don’t see something that’s a good fit? We’re always growing and you never know when your dream job might open up. Sign up to be notified when new jobs are posted.</h2>
        </section>
        <section class="new-posting-sign-up text-center container p-5">
          <div class="form-container">
            <div class="image-wrapper">
            <img src={Job} alt="Form hero"/>
            </div>
          <div class="content">
          <h2>Never miss a job post</h2>
          <h3>Sign up to be notified when new jobs are posted</h3>
          <SubForm />
            </div>
            </div>
        </section>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
