let nav = require('../components/nav.js')
let footer = require('../components/footer.js')
let form = require('../components/form.js')
let head = require('../components/head')
let body = require('../components/body')

module.exports = ({
  role
}) => {
  return `
  ${head({description: 'A one-stop shop for finding a Sales job at the UK\'s hottest start-ups.'})}
  ${body({content: `
    ${nav()}
    <section class="flex flex-column justify-center items-center mw7 w-100 center ph3 ph0-ns">
      <div class="pv4">
        <h2 class="f2-ns fw4 ">It's all about the <a href="https://www.youtube.com/watch?v=v9XW6P0tiVc" class="link black-30 dim">ABC</a>...</h1>
        <p class="lh-copy">For many sales-driven businesses, big or small, old or new, good sales people are worth their weight in gold.</p>
        <p class="lh-copy">So, whether you're a Sales Leader who's a pro at getting deals in the door or an Account Manager that loves to nurture clients once they're on-board, there is undoubtably a position for you at any number of promising UK start-ups.</p>
      </div>
      <div class="bt b--black-10 pv4">
        <h2 class="f2-ns fw4 ">The hottest sales jobs in the UK start-up world right now.</h1>
        <ul class="flex flex-row flex-wrap list ma0 pa0 w-100">
          <li class="w-50-ns w-100">
            <div class="card bg-white pa4 ma4">
              <img src="//logo.clearbit.com/busuu.com?s=64"/>
              <h3 class="fw4">Corporate Sales Manager</h3>
              <p class="bb b--black-10 pb4">busuu need an experienced Sales Manager to build a strong corporate client base in the UK for their 'busuu for education' product.</p>
              <a class="pointer link dim black-30" href="https://www.busuu.com/en/jobs?gh_jid=590086"><small class="ttu">View job</small></a>
            </div>
          </li>
          <li class="w-50-ns w-100">
          <div class="card bg-white pa4 ma4">
            <img src="https://logo.clearbit.com/spotify.com?s=64"/>
            <h3 class="fw4">Account Director</h3>
            <p class="bb b--black-10 pb4">Spotify need an Ad Sales Account Director to join their team in London to sell cross-channel solutions through multiple platforms.</p>
            <a class="pointer link dim black-30" href="https://boards.greenhouse.io/monzo/jobs/725934#.WVujdNPytL8"><small class="ttu">View job</small></a>
            </div?
          </li>
        </ul>
      </div>
        <div class="bt b--black-10 pv4">
          <h2 class="f2-ns fw4 measure">Get the best sales jobs at start-ups delivered to your inbox.</h2>
          <p class="ph0 mh0 lh-copy">We'll collate and send you the best sales jobs at the UK's best start-ups, every month. And unsubscribe in a click.</p>
          ${form({role})}
        </div>
    </section>
    ${footer()}
    `
  })}
  `
}
