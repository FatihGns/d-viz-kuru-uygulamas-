 class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_c8lkuUXtIHSijtQmWcgMchamM8pzvDDIRSXwQRpH&base_currency=";
    }

   async exchange(amount,firstCurreny,secondCurrency){
       const response= await fetch(`${this.url}${firstCurreny}`)
       const result=await response.json();
       const exchangeResult=amount * result.data[secondCurrency]
       
       return exchangeResult
      
       
    }
}