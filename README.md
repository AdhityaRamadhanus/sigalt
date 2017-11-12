# sigalt
Monitor latest market activity of cryptocurrency (only support bitcoin.id exchange)

<p>
  <a href="#installation">Installation |</a>
  <a href="#usage">Usage |</a>
  <a href="#in-action">In Action | </a>
  <a href="#licenses">License</a>
  <br><br>
  <blockquote>
	sigalt is cli tools to monitor latest market activity in cryptocurrency

  Currenty it only supports bitcoin.id exchange 

  </blockquote>
</p>

Installation
----------- 
* git clone
* npm i
* make alias in bash (optional)
```
  echo "alias sigalt='node ${PWD}/app.js'" >> ~/.bash_aliases && source ~/.bash_aliases
```

Usage
----------------
```bash
Usage: app [options] [command]


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    monit [options] [coinName]  Monitor latest market activity on this cryptocurrency 
```
* Example, BCHIDR is bitcoin.id Code for Bitcoin cash to Indonesian Rupiah Market
```bash
$ sigalt monit BCHIDR 
```

In Action
----------------

License
----

MIT © [Adhitya Ramadhanus]

