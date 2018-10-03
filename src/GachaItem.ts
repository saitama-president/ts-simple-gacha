namespace SaitamaTec.SimpleGacha{
  interface GachaInterface{
    Pick():GachaItem;
  }
  export class GachaItem{
    public Name:string;
    public Id:number;

    public construct($id:number,$name:string){

    }
  }
}



export default SaitamaTec.SimpleGacha.GachaItem;
