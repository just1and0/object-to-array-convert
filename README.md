# Object-To-Array-Convert


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

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
#
```sh
//import the O2A into your project
import { O2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = O2A(data);
        return value;
    })

```
#

##### To Reverse the items in an array use the "ReverseO2A"
###### undersatnd that the "ReverseO2A" will only reverse items in an array and nothing more. But can also be used with the "O2A".
#
```sh
//import the O2A into your project
import { O2A, ReverseO2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = ReverseO2A(O2A(data));
        return value;
    })

```
#


##### To Get the First items in an array use the "FirstO2A"
###### undersatnd that the "FirstO2A" will only get the first items in an array and nothing more. But can also be used with the "O2A".
#
```sh
//import the O2A into your project
import { O2A, FirstO2A } from 'object-to-array-convert';

//and then use like so 
   firebase.database().ref("/user/").on('value', (data) => {
        const value = FirstO2A(O2A(data));
        return value;
    })

```
#

##### To Get the Last items in an array use the "LastO2A"
###### undersatnd that the "LastO2A" will only get the last items in an array and nothing more. But can also be used with the "O2A".
#
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
###### undersatnd that the "GetNO2A" will only get the specific number of items in an array and nothing more. But can also be used with the "O2A".
#
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


## Props

##all Object-To-Array-Convert props
| Name | Use |
| ------ | ------ |
| O2A(data) | to convert object to array |
| ReverseO2A(data) | Reverse the item in an array |
| FirstO2A(data) | Get first item in an array|
| LastO2A(data) | Get last item in an array |
| GetNO2A(data, number) | Get n amount of items in an array |
 
#
#
  >### don't forget to star, like and share :)

 #
 #
 License
----

ISC
