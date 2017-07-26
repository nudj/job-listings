module.exports = ({
  role
}) => {
  return `
  <form action="//nudj.us16.list-manage.com/subscribe/post?u=269f51a3201e40daf167c72ae&amp;id=c47f6b9b69" method="post" class="flex flex-row flex-wrap validate measure mw5 w-100 center ma5 card bg-white" target="_blank">
      <input type="hidden" value="${role}" name="ROLE"/>
      <input class="pa3 input-reset ba b--white bg-white w-70-ns w-100 work-sans br1" type="email" placeholder="Email address" name="EMAIL" required>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_269f51a3201e40daf167c72ae_c47f6b9b69" tabindex="-1" value=""></div>
      <input onClick="onClick()" type="submit" value="Send me jobs!" name="subscribe" class="w-30-ns w-100 brand pa3 input-reset bn bg-bourbon hover-bg-ouch-blue white pointer f5">
  </form>
  `
}
