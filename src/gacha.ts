


namespace SaitamaTec.SimpleGacha{
  interface GachaInterface{
    Cast():GachaItem;
  }
  
  export abstract class Gacha implements GachaInterface{
    


    public Cast():GachaItem{
      return null;
    }
  }

  export class GachaTable{

  }

  export class GachaItem{
    public Name:string;
    public Id:number;

    public construct($id:number,$name:string){

    }
  }

}


export default SaitamaTec.SimpleGacha.Gacha;