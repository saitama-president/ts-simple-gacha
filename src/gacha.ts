
interface GachaInterface{
  public Cast();
}


namespace SaitamaTec.SimpleGacha{
  export default abstract class Gacha implements GachaInterface{

    public Cast():GachaItem{
      return null;
    }
  }
  export class GachaItem{
    public Name:string;
    public Id:number;
    public construct($id:number,$name:string){

    }
  }

}

export class SimpleGacha extends Gacha{
  public Cast():{
    console.log("GachaOk");
  }
}
