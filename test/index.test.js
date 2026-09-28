import test from "node:test";import assert from "node:assert/strict";import{isHexColor}from"../src/index.js";
test("valid",()=>{assert.equal(isHexColor("#fff"),true);assert.equal(isHexColor("#112233aa"),true);});
test("alpha option",()=>assert.equal(isHexColor("#112233aa",{allowAlpha:false}),false));
test("hash option",()=>assert.equal(isHexColor("fff",{requireHash:false}),true));
