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
        <h2 class="f2-ns fw4">It's all about the money...</h1>
        <p class="lh-copy">We all know that start-ups can't survive with cash, whether that be revenue generated or through investment. However, not all of them think that hiring people who can help them better manage their finances is a good idea. Strange.</p>
        <p class="lh-copy">While early on the companies' finances might be capably managed by a CEO (or another Founder), it's soon after raising a Series A that things begin to get a little tricky. Yet the importance of managing it still remains.</p>
        <p class="lh-copy">Of course, some may be lucky and have someone with the necessary finance skills embedded in their team (or their VC will support them). Yet, it's critical for all start-ups, particularly as they begin to scale to hire a dedicated CFO and a supporting cast of Finacial Admistrators.</p>
      </div>
      <div class="bt b--black-10 pv4">
        <div class="f6 link br1 ph3 pv2 mb2 dib white bg-black ttu">Coming soon</div>
        <h2 class="f2-ns fw4 ">The hottest HR jobs in the UK start-up world right now.</h1>
        <p class="i">We're still building a "live stream" of the best HR jobs at UK start-ups. Bare with us.</p>
      </div>
        <div class="bt b--black-10 pv4">
          <h2 class="f2-ns fw4 measure">Get the best finance start-up jobs sent straight to your inbox.</h2>
          <p class="ph0 mh0 lh-copy">We'll collate and send you the best finance jobs at the UK's best start-ups, every month. Oh and if you don't like it, you can unsubscribe in a click.</p>
          ${form({role})}
        </div>
    </section>
    ${footer()}
    `
  })}
  `
}
