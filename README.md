# hebrew-code-util

[![npm version](https://badge.fury.io/js/hebrew-code-util.svg)](https://badge.fury.io/js/hebrew-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/hebrew-code-util.svg)](https://www.npmjs.org/package/hebrew-code-util)
[![Build Status](https://travis-ci.org/peshitta/hebrew-code-util.svg?branch=master)](https://travis-ci.org/peshitta/hebrew-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/hebrew-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/hebrew-code-util.svg)](https://david-dm.org/peshitta/hebrew-code-util)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/hebrew-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/hebrew-code-util?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

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
[https://registry.npmjs.org/hebrew-code-util/-/hebrew-code-util-1.0.6.tgz](https://registry.npmjs.org/hebrew-code-util/-/hebrew-code-util-1.0.6.tgz)

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

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [hebrewCodeUtil](#module_hebrewCodeUtil)
    * [.consonantsByName](#module_hebrewCodeUtil.consonantsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.consonants](#module_hebrewCodeUtil.consonants) : <code>Array.&lt;string&gt;</code>
    * [.finalConsonants](#module_hebrewCodeUtil.finalConsonants) : <code>Array.&lt;string&gt;</code>
    * [.withFinalConsonants](#module_hebrewCodeUtil.withFinalConsonants) : <code>Array.&lt;string&gt;</code>
    * [.toFinalConsonantMap](#module_hebrewCodeUtil.toFinalConsonantMap) : <code>Object.&lt;string, string&gt;</code>
    * [.begadkepat](#module_hebrewCodeUtil.begadkepat) : <code>Array.&lt;string&gt;</code>
    * [.yiddishDigraphs](#module_hebrewCodeUtil.yiddishDigraphs) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_hebrewCodeUtil.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.punctuation](#module_hebrewCodeUtil.punctuation) : <code>Array.&lt;string&gt;</code>
    * [.vowelsByName](#module_hebrewCodeUtil.vowelsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.commonVowels](#module_hebrewCodeUtil.commonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternCommonVowels](#module_hebrewCodeUtil.easternCommonVowels) : <code>Array.&lt;string&gt;</code>
    * [.otherVowels](#module_hebrewCodeUtil.otherVowels) : <code>Array.&lt;string&gt;</code>
    * [.allVowels](#module_hebrewCodeUtil.allVowels) : <code>Array.&lt;string&gt;</code>
    * [.diacriticsByName](#module_hebrewCodeUtil.diacriticsByName) : <code>Array.&lt;string&gt;</code>
    * [.diacritics](#module_hebrewCodeUtil.diacritics) : <code>Array.&lt;string&gt;</code>
    * [.cantillationDiacritics](#module_hebrewCodeUtil.cantillationDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.allDiacritics](#module_hebrewCodeUtil.allDiacritics) : <code>Array.&lt;string&gt;</code>
    * [.dotting](#module_hebrewCodeUtil.dotting) : <code>Array.&lt;string&gt;</code>
    * [.letterAsciiMap](#module_hebrewCodeUtil.letterAsciiMap) : <code>Object.&lt;string, string&gt;</code>
    * [.isConsonant](#module_hebrewCodeUtil.isConsonant) ⇒ <code>boolean</code>
    * [.isFinalConsonant](#module_hebrewCodeUtil.isFinalConsonant) ⇒ <code>boolean</code>
    * [.hasFinalConsonant](#module_hebrewCodeUtil.hasFinalConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_hebrewCodeUtil.isVowel) ⇒ <code>boolean</code>
    * [.isRegularDiacritic](#module_hebrewCodeUtil.isRegularDiacritic) ⇒ <code>boolean</code>
    * [.isCantillationDiacritic](#module_hebrewCodeUtil.isCantillationDiacritic) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_hebrewCodeUtil.isDiacritic) ⇒ <code>boolean</code>
    * [.isPunctuation](#module_hebrewCodeUtil.isPunctuation) ⇒ <code>boolean</code>
    * [.isDotting](#module_hebrewCodeUtil.isDotting) ⇒ <code>boolean</code>
    * [.isDotted](#module_hebrewCodeUtil.isDotted) ⇒ <code>boolean</code>
    * [.isBegadkepat](#module_hebrewCodeUtil.isBegadkepat) ⇒ <code>boolean</code>
    * [.removeDotting](#module_hebrewCodeUtil.removeDotting) ⇒ <code>string</code>
    * [.endify](#module_hebrewCodeUtil.endify) ⇒ <code>string</code>
    * [.sort](#module_hebrewCodeUtil.sort) ⇒ <code>number</code>

<a name="module_hebrewCodeUtil.consonantsByName"></a>

### hebrewCodeUtil.consonantsByName : <code>Object.&lt;string, string&gt;</code>
Hebrew consonant name to value map

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.consonants"></a>

### hebrewCodeUtil.consonants : <code>Array.&lt;string&gt;</code>
Hebrew base 22 consonants

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.finalConsonants"></a>

### hebrewCodeUtil.finalConsonants : <code>Array.&lt;string&gt;</code>
Hebrew 5 final consonants

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.withFinalConsonants"></a>

### hebrewCodeUtil.withFinalConsonants : <code>Array.&lt;string&gt;</code>
Hebrew 5 with final pair consonants

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.toFinalConsonantMap"></a>

### hebrewCodeUtil.toFinalConsonantMap : <code>Object.&lt;string, string&gt;</code>
Map from regular to final consonant

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.begadkepat"></a>

### hebrewCodeUtil.begadkepat : <code>Array.&lt;string&gt;</code>
Begadkepat letters

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.yiddishDigraphs"></a>

### hebrewCodeUtil.yiddishDigraphs : <code>Array.&lt;string&gt;</code>
Yiddish digraphs

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.allConsonants"></a>

### hebrewCodeUtil.allConsonants : <code>Array.&lt;string&gt;</code>
All Hebrew consonants including final ones and yiddish digraphs

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.punctuation"></a>

### hebrewCodeUtil.punctuation : <code>Array.&lt;string&gt;</code>
Hebrew punctuation

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.vowelsByName"></a>

### hebrewCodeUtil.vowelsByName : <code>Object.&lt;string, string&gt;</code>
Hebrew vowel name to value map

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.commonVowels"></a>

### hebrewCodeUtil.commonVowels : <code>Array.&lt;string&gt;</code>
Hebrew common vowels - common in relation to Syriac

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.easternCommonVowels"></a>

### hebrewCodeUtil.easternCommonVowels : <code>Array.&lt;string&gt;</code>
Hebrew vowels common to eastern syriac

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.otherVowels"></a>

### hebrewCodeUtil.otherVowels : <code>Array.&lt;string&gt;</code>
Rest of Hebrew vowels

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.allVowels"></a>

### hebrewCodeUtil.allVowels : <code>Array.&lt;string&gt;</code>
All Hebrew vowels

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.diacriticsByName"></a>

### hebrewCodeUtil.diacriticsByName : <code>Array.&lt;string&gt;</code>
Hebrew regular diacritics name/value map

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.diacritics"></a>

### hebrewCodeUtil.diacritics : <code>Array.&lt;string&gt;</code>
Hebrew regular diacritics

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.cantillationDiacritics"></a>

### hebrewCodeUtil.cantillationDiacritics : <code>Array.&lt;string&gt;</code>
Hebrew cantillation marks

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.allDiacritics"></a>

### hebrewCodeUtil.allDiacritics : <code>Array.&lt;string&gt;</code>
All hebrew diacritics

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.dotting"></a>

### hebrewCodeUtil.dotting : <code>Array.&lt;string&gt;</code>
Vowels and diacritics: used for consonantal only mapping

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.letterAsciiMap"></a>

### hebrewCodeUtil.letterAsciiMap : <code>Object.&lt;string, string&gt;</code>
Hebrew to ordinal ASCII value. Used for sorting:
a b c d e f g h i j k l m n o p q r s t u v
w x y z { | }

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
<a name="module_hebrewCodeUtil.isConsonant"></a>

### hebrewCodeUtil.isConsonant ⇒ <code>boolean</code>
Is character c a Hebrew consonant? All consonants and diagraphs are included.

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Hebrew consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.isFinalConsonant"></a>

### hebrewCodeUtil.isFinalConsonant ⇒ <code>boolean</code>
Is character c one of the 5 Hebrew final consonant?

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Hebrew final consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.hasFinalConsonant"></a>

### hebrewCodeUtil.hasFinalConsonant ⇒ <code>boolean</code>
Is character c one of the 5 Hebrew consonant that have final pairs?

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Hebrew consonant with final pair  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.isVowel"></a>

### hebrewCodeUtil.isVowel ⇒ <code>boolean</code>
Is character c a vowel? Shuruq may stand as diagraph too - context needed for that.

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.isRegularDiacritic"></a>

### hebrewCodeUtil.isRegularDiacritic ⇒ <code>boolean</code>
Is character c a regular diacritic?

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a regular diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.isCantillationDiacritic"></a>

### hebrewCodeUtil.isCantillationDiacritic ⇒ <code>boolean</code>
Is character c a cantillation diacritic?

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a cantillation diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.isDiacritic"></a>

### hebrewCodeUtil.isDiacritic ⇒ <code>boolean</code>
Is character c a diacritic.

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.isPunctuation"></a>

### hebrewCodeUtil.isPunctuation ⇒ <code>boolean</code>
Is character c a punctuation character.

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is punctuation  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.isDotting"></a>

### hebrewCodeUtil.isDotting ⇒ <code>boolean</code>
Returns true if c is dotting character

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is dotting  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.isDotted"></a>

### hebrewCodeUtil.isDotted ⇒ <code>boolean</code>
Return true if input word has vowels or diacritics

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if word has vowels or diacritics  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input Hebrew unicode word |

<a name="module_hebrewCodeUtil.isBegadkepat"></a>

### hebrewCodeUtil.isBegadkepat ⇒ <code>boolean</code>
Returns true if c is begadkepat character

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>boolean</code> - true if c is begadkepat  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_hebrewCodeUtil.removeDotting"></a>

### hebrewCodeUtil.removeDotting ⇒ <code>string</code>
Remove dotting (vowels and diacritics), leaving consonantal word only.

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |

<a name="module_hebrewCodeUtil.endify"></a>

### hebrewCodeUtil.endify ⇒ <code>string</code>
Fix end consonant for a Hebrew word

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>string</code> - word with end consonant corrected  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word |

<a name="module_hebrewCodeUtil.sort"></a>

### hebrewCodeUtil.sort ⇒ <code>number</code>
Comparator function to be used for sorting words

**Kind**: static constant of [<code>hebrewCodeUtil</code>](#module_hebrewCodeUtil)  
**Returns**: <code>number</code> - -1, 0, 1 depending on word sorting  

| Param | Type | Description |
| --- | --- | --- |
| word1 | <code>string</code> | first word to compare |
| word2 | <code>string</code> | second word to compare |

