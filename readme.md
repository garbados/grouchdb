# GrouchDB

[![Build Status](https://travis-ci.org/garbados/grouchdb.png?branch=master)](https://travis-ci.org/garbados/grouchdb)

GrouchDB is an open-source NoSQL database that

* Uses HTTP for its API
* Consists strongly
* Communicates in JSON
* Uses GrouchReduce for queries
* Is always available... to party!
* Scales to millions of requests even on as few as 1.5 nodes
* Does not merely tolerate partitions, but *embraces* them

## Install

GrouchDB is built on Node.js, because you love it, and it loves you. If you don't have Node.js installed, follow these steps:

1. Look at your life.
2. Look at your choices.

Then:

    git clone git@github.com:garbados/grouchdb.git
    cd grouchdb
    npm start

Now you're ready to use GrouchDB!

## Usage

GrouchDB is straightforward and intuitive. Let's try to put a document:

*Request*

    PUT http://localhost:10128/helloworld

    {
      salutation: "Hello, World!"
    }

*Response*

    400 Bad Request

    {
      "error": ">:(", 
      "reason": "You are, without a doubt, the stupidest bird I've ever met."
    }

Whoa whoa, GrouchDB, no need to be rude -- ah, let's, um, try reading that doc back, shall we?

*Request*

    GET http://localhost:10128/helloworld

*Response*

    400 Bad Request

    {
      "error": ">:(", 
      "reason": "Don't bang on my can! Go away."
    }

GrouchDB, come on, we have guests. Ugh.

Let's delete that doc and be done with it.

*Request*

    DELETE http://localhost:10128/helloworld

*Response*

    400 Bad Request

    {
      "error": ">:(", 
      "reason": "Ah, an angry face in a beautiful place - heaven."
    }

GrouchDB, folks. The database of the future!

## License

[ISC](http://opensource.org/licenses/ISC), yo.
