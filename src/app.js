import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateDomainNames = () => {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon','net','puedes','studio','naciorg'];
  let domainExtensions = ['com','us','ve','es','io','uk','org','net'];
  let fullDomain = '';

  pronoun.map((pronoun) => {
    adj.map((adj) => {
      noun.map((noun) => {
        domainExtensions.map((extension)=>{
          if((`${noun}`).endsWith(extension)){
            let slice = extension.slice(0, extension.length);
            fullDomain = `resultado slice: ${pronoun}${adj}.${slice}`.trim()
          }else{
            fullDomain = (`${pronoun}${adj}${noun}.${extension}`).trim();
          }
          console.log(fullDomain);
        })
      });
    });
  });
}

window.onload = function () {
  //write your code here
  generateDomainNames()
  console.log("Hello Rigo from the console!");
};
