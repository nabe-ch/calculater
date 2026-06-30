// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");
// const six = document.querySelector(".six");
// const seven = document.querySelector(".seven");
// const eight = document.querySelector(".eight");
// const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multi = document.querySelector(".multi");
const division = document.querySelector(".division");
const lisetButton = document.querySelector(".lisetButton");
const equalButton = document.querySelector(".equalButton");
const backButton = document.querySelector(".backButton");
const monitor = document.querySelector(".monitor");
let monitorNum;

document.addEventListener(("click"),(event)=>{
    const btn = event.target;

    if(btn.tagName !== "BUTTON"){//これないとundefined入る
        return;
    };

    if(btn === lisetButton){//モニターのリセット
        monitor.value = 0;
        console.log("リセットしました");

    } else if(btn === equalButton){//イコールボタン
        try{
            // monitor.value = eval(monitor.value);
            // console.log("計算しました");
            if(["+","-","*","/"].includes(monitor.value.slice(-1))){
                monitor.value = monitor.value.slice(0,-1);
                console.log("演算子を削除しました");
            };
            monitor.value = eval(monitor.value);
            console.log("計算完了");
        } catch(error){
            monitor.value ="ERROR";
            console.log("計算エラーです");
        };
        

    } else if(btn === backButton){//後ろから１桁削除
        monitor.value = monitor.value.slice(0,-1)
        console.log("１桁削除");
        if(monitor.value === ""){
            monitor.value = 0;
        };
        //演算用ボタン
    }else if(btn === plus){
        if(monitor.value == 0){
            monitor.value = 0;
        }else if(["+","-","*","/"].includes(monitor.value.slice(-1))){
            console.log("連続のため表示しません");
            return;            
        }else{ 
            monitor.value = monitor.value + plus.value;
            console.log("プラス");
        };
        
        }else if(btn === minus){
         if(monitor.value == 0){
            monitor.value = 0;
        }else if(["+","-","*","/"].includes(monitor.value.slice(-1))){
            console.log("連続のため表示しません");
            return;
        }else{
            monitor.value = monitor.value + minus.value;
            console.log("マイナス");
        };
        
    }else if(btn === multi){
         if(monitor.value == 0){
            monitor.value = 0;
        }else if(["+","-","*","/"].includes(monitor.value.slice(-1))){
            console.log("連続のため表示しません");
            return;
        }else{
            monitor.value = monitor.value + multi.value;
            console.log("かける");
        };

    }else if(btn === division){
         if(monitor.value == 0){
            monitor.value = 0;
        }else if(["+","-","*","/"].includes(monitor.value.slice(-1))){
            console.log("連続のため表示しません");
            return;
        }else{
            monitor.value = monitor.value + division.value;
            console.log("わる");
        };  
//０より大きく１未満の計算時
    }else if(btn === point){
        if(monitor.value === 0){
            monitor.value = monitor.value + point.value;
        }else if(monitor.value.slice(-1) === "."){
            return;
        }else{
            monitor.value = monitor.value + btn.value;
            console.log(`${btn.value}を追加`);
        };
//０ボタンの連打制御
    }else if(btn === zero && monitor.value === 0){
        return;
        
    }else{//oneの部分を全ボタン対応にする →クリア
        if(monitor.value === "0"){//初期値が０なら消して数字を追加
            monitor.value = btn.value;
        }else{
            monitor.value = monitor.value + btn.value;
            console.log(`${btn.value}を追加`);
        };
    };
});