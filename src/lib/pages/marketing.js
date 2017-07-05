let nav = require('../components/nav.js')
let footer = require('../components/footer.js')
let form = require('../components/form.js')
let head = require('../components/head')
let body = require('../components/body')

module.exports = ({
  role
}) => {
  return `
  ${head({description: 'A one-stop shop for finding a Marketing job at the UK\'s hottest start-ups.'})}
  ${body({content: `
    ${nav()}
    <section class="flex flex-column justify-center items-center mw7 w-100 center ph3 ph0-ns">
      <div class="pv4">
        <h2 class="f2-ns fw5 ">It's all about the growth...</h1>
        <p class="lh-copy">The old adage 'Build it and they will come' doesn't work (and hasn't for a while). Yet, many start-ups continue to focus on making the perfect product, without paying any attention to how they intend to get it into the hands of their target customers.</p>
        <p class="lh-copy">However, the tide has begun to turn, with more and more start-ups readily hiring marketers to help them put the word out, sometimes even before they've started writing the first line of code!</p>
        <p class="lh-copy">Given the many different types of businesses that are starting up, there are jobs going for all types of marketers. So, whether you're a PPC wizard, a crafty content creator, a public relations guru or a jack-of-all-trades Growth Hacker there is probably an description waiting for you.</p>
      </div>
      <div class="bt b--black-10 pv4">
        <h2 class="f2-ns fw5 ">The hottest marketing jobs in the UK start-up world right now.</h1>
        <ul class="flex flex-row flex-wrap list ma0 pa0 w-100">
          <li class="w-50-ns w-100">
            <div class="card bg-white pa4 ma4-ns ma2">
              <img src="//logo.clearbit.com/deliveroo.com?s=64"/>
              <h3>Marketing Manger, Acquisition</h3>
              <p class="bb b--black-10 pb4 lh-copy">Deliveroo need a marketing manager who will focus on acquisition driving activities.</p>
              <a class="pointer link dim black-30" href="https://deliveroo.workable.com/jobs/520515"><small class="ttu">View job</small></a>
            </div>
          </li>
          <li class="w-50-ns w-100">
          <div class="card bg-white pa4 ma4-ns ma2">
            <img src="https://logo.clearbit.com/carwow.co.uk?s=64"/>
            <h3>Head of PPC</h3>
            <p class="bb b--black-10 pb4 lh-copy">carwow are looking for a Head of PPC to lead the growth and optimisation of their Paid Search activity.</p>
            <a class="pointer link dim black-30" href="https://carwow.workable.com/jobs/516598"><small class="ttu">View job</small></a>
            </div?
          </li>
        </ul>
      </div>
        <div class="bt b--black-10 pv4">
          <h2 class="f2-ns fw5 measure">Get the best marketing jobs at start-ups delivered to your inbox.</h2>
          <legend class="ph0 mh0 lh-copy">We'll collate and send you the best marketing jobs at the UK's best start-ups, every week. And unsubscribe in a click.</legend>
          ${form({role})}
        </div>
    </section>
    ${footer()}
    `
  })}
  `
}
