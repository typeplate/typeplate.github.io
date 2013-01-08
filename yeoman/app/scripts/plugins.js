// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// place any jQuery/helper plugins in here, instead of separate, slower script files.


/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

(function(){

// Private helper vars
var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;

var _ = self.Prism = {
  util: {
    type: function (o) {
      return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
    },

    // Deep clone a language definition (e.g. to extend it)
    clone: function (o) {
      var type = _.util.type(o);

      switch (type) {
        case 'Object':
          var clone = {};

          for (var key in o) {
            if (o.hasOwnProperty(key)) {
              clone[key] = _.util.clone(o[key]);
            }
          }

          return clone;

        case 'Array':
          return o.slice();
      }

      return o;
    }
  },

  languages: {
    extend: function (id, redef) {
      var lang = _.util.clone(_.languages[id]);

      for (var key in redef) {
        lang[key] = redef[key];
      }

      return lang;
    },

    // Insert a token before another token in a language literal
    insertBefore: function (inside, before, insert, root) {
      root = root || _.languages;
      var grammar = root[inside];
      var ret = {};

      for (var token in grammar) {

        if (grammar.hasOwnProperty(token)) {

          if (token == before) {

            for (var newToken in insert) {

              if (insert.hasOwnProperty(newToken)) {
                ret[newToken] = insert[newToken];
              }
            }
          }

          ret[token] = grammar[token];
        }
      }

      return root[inside] = ret;
    },

    // Traverse a language definition with Depth First Search
    DFS: function(o, callback) {
      for (var i in o) {
        callback.call(o, i, o[i]);

        if (_.util.type(o) === 'Object') {
          _.languages.DFS(o[i], callback);
        }
      }
    }
  },

  highlightAll: function(async, callback) {
    var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');

    for (var i=0, element; element = elements[i++];) {
      _.highlightElement(element, async === true, callback);
    }
  },

  highlightElement: function(element, async, callback) {
    // Find language
    var language, grammar, parent = element;

    while (parent && !lang.test(parent.className)) {
      parent = parent.parentNode;
    }

    if (parent) {
      language = (parent.className.match(lang) || [,''])[1];
      grammar = _.languages[language];
    }

    if (!grammar) {
      return;
    }

    // Set language on the element, if not present
    element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

    // Set language on the parent, for styling
    parent = element.parentNode;

    if (/pre/i.test(parent.nodeName)) {
      parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
    }

    var code = element.textContent;

    if(!code) {
      return;
    }

    code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;')
               .replace(/>/g, '&gt;').replace(/\u00a0/g, ' ');
    //console.time(code.slice(0,50));

    var env = {
      element: element,
      language: language,
      grammar: grammar,
      code: code
    };

    _.hooks.run('before-highlight', env);

    if (async && self.Worker) {
      var worker = new Worker(_.filename);

      worker.onmessage = function(evt) {
        env.highlightedCode = Token.stringify(JSON.parse(evt.data));
        env.element.innerHTML = env.highlightedCode;

        callback && callback.call(env.element);
        //console.timeEnd(code.slice(0,50));
        _.hooks.run('after-highlight', env);
      };

      worker.postMessage(JSON.stringify({
        language: env.language,
        code: env.code
      }));
    }
    else {
      env.highlightedCode = _.highlight(env.code, env.grammar)
      env.element.innerHTML = env.highlightedCode;

      callback && callback.call(element);

      _.hooks.run('after-highlight', env);
      //console.timeEnd(code.slice(0,50));
    }
  },

  highlight: function (text, grammar) {
    return Token.stringify(_.tokenize(text, grammar));
  },

  tokenize: function(text, grammar) {
    var Token = _.Token;

    var strarr = [text];

    var rest = grammar.rest;

    if (rest) {
      for (var token in rest) {
        grammar[token] = rest[token];
      }

      delete grammar.rest;
    }

    tokenloop: for (var token in grammar) {
      if(!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }

      var pattern = grammar[token],
        inside = pattern.inside,
        lookbehind = !!pattern.lookbehind || 0;

      pattern = pattern.pattern || pattern;

      for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop

        var str = strarr[i];

        if (strarr.length > text.length) {
          // Something went terribly wrong, ABORT, ABORT!
          break tokenloop;
        }

        if (str instanceof Token) {
          continue;
        }

        pattern.lastIndex = 0;

        var match = pattern.exec(str);

        if (match) {
          if(lookbehind) {
            lookbehind = match[1].length;
          }

          var from = match.index - 1 + lookbehind,
              match = match[0].slice(lookbehind),
              len = match.length,
              to = from + len,
            before = str.slice(0, from + 1),
            after = str.slice(to + 1);

          var args = [i, 1];

          if (before) {
            args.push(before);
          }

          var wrapped = new Token(token, inside? _.tokenize(match, inside) : match);

          args.push(wrapped);

          if (after) {
            args.push(after);
          }

          Array.prototype.splice.apply(strarr, args);
        }
      }
    }

    return strarr;
  },

  hooks: {
    all: {},

    add: function (name, callback) {
      var hooks = _.hooks.all;

      hooks[name] = hooks[name] || [];

      hooks[name].push(callback);
    },

    run: function (name, env) {
      var callbacks = _.hooks.all[name];

      if (!callbacks || !callbacks.length) {
        return;
      }

      for (var i=0, callback; callback = callbacks[i++];) {
        callback(env);
      }
    }
  }
};

var Token = _.Token = function(type, content) {
  this.type = type;
  this.content = content;
};

Token.stringify = function(o) {
  if (typeof o == 'string') {
    return o;
  }

  if (Object.prototype.toString.call(o) == '[object Array]') {
    for (var i=0; i<o.length; i++) {
      o[i] = Token.stringify(o[i]);
    }

    return o.join('');
  }

  var env = {
    type: o.type,
    content: Token.stringify(o.content),
    tag: 'span',
    classes: ['token', o.type],
    attributes: {}
  };

  if (env.type == 'comment') {
    env.attributes['spellcheck'] = 'true';
  }

  _.hooks.run('wrap', env);

  var attributes = '';

  for (var name in env.attributes) {
    attributes += name + '="' + (env.attributes[name] || '') + '"';
  }

  return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';

};

if (!self.document) {
  // In worker
  self.addEventListener('message', function(evt) {
    var message = JSON.parse(evt.data),
        lang = message.language,
        code = message.code;

    self.postMessage(JSON.stringify(_.tokenize(code, _.languages[lang])));
    self.close();
  }, false);

  return;
}

// Get current script and highlight
var script = document.getElementsByTagName('script');

script = script[script.length - 1];

if (script) {
  _.filename = script.src;

  if (document.addEventListener && !script.hasAttribute('data-manual')) {
    document.addEventListener('DOMContentLoaded', _.highlightAll);
  }
}

})();;
Prism.languages.markup = {
  'comment': /&lt;!--[\w\W]*?--(&gt;|&gt;)/g,
  'prolog': /&lt;\?.+?\?&gt;/,
  'doctype': /&lt;!DOCTYPE.+?&gt;/,
  'cdata': /&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,
  'tag': {
    pattern: /&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi,
    inside: {
      'tag': {
        pattern: /^&lt;\/?[\w:-]+/i,
        inside: {
          'punctuation': /^&lt;\/?/,
          'namespace': /^[\w-]+?:/
        }
      },
      'attr-value': {
        pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
        inside: {
          'punctuation': /=|&gt;|"/g
        }
      },
      'punctuation': /\/?&gt;/g,
      'attr-name': {
        pattern: /[\w:-]+/g,
        inside: {
          'namespace': /^[\w-]+?:/
        }
      }

    }
  },
  'entity': /&amp;#?[\da-z]{1,8};/gi
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});;


// ========================================================== CSS

Prism.languages.css = {
  'comment': /\/\*[\w\W]*?\*\//g,
  'atrule': /@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi,
  'url': /url\((["']?).*?\1\)/gi,
  'selector': /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
  'property': /(\b|\B)[a-z-]+(?=\s*:)/ig,
  'string': /("|')(\\?.)*?\1/g,
  'important': /\B!important\b/gi,
  'ignore': /&(lt|gt|amp);/gi,
  'punctuation': /[\{\};:]/g
};

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    'style': {
      pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,
      inside: {
        'tag': {
          pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,
          inside: Prism.languages.markup.tag.inside
        },
        rest: Prism.languages.css
      }
    }
  });
};
Prism.languages.clike = {
  'comment': {
    pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
    lookbehind: true
  },
  'string': /("|')(\\?.)*?\1/g,
  'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,
  'boolean': /\b(true|false)\b/g,
  'number': /\b-?(0x)?\d*\.?[\da-f]+\b/g,
  'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
  'ignore': /&(lt|gt|amp);/gi,
  'punctuation': /[{}[\];(),.:]/g
};;
Prism.languages.javascript = Prism.languages.extend('clike', {
  'keyword': /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,
  'number': /\b(-?(0x)?\d*\.?[\da-f]+|NaN|-?Infinity)\b/g,
});

Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
    lookbehind: true
  }
});

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    'script': {
      pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,
      inside: {
        'tag': {
          pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,
          inside: Prism.languages.markup.tag.inside
        },
        rest: Prism.languages.javascript
      }
    }
  });
};


// ========================================================== Sass

(function(){

if(!window.Prism) {
    return;
}

RegExp.create = function(str, replacements, flags) {
    for(var id in replacements) {
        var replacement = replacements[id],
            idRegExp = RegExp('{{' + id + '}}', 'gi');

        if(replacement.source) {
            replacement = replacement.source.replace(/^\^|\$$/g, '');
        }

        // Don't add extra parentheses if they already exist
        str = str.replace(RegExp('\\(' + idRegExp.source + '\\)', 'gi'), '(' + replacement + ')');

        str = str.replace(idRegExp, '(?:' + replacement + ')');
    }

    return RegExp(str, flags);
};
var number = /-?\d*\.?\d+/;
Prism.languages.sass = {
    'comment': {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: true
    },

    'control': /@(if|else if|else|for|each|while)/i,
    'directive': /@(import|extend|debug|warn)/i,
    'keyword': /&amp;|@(mixin|include|function|return)/i,

    'atrule': /@[\w-]+?(?=(\s+.+)?(\s*{|\s*;))/gi,
    //'url': /url\((["']?).*?\1\)/gi,
    'string': /("|')(\\?.)*?\1/g,
    'url': /([-a-z]+-)*url(?=\()/gi, // compassified

    'placeholder': /%[-_\w]+/i,
    'variable': /\$[-_\w]+/i,

    'property': /(\b|\B)[a-z-]+(?=\s*:)/ig,

    'important': /\B!important\b/gi,
    'statement': /\B!(default|optional)\b/gi,

    'boolean': /\b(true|false)\b/g,
    'null': /\b(null)\b/g,
    'number': /\b-?(0x)?(\d*\.?\d+|([\da-f]{3}){1,2})(?=(ddpx|px|pt|cm|mm|in|em|ex|pc)|\b)/g,

    // sass short mixin declaration
    'mixin': /(^|\\n)\\s*=.*/g,
    'mixin': /(^|\\n)\\s*\\+.*/g,

    // specific css values (taken from dabblet source)
    'gradient': /\b(repeating-)?(linear|radial)-gradient\(((rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
    'abslength': RegExp.create('(\\b|\\B){{number}}{{unit}}\\b', {
            number: number,
            unit: /(cm|mm|in|pt|pc|px)/
        }, 'gi'),
    'easing': RegExp.create('\\b{{bezier}}\\B|\\b{{keyword}}(?=\\s|;|\\}|$)', {
            bezier: RegExp.create('cubic-bezier\\(({{number}},\\s*){3}{{number}}\\)', {
                number: number
            }),
            keyword: /linear|ease(-in)?(-out)?/
        }, 'gi'),
    'time': RegExp.create('(\\b|\\B){{number}}m?s\\b', {
            number: number
        }, 'gi'),
    'angle': RegExp.create('(\\b|\\B){{number}}(deg|g?rad|turn)\\b', {
            number: number
        }, 'gi'),
    'fontfamily': /(("|')[\w\s]+\2,\s*|\w+,\s*)*(sans-serif|serif|monospace|cursive|fantasy)\b/gi,

    'entity': /\\[\da-f]{1,8}/gi,

    //'selector-id': /#(\\w|-|_)+/g,
    //'selector-class': /\\.(\\w|-|_)+/g,
    'selector': /[^;\{\}\(\)\s][^;\{\}\(\)]*(?=\s*\{)/g,

    'operator': /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g,

    'unit': /\b(ddpx|px|pt|cm|mm|in|em|ex|pc)\b|%/i,

    'ignore': /&(lt|gt|amp);/gi,
    'punctuation': /[\{\}\(\);:,\.#]/g
};

})();


// ========================================================== PHP

Prism.languages.php = {
  'comment': {
    pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
    lookbehind: true
  },
  'deliminator': /(\?>|\?&gt;|&lt;\?php|<\?php)/ig,
  'variable': /(\$[a-z_]\w+)((-(\>|&gt;)\$?[a-z_]\w+(?!\()))?\b/ig,
  'string': /(("|')(\\?.)*?\2)|((<<<|&lt;&lt;&lt;)([a-zA-Z_])[\w\W]+\4;)/g,
  'regex': {
    pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
    lookbehind: true
  },
  'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|pu blic|implements|extends|private|protected|throw|exit|echo)\b/g,
  'function': /(((-(\>|&gt;)\w+))(?=\())|(\b(abs|acos|acosh|addcslashes|addslashes|array_change_key_case|array_chunk|array_combine|array_count_values|array_diff|array_diff_assoc|array_diff_key|array_diff_uassoc|array_diff_ukey|array_fill|array_filter|array_flip|array_intersect|array_intersect_assoc|array_intersect_key|array_intersect_uassoc|array_intersect_ukey|array_key_exists|array_keys|array_map|array_merge|array_merge_recursive|array_multisort|array_pad|array_pop|array_product|array_push|array_rand|array_reduce|array_reverse|array_search|array_shift|array_slice|array_splice|array_sum|array_udiff|array_udiff_assoc|array_udiff_uassoc|array_uintersect|array_uintersect_assoc|array_uintersect_uassoc|array_unique|array_unshift|array_values|array_walk|array_walk_recursive|atan|atan2|atanh|base64_decode|base64_encode|base_convert|basename|bcadd|bccomp|bcdiv|bcmod|bcmul|bindec|bindtextdomain|bzclose|bzcompress|bzdecompress|bzerrno|bzerror|bzerrstr|bzflush|bzopen|list|bzread|bzwrite|ceil|chdir|checkdate|checkdnsrr|chgrp|chmod|chop|chown|chr|chroot|chunk_split|class_exists|closedir|closelog|copy|cos|cosh|count|count_chars|date|decbin|dechex|decoct|deg2rad|delete|ebcdic2ascii|empty|end|ereg|ereg_replace|eregi|eregi_replace|error_log|error_reporting|escapeshellarg|escapeshellcmd|eval|exec|exp|explode|extension_loaded|feof|fflush|fgetc|fgetcsv|fgets|fgetss|file_exists|file_get_contents|file_put_contents|fileatime|filectime|filegroup|fileinode|filemtime|fileowner|fileperms|filesize|filetype|floatval|flock|floor|flush|fmod|fnmatch|fopen|fpassthru|fprintf|fputcsv|fputs|fread|fscanf|fseek|fsockopen|fstat|ftell|ftok|getallheaders|getcwd|getdate|getenv|gethostbyaddr|gethostbyname|gethostbynamel|getimagesize|getlastmod|getmxrr|getmygid|getmyinode|getmypid|getmyuid|getopt|getprotobyname|getprotobynumber|getrandmax|getrusage|getservbyname|getservbyport|gettext|gettimeofday|gettype|glob|gmdate|gmmktime|ini_alter|ini_get|ini_get_all|ini_restore|ini_set|interface_exists|intval|ip2long|is_a|is_array|is_bool|is_callable|is_dir|is_double|is_executable|is_file|is_finite|is_float|is_infinite|is_int|is_integer|is_link|is_long|is_nan|is_null|is_numeric|is_object|is_readable|is_real|is_resource|is_scalar|is_soap_fault|is_string|is_subclass_of|is_uploaded_file|is_writable|is_writeable|mkdir|mktime|nl2br|parse_ini_file|parse_str|parse_url|passthru|pathinfo|readlink|realpath|rewind|rewinddir|rmdir|round|str_ireplace|str_pad|str_repeat|str_replace|str_rot13|str_shuffle|str_split|str_word_count|strcasecmp|strchr|strcmp|strcoll|strcspn|strftime|strip_tags|stripcslashes|stripos|stripslashes|stristr|strlen|strnatcasecmp|strnatcmp|strncasecmp|strncmp|strpbrk|strpos|strptime|strrchr|strrev|strripos|strrpos|strspn|strstr|strtok|strtolower|strtotime|strtoupper|strtr|strval|substr|substr_compare|unset|print|isset)\b)/g,
  'boolean': /\b(true|false)\b/g,
  'number': /\b-?(0x)?\d*\.?\d+\b/g,
  'operator': /[-+]{1,2}|!|=?\<|=?\>;|={1,2}|(\&amp;|\&){1,2}|\|?\||\?|\*|\//g,
  'punctuation': /[{}[\];(),.:]/g,
  'constant': /(\b[A-Z_]+\b)|(__FILE__|__DIR__|__LINE__|__METHOD__|__NAMESPACE__|__FUNCTION__|__CLASS__)\b/g,
};

if (Prism.languages.markup) {
  Prism.languages.insertBefore('php', 'deliminator', {
    'markup': {
      pattern: /(\?>|\?&gt;)[\w\W]*?(?=(&lt;\?php|<\?php))/ig,
      lookbehind : true,
      inside: {
        'tag': {
          pattern: /&lt;\/?[\w:-]+\s*[\w\W]*?&gt;/gi,
          inside: Prism.languages.markup.tag.inside
        },
        rest: Prism.languages.php
      }
    }
  });
}

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'prolog', {
    'php': {
      pattern: /(&lt;\?php|<\?php)[\w\W]*?(\?>|\?&gt;)/g,
      inside: {
        'php': {
          pattern: /(&lt;\?php|<\?php)[\w\W]*?(\?>|\?&gt;)/g,
          inside: Prism.languages.php
        },
        rest: Prism.languages.markup.tag
      }
    }
  });
}


// ========================================================== Ruby

(function(){

if(!window.Prism) {
    return;
}

Prism.languages.ruby = {
    'comment': /#[^\r\n]*(\r?\n|$)/g,
    'string': /("|')(\\?.)*?\1/g,
    'regex': {
    pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
    lookbehind: true
    },
    'keyword': /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,
    'builtin': /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
    'boolean': /\b(true|false)\b/g,
    'number': /\b-?(0x)?\d*\.?\d+\b/g,
    'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
    'inst-var': /[@&]\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
    'symbol': /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
    'const': /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g,
    'ignore': /&(lt|gt|amp);/gi,
    'punctuation': /[{}[\];(),.:]/g
};

})();


// ========================================================== Bash

(function(){

if(!window.Prism) {
    return;
}

Prism.languages.bash = {
    'comment': {
        pattern: /^#.*(\r?\n|$)/gm,
        lookbehind: false
    },
    'string': /("|')(\\?.)*?\1/g,
    'regex': {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: true
    },
    'keyword': /\b(if|fi|then|elif|else|for|do|done|until|while|break|continue|case|function|return|in|eq|ne|gt|lt|ge|le|esac)\b/g,
    'command': /\b(mkfs|alias|apropos|awk|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|curl|date|dc|dd|ddrescue|declare|df|diff|diff3|dig|dir|dircolors|dirname|dirs|du|echo|egrep|eject|enable|env|ethtool|eval|exec|exit|expand|export|expr|false|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|gawk|getopts|grep|groups|gzip|hash|head|history|hostname|id|ifconfig|import|install|join|kill|less|let|ln|local|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|mount|mtools|mv|netstat|nice|nl|nohup|nslookup|open|op|passwd|paste|pathchk|ping|popd|pr|printcap|printenv|printf|ps|pushd|pwd|quota|quotacheck|quotactl|ram|rcp|read|readonly|renice|remsync|rm|rmdir|rsync|screen|scp|sdiff|sed|select|seq|set|sftp|shift|shopt|shutdown|sleep|sort|source|split|ssh|strace|su|sudo|sum|symlink|sync|tail|tar|tee|test|time|times|touch|top|traceroute|trap|tr|true|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unset|unshar|useradd|usermod|users|uuencode|uudecode|v|vdir|vi|watch|wc|whereis|which|who|whoami|wget|xargs|yes|vim|bind)\b/g,
    'boolean': /\b(true|false)\b/g,
    'number': /\b-?(0x)?\d*\.?\d+\b/g,
    'operator': /[-+]{1,2}|!|`|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
    'ignore': /&(lt|gt|amp);/gi,
    'punctuation': /[{}[\];(),.:]/g
};

})();


/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='www.youtube.com']",
        "iframe[src*='www.youtube-nocookie.com']",
        "iframe[src*='www.kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );