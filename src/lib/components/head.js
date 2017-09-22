module.exports = ({
  description,
  fbevent
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
    <meta property='twitter:image' content='http://nudjcms.s3.amazonaws.com/assets/images/social/fanjuksu-card-twt.jpg' />
    <meta property='og:image' content='http://nudjcms.s3.amazonaws.com/assets/images/social/fanjuksu-card-og.jpg' />
    <link rel='icon' href='assets/images/fanjusksu-favicon.ico' type='image/x-icon' />
    <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Work+Sans" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="assets/css/main.css">
    <script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WT43QJJ');
    </script>
    <script>
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '487734104901586');
      fbq('track', 'PageView');
      ${fbevent || ''}
    </script>
  </head>
  `
}
