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
        <div class="f6 link br1 ph3 pv2 mb2 dib white bg-black ttu">Coming soon</div>
        <h2 class="f2-ns fw4 ">The hottest Sales jobs in the UK start-up world right now.</h1>
        <p class="i">We're still building a "live stream" of the best Sales jobs at UK start-ups. Bare with us.</p>
      </div>
        <div class="bt b--black-10 pv4">
          <h2 class="f2-ns fw4 measure">Get the best sales jobs at start-ups delivered to your inbox.</h2>
          <p class="ph0 mh0 lh-copy">We'll collate and send you the best sales jobs at the UK's best start-ups, every month. Oh and if you don't like it, you can unsubscribe in a click.</p>
          ${form({role})}
        </div>
    </section>
    ${footer()}
    `
  })}
  `
}
