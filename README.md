# hebrew-code-util

[![npm version](https://badge.fury.io/js/hebrew-code-util.svg)](https://badge.fury.io/js/hebrew-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/hebrew-code-util.svg)](https://www.npmjs.org/package/hebrew-code-util)
[![Build Status](https://travis-ci.org/peshitta/hebrew-code-util.svg?branch=master)](https://travis-ci.org/peshitta/hebrew-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/hebrew-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/hebrew-code-util.svg)](https://david-dm.org/peshitta/hebrew-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/hebrew-code-util/dev-status.svg)](https://david-dm.org/peshitta/hebrew-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/hebrew-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/hebrew-code-util?branch=master)

Hebrew unicode utilities

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install hebrew-code-util --save
```

Following bundles are available:
* `hebrew-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `hebrew-code-util.min.js` - minified version of `hebrew-code-util.js`
* `hebrew-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/hebrew-code-util/-/hebrew-code-util-1.0.0.tgz](https://registry.npmjs.org/hebrew-code-util/-/hebrew-code-util-1.0.0.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/hebrew-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/hebrew-code-util/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [hebrew](#module_hebrew)
    * [.consonants](#module_hebrew.consonants) : <code>Array.&lt;string&gt;</code>
    * [.finalConsonants](#module_hebrew.finalConsonants) : <code>Array.&lt;string&gt;</code>
    * [.withFinalConsonants](#module_hebrew.withFinalConsonants) : <code>Array.&lt;string&gt;</code>
    * [.toFinalConsonantMap](#module_hebrew.toFinalConsonantMap) : <code>Object.&lt;string, string&gt;</code>
    * [.yiddishDigraphs](#module_hebrew.yiddishDigraphs) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_hebrew.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.punctuation](#module_hebrew.punctuation) : <code>Array.&lt;string&gt;</code>
    * [.commonVowels](#module_hebrew.commonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternCommonVowels](#module_hebrew.easternCommonVowels) : <code>Array.&lt;string&gt;</code>
    * [.otherVowels](#module_hebrew.otherVowels) : <code>Array.&lt;string&gt;</code>
    * [.allVowels](#module_hebrew.allVowels) : <code>Array.&lt;string&gt;</code>
    * [.diacritics](#module_hebrew.diacritics) : <code>Array.&lt;string&gt;</code>
    * [.cantillationDiacritics](#module_hebrew.cantillationDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.allDiacritics](#module_hebrew.allDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.dotting](#module_hebrew.dotting) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_hebrew.isConsonant) ⇒ <code>boolean</code>
    * [.isFinalConsonant](#module_hebrew.isFinalConsonant) ⇒ <code>boolean</code>
    * [.hasFinalConsonant](#module_hebrew.hasFinalConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_hebrew.isVowel) ⇒ <code>boolean</code>
    * [.isRegularDiacritic](#module_hebrew.isRegularDiacritic) ⇒ <code>boolean</code>
    * [.isCantillationDiacritic](#module_hebrew.isCantillationDiacritic) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_hebrew.isDiacritic) ⇒ <code>boolean</code>
    * [.isPunctuation](#module_hebrew.isPunctuation) ⇒ <code>boolean</code>
    * [.isDotting](#module_hebrew.isDotting) ⇒ <code>boolean</code>
    * [.endify](#module_hebrew.endify) ⇒ <code>string</code>
    * [.removeDotting](#module_hebrew.removeDotting) ⇒ <code>string</code>

<a name="module_hebrew.consonants"></a>

### hebrew.consonants : <code>Array.&lt;string&gt;</code>
Hebrew base 22 consonants

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.finalConsonants"></a>

### hebrew.finalConsonants : <code>Array.&lt;string&gt;</code>
Hebrew 5 final consonants

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.withFinalConsonants"></a>

### hebrew.withFinalConsonants : <code>Array.&lt;string&gt;</code>
Hebrew 5 with final pair consonants

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.toFinalConsonantMap"></a>

### hebrew.toFinalConsonantMap : <code>Object.&lt;string, string&gt;</code>
Map from regular to final consonant

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.yiddishDigraphs"></a>

### hebrew.yiddishDigraphs : <code>Array.&lt;string&gt;</code>
Yiddish digraphs

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.allConsonants"></a>

### hebrew.allConsonants : <code>Array.&lt;string&gt;</code>
All Hebrew consonants including final ones and yiddish digraphs

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.punctuation"></a>

### hebrew.punctuation : <code>Array.&lt;string&gt;</code>
Hebrew punctuation

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.commonVowels"></a>

### hebrew.commonVowels : <code>Array.&lt;string&gt;</code>
Hebrew common vowels - common in relation to Syriac

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.easternCommonVowels"></a>

### hebrew.easternCommonVowels : <code>Array.&lt;string&gt;</code>
Hebrew vowels common to eastern syriac

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.otherVowels"></a>

### hebrew.otherVowels : <code>Array.&lt;string&gt;</code>
Rest of Hebrew vowels

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.allVowels"></a>

### hebrew.allVowels : <code>Array.&lt;string&gt;</code>
All Hebrew vowels

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.diacritics"></a>

### hebrew.diacritics : <code>Array.&lt;string&gt;</code>
Hebrew regular diacritics

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.cantillationDiacritics"></a>

### hebrew.cantillationDiacritics : <code>Array.&lt;string&gt;</code>
Hebrew cantillation marks

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.allDiacritics"></a>

### hebrew.allDiacritics : <code>Array.&lt;string&gt;</code>
All hebrew diacritics

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.dotting"></a>

### hebrew.dotting : <code>Array.&lt;string&gt;</code>
Vowels and diacritics: used for consonantal only mapping

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
<a name="module_hebrew.isConsonant"></a>

### hebrew.isConsonant ⇒ <code>boolean</code>
Is character c a Hebrew consonant? All consonants and diagraphs are included.

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is Hebrew consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.isFinalConsonant"></a>

### hebrew.isFinalConsonant ⇒ <code>boolean</code>
Is character c one of the 5 Hebrew final consonant?

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is Hebrew final consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.hasFinalConsonant"></a>

### hebrew.hasFinalConsonant ⇒ <code>boolean</code>
Is character c one of the 5 Hebrew consonant that have final pairs?

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is Hebrew consonant with final pair  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.isVowel"></a>

### hebrew.isVowel ⇒ <code>boolean</code>
Is character c a vowel? Shuruq may stand as diagraph too - context needed for that.

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is a vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.isRegularDiacritic"></a>

### hebrew.isRegularDiacritic ⇒ <code>boolean</code>
Is character c a regular diacritic?

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is a regular diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.isCantillationDiacritic"></a>

### hebrew.isCantillationDiacritic ⇒ <code>boolean</code>
Is character c a cantillation diacritic?

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is a cantillation diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.isDiacritic"></a>

### hebrew.isDiacritic ⇒ <code>boolean</code>
Is character c a diacritic.

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is a diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.isPunctuation"></a>

### hebrew.isPunctuation ⇒ <code>boolean</code>
Is character c a punctuation character.

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is punctuation  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.isDotting"></a>

### hebrew.isDotting ⇒ <code>boolean</code>
Returns true if c is dotting character

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>boolean</code> - true if c is dotting  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrew.endify"></a>

### hebrew.endify ⇒ <code>string</code>
Fix end consonant for a Hebrew word

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>string</code> - word with end consonant corrected  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word |

<a name="module_hebrew.removeDotting"></a>

### hebrew.removeDotting ⇒ <code>string</code>
Remove dotting (vowels and diacritics), leaving consonantal word only.

**Kind**: static constant of [<code>hebrew</code>](#module_hebrew)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |

