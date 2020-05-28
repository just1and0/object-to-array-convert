# Object-To-Array-Convert
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->


[![Build Status](https://travis-ci.com/just1and0/object-to-array-convert.svg?branch=master)](https://travis-ci.com/just1and0/object-to-array-convert/)

[![Code Quality](https://scrutinizer-ci.com/g/just1and0/object-to-array-convert/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/just1and0/object-to-array-convert/?branch=master) 

[![NPM](https://nodei.co/npm/object-to-array-convert.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/object-to-array-convert/)

This package helps you work with objects in your project, making it very easy to convert object to array and manipulate it

### Installation

Add Object-To-Array-Convert to your project by executing

```sh
$  npm install object-to-array-convert
or
$ yarn add object-to-array-convert
```
> and that's it, you're all good to go!
 
 
### Usage

##### To convert object to array use the "O2A"

```sh
//import the O2A into your project
import firebase from  "firebase";
import { O2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = O2A(data);
        return value;
    })

```
###### NOTE: The O2A() api will add a new field to your record called object_key, which is the key of that item in the array.
#

##### To Reverse the items in an array use the "ReverseO2A"
###### understand that the "ReverseO2A" will only reverse items in an array and nothing more. But can also be used with the "O2A".

```sh
//import the O2A into your project
import firebase from  "firebase";
import { O2A, ReverseO2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = ReverseO2A(O2A(data));
        return value;
    })

```
#


##### To Get the First items in an array use the "FirstO2A"
###### understand that the "FirstO2A" will only get the first items in an array and nothing more. But can also be used with the "O2A".

```sh
//import the O2A into your project
import firebase from  "firebase";
import { O2A, FirstO2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = FirstO2A(O2A(data));
        return value;
    })

```
#

##### To Get the Last items in an array use the "LastO2A"
###### understand that the "LastO2A" will only get the last items in an array and nothing more. But can also be used with the "O2A".

```sh
//import the O2A into your project
import firebase from  "firebase";
import { O2A, LastO2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = LastO2A(O2A(data));
        return value;
    })

```
#
##### To Get a specific number of item in an array use the "GetNO2A"
###### understand that the "GetNO2A" will only get the specific number of items in an array and nothing more. But can also be used with the "O2A".

```sh
//import the O2A into your project
import firebase from  "firebase";
import { O2A, GetNO2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = GetNO2A(O2A(data), 3);
        return value;
    })

```

#
##### To Find out the total number of items in the array "CountO2A"
###### understand that the "CountO2A" will only get the total number of items in an array and nothing more. But can also be used with the "O2A". 

```sh
//import the O2A into your project
import firebase from  "firebase";
import { O2A, CountO2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = CountO2A(O2A(data));
        return value;
    })

```


## Props

#### all Object-To-Array-Convert props

| Name | Use |
| ------ | ------ |
| O2A(data) | to convert object to array |
| ReverseO2A(data) | Reverse the item in an array |
| FirstO2A(data) | Get first item in an array|
| LastO2A(data) | Get last item in an array |
| GetNO2A(data, number) | Get n amount of items in an array |
| CountO2A(data) | Get total amount of items in an array |
 
#

### don't forget to star, like and share :)


## Contributions
What to help make this package even more awesome?  [Read how to contribute](https://github.com/just1and0/object-to-array-convert/blob/master/contribution.md) 

  
## Licensing
This project is licensed under MIT license.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://linksnest.com/just1and0"><img src="https://avatars3.githubusercontent.com/u/17249207?v=4" width="100px;" alt=""/><br /><sub><b>Oluwatobi Shokunbi </b></sub></a><br /><a href="https://github.com/just1and0/object-to-array-convert/commits?author=just1and0" title="Code">💻</a> <a href="https://github.com/just1and0/object-to-array-convert/commits?author=just1and0" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!