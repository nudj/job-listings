let header = require('../components/nav.js')
let footer = require('../components/footer.js')

module.exports = () => {
  return `
  ${header()}
  <div class="mw7 center w-100 sans-serif pv4">
    <h2 class="f2 fw5">Terms of Service</h2>
    <h3>1. Terms</h3>
    <p class="lh-copy">By accessing this website at <a class="link black-30"href="http://fanjuksu.com">http://fanjuksu.com</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local
      laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
    <h3>2. Disclaimer</h3>
    <ol type="a" class="lh-copy">
      <li>The materials on this website are provided on an 'as is' basis. nudj makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
      <li>Further, nudj does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
    </ol>
    <h3>3. Limitations</h3>
    <p class="lh-copy">In no event shall nudj or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if
      nudj or a nudj authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental
      damages, these limitations may not apply to you.</p>
    <h3>4. Accuracy of materials</h3>
    <p class="lh-copy">The materials appearing on this website could include technical, typographical, or photographic errors. nudj does not warrant that any of the materials on this website are accurate, complete or current. nudj may make changes to the materials contained
      on this website at any time without notice. However nudj does not make any commitment to update the materials.</p>
    <h3>5. Links</h3>
    <p class="lh-copy">nudj has not reviewed all of the sites linked to this website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by nudj of the site. Use of any such linked website is at the user's own
      risk.</p>
    <h3>6. Modifications</h3>
    <p class="lh-copy">nudj may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
    <h3>7. Governing Law</h3>
    <p class="lh-copy">These terms and conditions are governed by and construed in accordance with the laws of the European Union (EU) and you irrevocably submit to the exclusive jurisdiction of the European courts.</p>
    <h2 class="f2 fw5">Privacy Policy</h2>
    <p class="lh-copy">Your privacy is important to us.</p>
    <p class="lh-copy">It is nudj's policy to respect your privacy regarding any information we may collect while operating our website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise
      make use of personal information. We have outlined our privacy policy below.</p>
    <ul class="lh-copy">
      <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
      <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
      <li>We will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
      <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
      <li>We will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
      <li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
      <li>We will only retain personal information for as long as necessary for the fulfilment of those purposes.</li>
    </ul>
    <p class="lh-copy">We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. nudj may change this privacy policy from time to time at nudj's sole discretion.</p>
  </div>
  ${footer()}
  `
}
