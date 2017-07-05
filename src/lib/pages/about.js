let header = require('../components/nav.js')
let footer = require('../components/footer.js')

module.exports = () => {
  return `
  ${header()}
  <section class="flex flex-column justify-center mw7 w-100 center ph3 ph0-ns">
    <h1 class="f2-ns fw5 pv2 tl">About <span class="brand bg-bourbon-text hover-bg-ouch-blue-text">FANJUKSU</span></h1>
    <h2 class="pv2 ma0 fw5">Who is behind this?</h2>
    <p class="lh-copy">The team at <a class="link black-30 dim fw7" href="#">nudj</a>, a new platform that is trying to make hiring human again (with a little help from everyone's friends).</p>
    <h2 class="ma0 pa0 fw5">Why are you doing this?</h2>
    <p class="lh-copy">We all know that the best start-ups don't run on designers and developers alone, yet most of the tools that can help you discover start-up jobs are only dedicated to those roles.</p>
    <p class="lh-copy">That's why we thought we'd collate the best non-tech jobs at the best UK start-ups and share that with whomever is interested.</p>
    <h2 class="ma0 pa0 fw5">What do I have to do?</h2>
    <p class="lh-copy">Sign-up for the types of roles you're interested in and we'll send you a weekly email with the best opportunities going. That's it.</p>
    <p class="lh-copy">If we get enough interest, we'll turn it into a searchable directory, so people can browse at their leisure.</p>
    <h2 class="ma0 pa0 fw5">What does <span class="brand bg-bourbon-text hover-bg-ouch-blue-text">FANJUKSU</span> mean?</h2>
    <p class="lh-copy">It's an acronym for 'Find a Non-tech Job at a UK Start Up'... We were scraping the barrel and the domain name was available!</p>
  </section>
  ${footer()}
  `
}