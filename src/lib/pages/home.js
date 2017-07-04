let header = require('../components/header.js')
let footer = require('../components/footer.js')

module.exports = () => {
  return `
  ${header()}
  <section class="flex flex-column justify-center">
    <div class="mw8 w-100 center pv4 ph4 tc-ns tl">
      <h1 class="f2-ns fw5">Looking for a Finance, Marketing, Sales or HR job at one of the UK's hottest start-ups?</h1>
    </div>
    <div class="flex flex-row flex-wrap justify-center mw9 w-100 center">
      <div class="w-25-l w-50-m w-100">
        <div class="bg-white ma4 pa4-ns pa3 tl card">
          <p class="f1 pa0 ma0">💷</p>
          <h2 class="f3 fw5">Finance</h2>
          <p class="bb b--black-10 pb4">Whether it be as a CFO or a Financial Admistrator, start-ups (particularly those that have now got a bit of revenue and are growing) are looking for people like you.</p>
          <a class="pointer link dim black-30" href="/finance"><small class="ttu">Sign-up for updates</small></a>
        </div>
      </div>
      <div class="w-25-l w-50-m w-100">
        <div class="bg-white ma4 pa4-ns pa3 tl card">
          <p class="f1 pa0 ma0">📣</p>
          <h2 class="f3 fw5">Marketing</h2>
          <p class="bb b--black-10 pb4">Every start-up going is desperately looking for people who can help them grow their business through the various marketing channels, from PPC to SEO and beyond.</p>
          <a class="pointer link dim black-30" href="/marketing"><small class="ttu">Sign-up for updates</small></a>
        </div>
      </div>
      <div class="w-25-l w-50-m w-100">
        <div class="bg-white ma4 pa4-ns pa3 tl card">
          <p class="f1 pa0 ma0">🤝</p>
          <h2 class="f3 fw5">Sales</h2>
          <p class="bb b--black-10 pb4">Without a solid customer pipeline and the sales people required to keep it healthy, many of today's start-ups will undoubtedly fail. You can help them.</p>
          <a class="pointer link dim black-30" href="/sales"><small class="ttu">Sign-up for updates</small></a>
        </div>
      </div>
      <div class="w-25-l w-50-m w-100">
        <div class="bg-white ma4 pa4-ns pa3 tl card">
          <p class="f1 pa0 ma0">🏅</p>
          <h2 class="f3 fw5">Human Resources</h2>
          <p class="bb b--black-10 pb4">Every start-up needs an awesome team. So forget about all the other roles, what they really need is people who can help them find and grow their talent. Interested?</p>
          <a class="pointer link dim black-30" href="/hr"><small class="ttu">Sign-up for updates</small></a>
        </div>
      </div>
    </div>
  </section>
  ${footer()}
  `
}
