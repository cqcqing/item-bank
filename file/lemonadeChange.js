/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var a=0,b=0,c=0,result=false;
    for(i=0;i<bills.length;i++){
        bill=bills[i];
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
    }
    return result;
    
};
