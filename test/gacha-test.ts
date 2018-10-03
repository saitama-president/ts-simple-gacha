import { assert } from "chai"
import {
  Gacha,
  GachaItem
} from "../src/gacha";
import SimpleGacha from "../sample/SimpleGacha"


describe("GACHA TEST ",()=>{
  var n:number=0;

  var $g:Gacha = new SimpleGacha();

  console.dir($g);

  console.dir(n);
  it("1M test",()=>{
    for(var i=10000;0<i--;){
      n++;
    }
    assert(()=>true,"NG");
  });
});
