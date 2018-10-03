namespace SaitamaTec.SimpleGacha{
  export interface GachaInterface{
    Pick():GachaItem;
  }
  
  export class GachaItem{
    public Name:string;
    public Id:number;

    public construct($id:number,$name:string){

    }
  }

  export class GachaTable implements GachaInterface{

    public Pick():GachaItem{
        return null; 
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



