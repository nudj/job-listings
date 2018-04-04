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
        <h2 class="f2-ns fw4 ">It's all about the growth...</h1>
        <p class="lh-copy">The old adage 'Build it and they will come' doesn't work (and hasn't for a while). Yet, many start-ups continue to focus on making the perfect product, without paying any attention to how they intend to get it into the hands of their target customers.</p>
        <p class="lh-copy">However, the tide has begun to turn, with more and more start-ups readily hiring marketers to help them put the word out, sometimes even before they've started writing the first line of code!</p>
        <p class="lh-copy">Given the many different types of businesses that are starting up, there are jobs going for all types of marketers. So, whether you're a PPC wizard, a crafty content creator, a public relations guru or a jack-of-all-trades Growth Hacker there is probably an description waiting for you.</p>
      </div>
      <div class="bt b--black-10 pv4">
        <div class="f6 link dim br1 ph3 pv2 mb2 dib white bg-black ttu">Coming soon</div>
        <h2 class="f2-ns fw4 ">The hottest marketing jobs in the UK start-up world right now.</h1>
        <p class="i">We're still building a "live stream" of the best marketing jobs at UK start-ups. Bare with us.</p>
      </div>
        <div class="bt b--black-10 pv4">
          <h2 class="f2-ns fw4 measure">Get the best marketing jobs at start-ups delivered to your inbox.</h2>
          <p class="ph0 mh0 lh-copy">We'll collate and send you the best marketing jobs at the UK's best start-ups, every month. Oh and if you don't like it, you can unsubscribe in a click.</p>
          ${form({role})}
        </div>
    </section>
    ${footer()}
    `
  })}
  `
}
