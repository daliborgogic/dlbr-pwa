# dlbr-pwa

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/ov7Zz8yuqdJAbrXDtzjikedq/daliborgogic/dlbr-pwa'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/ov7Zz8yuqdJAbrXDtzjikedq/daliborgogic/dlbr-pwa.svg' />
</a>


**Requires Node.js 8+**

``` bash
# install dependencies
$ npm i

# create .env file
$ cat > .env << EOL
CONTENTFUL_SPACE=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_WEBHOOK_USERNAME=
CONTENTFUL_WEBHOOK_PASSWORD=
EOL

# serve in dev mode, with hot reload at localhost:5000
$ npm run dev

# build for production
$ npm run build

# serve in production mode
$ npm start

# Webhooks
# To test locally run:
$ curl -X POST \
  -u username:password \
  --header "X-Contentful-Topic: ContentManagement.Entry.unpublish" \
  --data "test=data" \
  localhost:5000
```

### License

The MIT License ([MIT](https://github.com/daliborgogic/dlbr-pwa/blob/master/LICENSE))

Copyright (c) 2017 Dalibor Gogic

