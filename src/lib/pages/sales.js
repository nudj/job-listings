let header = require('../components/header.js')
let footer = require('../components/footer.js')
let form = require('../components/form.js')

module.exports = () => {
  return `
  ${header()}
  <section class="flex flex-column justify-center items-center mw7 w-100 center">
    <div class="pv4">
      <h2 class="f2-ns fw5 ">It's all about the <a href="https://www.youtube.com/watch?v=v9XW6P0tiVc" class="link black-30 dim">ABC</a>...</h1>
      <p class="lh-copy">We all know that start-ups can't survive with cash, whether that be revenue generated or through investment. However, not all of them think that hiring people who can help them better manage their finances is a good idea. Strange.</p>
      <p class="lh-copy">While early on the companies' finances might be capably managed by a CEO (or another Founder), it's soon after raising a Series A that things begin to get a little tricky. Yet the importance of managing it still remains.</p>
      <p class="lh-copy">Of course, some may be lucky and have someone with the necessary finance skills embedded in their team (or their VC will support them). Yet, it's critical for all start-ups, particularly as they begin to scale to hire dedicated finance lead and team.</p>
    </div>
    <div class="bt b--black-10 pv4">
      <h2 class="f2-ns fw5 ">The hottest sales jobs in the UK start-up world right now.</h1>
      <ul class="flex flex-row flex-wrap list ma0 pa0 w-100">
        <li class="w-50-ns w-100">
          <div class="card bg-white pa4 ma4">
            <img src="//logo.clearbit.com/busuu.com?s=64"/>
            <h3>Corporate Sales Manager</h3>
            <p class="bb b--black-10 pb4">busuu need an experienced Sales Manager to build a strong corporate client base in the UK for their 'busuu for education' product.</p>
            <a class="pointer link dim black-30" href="https://www.busuu.com/en/jobs?gh_jid=590086"><small class="ttu">View job</small></a>
          </div>
        </li>
        <li class="w-50-ns w-100">
        <div class="card bg-white pa4 ma4">
          <img src="https://logo.clearbit.com/spotify.com?s=64"/>
          <h3>Account Director</h3>
          <p class="bb b--black-10 pb4">Spotify need an Ad Sales Account Director to join their team in London to sell cross-channel solutions through multiple platforms.</p>
          <a class="pointer link dim black-30" href="https://boards.greenhouse.io/monzo/jobs/725934#.WVujdNPytL8"><small class="ttu">View job</small></a>
          </div?
        </li>
      </ul>
    </div>
      <div class="bt b--black-10 pv4">
        <h2 class="f2-ns fw5 measure">Get the best sales jobs at start-ups delivered to your inbox.</h2>
        <legend class="f5 fw5 ph0 mh0 lh-copy">We'll collate and send you the best sales jobs at the UK's best start-ups, every week. And unsubscribe in a click.</legend>
        ${form()}
      </div>
  </section>
  ${footer()}
  `
}
