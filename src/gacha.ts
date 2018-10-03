namespace SaitamaTec.SimpleGacha{
  interface GachaInterface{
    Pick():GachaItem;
  }
  
  export abstract class Gacha implements GachaInterface{
    
    private $name:string;
    public get Name():string{

      return $name;
    }


    public constructor(
      $name:string,
      $gacha:GachaTable
    ){
      this.$name=$name;

    }

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

  export class GachaTable implements GachaInterface{

    public Pick():GachaItem{
      
    }

    public constructor(
      $list:Array<GachaRecord> =[]
      ){
    }
  }

  export class GachaRecord{
    public quantity:number;
    public Label:string;
    public SubGacha:GachaTable=null;
    
    
    public constructor(
      $q:number,
      $label:string,
    ){
      
    }
  }

}



export {
  SaitamaTec.SimpleGacha.GachaItem,
  SaitamaTec.SimpleGacha.Gacha
}
