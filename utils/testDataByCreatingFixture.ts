import {test as base } from '@playwright/test';

interface ReadingTestDataFromFixture {
username : string , 
password : string

}


export const customTest =base.extend<{readingTestDataFromFixture : ReadingTestDataFromFixture}>({
       readingTestDataFromFixture : {
       // here we are defining the java script object 
       // so won't be use quoto for key like we do in json file

       username : "tanya10@gmail.com",
       password : "Tanya@10"

       }
})