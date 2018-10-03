import { assert } from "chai"
import {
  Gacha,
  GachaItem
} from "../src/gacha";

export class SimpleGacha extends Gacha{
  public Pick(){
    return null;
  }
}


describe("GACHA TEST ",()=>{
  var n:number=0;

  var $g:Gacha = new SimpleGacha(
      "テストガチャ",
      new GachaTable(
      )
    );

  console.dir(n);
  it("1M test",()=>{
    for(var i=10000;0<i--;){
      n++;
    }
    assert(()=>true,"NG");
  });
});
