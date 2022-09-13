/// <reference types="cypress" />

describe("index", () => {
  it("render", () => {
    cy.visit("http://localhost:3000/");
    console.log('Navigator vendor: ' + navigator.vendor)
    console.log('Window User Agent: ' + /iPad|iPhone|iPod/.test(navigator.userAgent))
    console.log('Window msstream: ' + !window.MSStream)
    console.log('document ontouchend: ' + document.ontouchend)
  });
});
