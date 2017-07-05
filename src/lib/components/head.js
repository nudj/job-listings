module.exports = ({
  description
}) => {
  return `
  <head>
    <meta charset="utf-8">
    <title>FANJUKSU - Find a Non-tech Job at a UK Start Up</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='description' content="${description}" />
    <meta name='title' content="FANJUKSU - Find a Non-tech Job at a UK Start Up" />
    <meta property='og:description' content="${description}" />
    <meta property='twitter:description' content="${description}" />
    <meta property='og:type' content='article' />
    <meta property='twitter:card' content="FANJUKSU - Find a Non-tech Job at a UK Start Up" />
    <meta property='twitter:title' content="FANJUKSU - Find a Non-tech Job at a UK Start Up" />
    <meta property='og:site_name' content="FANJUKSU - Find a Non-tech Job at a UK Start Up" />
    <meta property='twitter:image' content='http://nudjcms.s3.amazonaws.com/assets/images/social/nudj-card-og.jpg' />
    <meta property='og:image' content='http://nudjcms.s3.amazonaws.com/assets/images/social/nudj-card-og.jpg' />
    <link rel='icon' href='assets/images/nudj-square.ico' type='image/x-icon' />
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css" />
    <link type="text/css" rel="stylesheet" href="assets/css/main.css">
    <script>
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-WT43QJJ');
    </script>
  </head>
  `
}
