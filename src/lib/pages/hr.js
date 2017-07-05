let header = require('../components/nav.js')
let footer = require('../components/footer.js')
let form = require('../components/form.js')

module.exports = () => {
  return `
  ${header()}
  <section class="flex flex-column justify-center items-center mw7 w-100 center ph3 ph0-ns">
    <div class="pv4">
      <h2 class="f2-ns fw5 ">It's all about the people...</h1>
      <p class="lh-copy">Without a great team, even the best business idea will fail. That's where HR and it's many guises, comes in. Whether that be attracting top talent to the business or making sure that the talent already there stays and performs.</p>
      <p class="lh-copy">For earlier stage start-ups, the majority of HR-focused roles tend to be recruitment focused, with Talent Acquisition Managers being in high demand to help them scale their engineering or sales teams. However, as the business starts to progress and the team multiplies other HR roles, such as those that deal with Employee Engagement or Training & Development, are starting to become readily available.</p>
      <p class="lh-copy">So if you're a recruiter looking for a change of scenery or someone who's obsessed with getting the best out of people then there is probably a role perfect for you!</p>
    </div>
    <div class="bt b--black-10 pv4">
      <h2 class="f2-ns fw5 ">The hottest HR jobs in the UK start-up world right now.</h1>
      <ul class="flex flex-row flex-wrap list ma0 pa0 w-100">
        <li class="w-50-ns w-100">
          <div class="card bg-white pa4 ma4-ns ma2">
            <img src="//logo.clearbit.com/moteefe.com?s=64"/>
            <h3>HR Officer</h3>
            <p class="bb b--black-10 pb4">Moteefe are looking for a part-time HR generalist (3 days p/week) to join them and take the lead in all areas of HR and Recruitment.</p>
            <a class="pointer link dim black-30" href="https://nudj.co/jobs/moteefe+hr-officer"><small class="ttu">View job</small></a>
          </div>
        </li>
        <li class="w-50-ns w-100">
        <div class="card bg-white pa4 ma4-ns ma2">
          <img src="https://logo.clearbit.com/gocardless.com?s=64"/>
          <h3>Talent Acquisition Manager</h3>
          <p class="bb b--black-10 pb4">GoCardless need a passionate, non tech recruiter to join their People team to own the growth of the Sales, Marketing and Operations teams.</p>
          <a class="pointer link dim black-30" href="https://boards.greenhouse.io/monzo/jobs/725934#.WVujdNPytL8"><small class="ttu">View job</small></a>
          </div?
        </li>
      </ul>
    </div>
      <div class="bt b--black-10 pv4">
        <h2 class="f2-ns fw5 measure">Get the best HR jobs at start-ups delivered to your inbox.</h2>
        <legend class="f5 fw6 ph0 mh0 lh-copy">We'll collate and send you the best HR jobs at the UK's best start-ups, every week. And unsubscribe in a click.</legend>
        ${form()}
      </div>
  </section>
  ${footer()}
  `
}
