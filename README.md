# Nuxt 3 Minimal Starter

Recommended

```bash
node version v18.13.0
npm version 8.19.0
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Setting Up HTTPS on localhost

Make sure to install the dependencies:

During development, apps are usually served via HTTP. However, Storyblok v2 requires your app to be served via HTTPS.
You need to install chocolatey https://chocolatey.org/ then install mkcert

```bash
choco install mkcert
```

Create a valid certificate by running the following command in your project folder:

```bash
mkcert localhost
```

In the project’s package.json, change the nuxt dev command to the following:

```bash
nuxt dev --https --ssl-cert localhost.pem --ssl-key localhost-key.pem
```

Then add this code in .env file (if you don't have one, create a .env file):

```bash
NODE_TLS_REJECT_UNAUTHORIZED=0
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

or Start the development server on `https://localhost:3000`

```bash
npm run dev:https
```

## Setup for Storyblok

1- Configure a new space by clicking 'add new space' then create a new space..

2- Name your space and select location 'US'

3- Once everything setup, you need to add a access token in .env file example:

```bash
STORYBLOK_API_TOKEN=your_token_here
```

(note: once you duplicate the starter storyblok, generate a new token and delete a old one)

4- Setup preview URL https://localhost:3000, since storyblok only accept in HTTPS.

5- On content, Click 'home' story and open the entry configuration and set the real path to /

6- Go to nuxt.config.js and make sure that those code are there:

```bash
modules: [['@storyblok/nuxt', {
    accessToken: process.env.STORYBLOK_API_TOKEN,
    apiOptions: { "region": "us" }
}]]
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
