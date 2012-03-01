#About

[restify-plugins](https://github.com/intabulas/restify-plugins) is a set of experimental plugins for [restify](http://mcavage.github.com/node-restify) that places our opinions ontop of restify's in the areas we disagree on

Currently there is not much here, and in fact all that is here now is a test to extract an API version from a **Accept** header param for our custom mime-type. It simply extracts it and sets **X-API-Version** accordingly. We have some others comming like an alternate accept parsers that will support custom content types (ie: application/vnd. etc)

# Installation

since we havent put this into the npm registry yet, you can add it to your package.json as a depedency using the http git url

    "restify-plugins": "git://github.com/intabulas/restify-plugins.git"

## License

The MIT License (MIT)
Copyright (c) 2012 Mark Lussier and Jeremy Pruitt

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Bugs

See <https://github.com/intabulas/restify-plugins/issues>.
