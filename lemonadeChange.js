/**
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。
 * 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
 * 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
 * 注意，一开始你手头没有任何零钱。
 * 如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var a=0,b=0,c=0,result=false;
    for(i=0;i<bills.length;i++){
        bill=bills[i];
        result=false;
        switch(bill){
           case 5:
                a++;
                result=true;
                break;
           case 10:
                if(a>0){
                    b++;
                    a--;
                    result=true;
                }
                break;
           case 20:
                if(a>0){
                    if(a>3){
                        c++;
                        a=a-3;
                        result=true;
                    }else if(b>0){
                        c++;
                        a--;
                        b--;
                        result=true;
                    }
                }
                break;
           }
           if(!result) break;
    }
    return result;
    
};
