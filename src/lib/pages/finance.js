let nav = require('../components/nav')
let footer = require('../components/footer')
let form = require('../components/form')
let head = require('../components/head')
let body = require('../components/body')

module.exports = ({
  role
}) => {
  return `
  ${head({description: 'A one-stop shop for finding a Finance job at the UK\'s hottest start-ups.'})}
  ${body({content: `
    ${nav()}
    <section class="flex flex-column justify-center items-center mw7 w-100 center ph3 ph0-ns">
      <div class="pv4">
        <h2 class="f2-ns fw5 ">It's all about the money...</h1>
        <p class="lh-copy">We all know that start-ups can't survive with cash, whether that be revenue generated or through investment. However, not all of them think that hiring people who can help them better manage their finances is a good idea. Strange.</p>
        <p class="lh-copy">While early on the companies' finances might be capably managed by a CEO (or another Founder), it's soon after raising a Series A that things begin to get a little tricky. Yet the importance of managing it still remains.</p>
        <p class="lh-copy">Of course, some may be lucky and have someone with the necessary finance skills embedded in their team (or their VC will support them). Yet, it's critical for all start-ups, particularly as they begin to scale to hire a dedicated CFO and a supporting cast of Finacial Admistrators.</p>
      </div>
      <div class="bt b--black-10 pv4">
        <h2 class="f2-ns fw5 ">The hottest finance jobs in the UK start-up world right now.</h1>
        <ul class="flex flex-row flex-wrap list ma0 pa0 w-100">
          <li class="w-50-ns w-100">
            <div class="card bg-white pa4 ma4-ns ma2">
              <img src="//logo.clearbit.com/transferwise.com?s=64"/>
              <h3>Head of Tax</h3>
              <p class="bb b--black-10 pb4 lh-copy">TransferWise are looking for a talented Head of Tax to join their Finance team to help build out their business across the globe by leading tax affairs.</p>
              <a class="pointer link dim black-30" href="https://transferwise.com/jobs/position/690382-head-of-tax"><small class="ttu">View job</small></a>
            </div>
          </li>
          <li class="w-50-ns w-100">
          <div class="card bg-white pa4 ma4-ns ma2">
            <img src="https://logo.clearbit.com/monzo.com?s=64"/>
            <h3>Financial Planning Analyst</h3>
            <p class="bb b--black-10 pb4 lh-copy">Monzo need a financial planner to help them develop leading edge management information and to model financial projections and scenarios..</p>
            <a class="pointer link dim black-30" href="https://boards.greenhouse.io/monzo/jobs/725934#.WVujdNPytL8"><small class="ttu">View job</small></a>
            </div?
          </li>
        </ul>
      </div>
        <div class="bt b--black-10 pv4">
          <h2 class="f2-ns fw5 measure">Get the best finance start-up jobs sent straight to your inbox.</h2>
          <legend class="ph0 mh0 lh-copy">We'll collate and send you the best finance jobs at the UK's best start-ups, every week. And unsubscribe in a click.</legend>
          ${form({role})}
        </div>
    </section>
    ${footer()}
    `
  })}
  `
}
