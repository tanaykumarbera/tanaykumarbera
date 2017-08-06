# tanay.co

This is the part where I am suppose to explain what this repo is all about and all, but I suppose you already know that from the brief description above.

So the site is plain old static html, but with added benefits of ampproject. The repo makes use of Webpack to bundle up all the resources into static html and put it into `/dist` directory, which can be  served by github. It also takes care of compiling css from less, adding required vendor prefix and spitting out at page's header; all courtesy of AutoPrefixer.

If you would like to have a hands-on, you are welcome to clone it:
```
git clone https://github.com/tanaykumarbera/tanaykumarbera.git
```

#### How to build?
1. **Install dependencies**
```
npm install
```

2. **Build the files**
```
npm run build
```

That's it. You should have the static files in the `/dist` directory.
