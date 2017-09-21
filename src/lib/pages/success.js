let nav = require('../components/nav')
let footer = require('../components/footer')
let head = require('../components/head')
let body = require('../components/body')

module.exports = () => {
  return `
  ${head({description: 'Great job. You\'ve signed up to recieve the best jobs delivered straight to your inbox.', fbevent: `fbq('track', 'Lead')`})}
  ${body({content: `
    ${nav()}
    <section class="mw8 w-100 center tc ph2 pv2-ns pv4">
      <p class="f-subheadline-l f1 pa0 ma0">&#x1F389; &#x1F4AF; &#x1F389;</p>
      <h1 class="f2 fw4 pv2 ma0">Awesome! Check your inbox.</h1>
      <p class="tc lh-copy ph2">Once you've confirmed your subscription we'll send you a collection of the finest jobs at the hottest UK start-ups your way once a month. Oh, and if you ever get bored you can unsubscribe with just one click.</p>
      <ul class="list ma0 pa0 lh-copy tc bt b--black-10 mw5 center pv3">
        <li><a id="open-intercom" href="#" class="link black-30 ttu f6 dim">Got a suggestion? Let us know.</a></li>
      </ul>
    </section>
    ${footer()}
    `
  })}
  `
}
