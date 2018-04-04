let nav = require('../components/nav.js')
let footer = require('../components/footer.js')
let form = require('../components/form.js')
let head = require('../components/head')
let body = require('../components/body')

module.exports = ({
  role
}) => {
  return `
  ${head({description: 'Get the best non-tech, start-up jobs delivered to your inbox every month.'})}
  ${body({content: `
    ${nav()}
    <section class="flex flex-column justify-center items-center mw7 w-100 center ph3 ph0-ns">
        <div class="pv4">
          <h2 class="f2-ns fw4 measure tc-ns tl">Want the best non-tech, start-up job delivered to your inbox?</h2>
          <p class="ph0 mh0 lh-copy tc-ns tl">We collate and send you the best marketing jobs at the UK's best start-ups, every month. Oh and if you don't like it, you can unsubscribe in a click.</p>
          ${form({role})}
        </div>
        <div class="pv4 bt b--black-10">
          <h3 class="f3-ns fw4 measure tc-ns tl">Past issues</h3>
          <script language="javascript" src="//nudj.us16.list-manage.com/generate-js/?u=269f51a3201e40daf167c72ae&fid=4401&show=10" type="text/javascript"></script>
        </div>
    </section>
    ${footer()}
    `
  })}
  `
}
