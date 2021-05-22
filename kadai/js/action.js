// 今日の日付の設定をする
var today = new Date();
today.setDate(today.getDate());
var yyyy = today.getFullYear();
var mm =("0"+(today.getMonth()+1)).slice(-2);
var dd =("0"+today.getDate()).slice(-2);
document.getElementById("today").value = yyyy+"-"+mm+"-"+dd;


// 要素の保存に関するもの------------------------------------------------------------------------------------
// ニュースクリッピングを作る
$("#subjection").on('click',function(){
    // .val()は入力されている文字などを取得するおまじない
    const sub =$("#sub").val();
    const info = $("#info").val();
    
    // 食べ物の方と区別をつけるために接頭語"000000000000000000000000000000"を追加
    let subtrust = "000000000000000000000000000000"+sub;
    console.log(subtrust);
    localStorage.setItem(subtrust,info); //一覧表示に追加
    // エラーハンドリング(空欄で記録してしまったらそれを取り消す)
    if(sub===""){
        alert("入力して下さい");
        localStorage.removeItem("000000000000000000000000000000");
        }
    //    画面をリロードする
    location.reload();
        //  入力した後に空になる
        $("#subjection").val("");
        $("#infomation").val("");
});
// 食べたもの、血糖値を保存する
$("#save").on('click',function(){
    // .val()は入力されている文字などを取得するおまじない
    const date = $("#today").val();
    const key =$("#key").val();
    const value = $("#memo").val();
    // コンソールに表示
    console.log(date);
    console.log(key);
    console.log(value);
    let data = date+key;
    console.log(data);
    localStorage.setItem(data,value); //一覧表示に追加
       // エラーハンドリンんぐ
    if(key===""){
      alert("入力して下さい");
      localStorage.removeItem(date);
    }
    //画面をリロードする
    location.reload();
    //  入力した後に空になる
    $("#key").val("");
    $("#memo").val("");
    //画面をリロードする
    location.reload();
});
// 2.clear クリックイベント
$("#clear").on("click",function(){
    localStorage.clear();
    $("#list").empty();
})
// ニュース部分のみを取り出す処理--------------------
let fruit = [];
for(let i=0; i<localStorage.length; i++){
const apple = localStorage.key(i);
const orange = localStorage.getItem(apple);
const pine = apple + orange;
fruit.push(pine);
}
// 全ての要素の合計値を分別する
console.log(fruit);
let Iteminformation = [];
let Iteminformationmenu = [];
for(let i=0; i<localStorage.length; i++){
    let saru = fruit[i];
    let gorira = saru.length;
    if(gorira>30){
        Iteminformation.push(saru);
    }else if(gorira<30){
        Iteminformationmenu.push(saru);
    }
    }
 // ニュースのみを取り出すことができた！！！！！！！！！！！！！
console.log(Iteminformation); //←ニュースのみ！！！！！！！！！！！！！
console.log(Iteminformationmenu) //←ニュース以外のみ！！！！！！！！！！！！！
// ニュース食べたもののkeyを取り出す
let sakura = [];
let bara = [];
for(let i=0; i<localStorage.length; i++){
    let yuri = localStorage.key(i);
    let kusa = localStorage.getItem(yuri);
    let hana = yuri.length;
    if(hana>30){
        sakura.push(yuri);
    }else if(hana<30){
        bara.push(yuri);
    }
    }
    // ニュースのkeyのみを取り出すことができた！！！！！！！！！！！！！
console.log(sakura); //←ニュースのみ！！！！！！！！！！！！！
console.log(bara) //←ニュース以外のみ！！！！！！！！！！！！！
// クリックで分析開始する------------------------------------------------------------------------------------
$("#analysis").one("click",function(){
// htmlの中身変わる
$(this).text('コメント表示！');
// これまでの血糖値の平均値を出す------------------------------------------------------------------------------------
let ame = [];
for(let i=0; i<bara.length; i++){
const gum = localStorage.getItem(bara[i]);
const choco = Number(gum);
ame.push(choco);
}
// データ一覧全てを血糖値の小さい順に並び替える
let juice = ame.sort();
console.log(juice);
let sum = 0;
for (let i=0; i<juice.length; i++) {
    sum += juice[i];
    }
// 四捨五入する
let sumresult = Math.round(sum / juice.length);
let completion = ('000'+ sumresult).slice(-3);
// 取り出し完了！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
let final = Number(completion);
console.log(final);
// -----------------------------------------------------------------------------------
// データの最新のものを取り出す
let daterow = [];
for(let i=0; i<bara.length; i++){
//key(何番)でkey名を取得
const pen = bara[i];
const note = localStorage.getItem(pen);
// $("#list").append(html);
daterow.push(pen+note);

}
// データ一覧全てを日付順に並び替える！！！！！！！！！！！！！！！！！！
let datemaster = daterow.sort();
console.log(datemaster);

// 今日の結果を表示する-----------------------------------------------------------------------------------------
let lastdate = datemaster.slice(-1)[0];
console.log(lastdate);
// 日付を取り出す
let aaa = lastdate.substr(0,10);
let bbb = lastdate.replace(aaa,"");
console.log(bbb);
 // 数字のみを取り出す
let eee =bbb.replace(/[^0-9]/g, '');
console.log(eee);
 // メニューのみを取り出す
let fff =bbb.replace(eee,"");
console.log(fff);
// 数字を三桁にする取り出す
let ggg = ('000'+ eee).slice(-3);

// gggnumは入力した最新の値
let gggnum =Number(ggg);
// 入力された値 
console.log(gggnum);
console.log(final);

var btn = document.getElementById('analysis');
var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
// もし入力した最新の数値が平均よりも高ければ(あかん)
if(gggnum>final){
    btn.addEventListener('click', function(){
        modal2.style.display = 'block';
        var keikoku = new Audio("./music/keikoku.mp3");
        keikoku.play();})
        // モーダルを非表示にする
        var closeBtn2 = document.getElementById('closeBtn2'); 
        closeBtn2.addEventListener('click', function(){
        modal2.style.display = 'none';
    })
    // もし入力した最新の数値が平均と同じもしくは低ければ(良い)
}else if(gggnum<final){
    btn.addEventListener('click', function(){
        modal1.style.display = 'block';
        var iikanji = new Audio("./music/iikanji.mp3");
        iikanji.play();
    })
        // モーダルを非表示にする
        var closeBtn1 = document.getElementById('closeBtn1'); 
closeBtn1.addEventListener('click', function(){
modal1.style.display = 'none';
})     
}else if(key===""){
    
}
$("#today-data").append(aaa);
$("#today-data2").append(fff);
$("#today-data3").append(ggg);
// ------------------------------------------------------------------------------------------------------
// 昨日の結果を表示する------------------------------------------------------------------------------------
let yesterdaydate = datemaster[datemaster.length-2];
let ccc = yesterdaydate.substr(0,10);
let ddd = yesterdaydate.replace(ccc,"");
    // 数字のみを取り出す
let hhh =ddd.replace(/[^0-9]/g, '');
    // メニューのみを取り出す
let iii =ddd.replace(hhh,"");
// 数字を三桁にする取り出す
let jjj = ('000'+ hhh).slice(-3);
$("#yesterday-data").append(ccc);
$("#yesterday-data2").append(iii);
$("#yesterday-data3").append(jjj);
// ------------------------------------------------------------------------------------------------------
$(".ave-week").append(completion);
// ------------------------------------------------------------------------------------------------------
// メニュー名+数値だけ取り出す-------------------------------------------------------------------------------
let menuone = [];
for(let i=0; i<bara.length; i++){
    const maxone = bara[i];
    const maxtwo = localStorage.getItem(maxone);
    let maxtwo2 = ('000'+ maxtwo).slice(-3);
    const maximum = maxtwo2+maxone;
    console.log(maximum);
    const x = maximum.substr(0,3);
    console.log(x);
    const y = maximum.substr(13,maximum.length);
    console.log(y);
    const z = x+y;
    console.log(z);
    menuone.push(z);
    }
    console.log(menuone);
    // 血糖値の小さい順に並べる
    let menuonelast = menuone.sort();
    console.log(menuonelast);            
    // 血糖値の小きい3つを取り出す
    // 一番小さいもの
    let smallone = menuonelast[0];
    console.log(smallone);
    let smallonenumber1 =smallone.substr(0,3);
    let smallonemenu1 =smallone.substr(3,smallone.length);
    $("#low1").append(smallonemenu1);
    $("#lowa").append(smallonenumber1);
    // 二番目に小さいもの
    let smalltwo = menuonelast[1];
    let smallonenumber2 =smalltwo.substr(0,3);
    let smallonemenu2 =smalltwo.substr(3,smalltwo.length);
    $("#low2").append(smallonemenu2);
    $("#lowb").append(smallonenumber2);
    // 三番目に小さいもの
    let smallthree = menuonelast[2];
    console.log(smallthree);
    let smallonenumber3 =smallthree.substr(0,3);
    let smallonemenu3 =smallthree.substr(3,smallthree.length);
    $("#low3").append(smallonemenu3);
    $("#lowc").append(smallonenumber3);
    // 血糖値の大きい3つを取り出す---
    // 一番大きいもの
    let bigone = menuonelast[menuonelast.length-1];
    console.log(bigone);
    let bigonenumber1 = bigone.substr(0,3);
    let bigonemenu1 = bigone.substr(3,bigone.length);
    $("#high1").append(bigonemenu1);
    $("#higha").append(bigonenumber1);
    // 二番目に大きいもの
    let bigtwo = menuonelast[menuonelast.length-2];
    console.log(bigtwo);
    let bigonenumber2 = bigtwo.substr(0,3);
    let bigonemenu2 = bigtwo.substr(3,bigtwo.length);
    $("#high2").append(bigonemenu2);
    $("#highb").append(bigonenumber2);
    // 三番目に大きいもの
    let bigthree = menuonelast[menuonelast.length-3];
    console.log(bigthree);
    let bigonenumber3 = bigthree.substr(0,3);
    let bigonemenu3 = bigthree.substr(3,bigthree.length);
    $("#high3").append(bigonemenu3);
    $("#highc").append(bigonenumber3);
    // ------------------------------------------------------------------------------------------------------
})

// これまで保存した健康に関する記事をランダムで表示
$("#avemax").on("click",function(){
    let earth = [];
for(let i=0; i<sakura.length; i++){
    let tree = localStorage.getItem(sakura[i]);
    earth.push(tree);
    }
console.log(earth); //urlのみを取り出すのに成功！！！！！！！！！！！！！！！！！
    var random = Math.floor( Math.random() * earth.length);
    open(earth[random],"_blank");
})


localStorage.removeItem("なす")

// (参考)
// 2.別画面を起動し、そちらでページ遷移する方法
// open( "https://www.google.com", "_blank") ;
 //  $("#today-data").append(html);

// localStorage.setItem(date, JSON.stringify(data)); // JSONに変換
// const values = JSON.parse(localStorage.getItem(data)); // 元に戻す

// console.log(values);

// $("#save").on("click" ,function(){
//     const key = $("#key").val();
//     const value = $("#memo").val(); 
    
//     localStorage.setItem(key,value); //一覧表示に追加
//     const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>'; $("#list").append(html);
//     });

// const html10 =`
//     <tr>
//        <th>${date}</th>
//        <td>${values}</td>
//        <td>${values}</td>   
//     </tr>`
//     $("#today-data").append(html10);
// const data = {
//     key:value
// };
// localStorage.setItem(date, JSON.stringify(data)); // JSONに変換
// const values = JSON.parse(localStorage.getItem(date)); // 元に戻す
    //ブラウザで表示
    // テンプレートリテラル
    // const html =`
    // <tr>
    //    <th>${date}</th>
    //    <td>${data}</td>
    // </tr>
    // `
    // $("#list").append(html);



            

        // ------------------------------------------------------------------------------------------------------
        // 昨日の日付を設定する
// ----------------------------------------------------------------------------------------------------------------------------------
//1.Save クリックイベント
// 公式
// $("xxx").on('click',function(){
// });
// // id="key"の場所の入力蘭
// const key =$("#key").val();
// // id="memo"の場所の入力蘭
// const value =$("#memo").val();
// 配列の完成ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//  // 今日の日付
// const date = $("#today").val();
// const key ="今日食べたもの" ;
// const value = "食後血糖値" ;
// let data = [key,value];
// console.log(data[1]);
// localStorage.setItem(date, JSON.stringify(data)); // JSONに変換
// const values = JSON.parse(localStorage.getItem(data)); // 元に戻す
// const html10 =`
//     <tr>
//        <th>${date}</th>
//        <td>${data[1]}</td>
//     </tr>
//     `
//     $("#yesterday-data").append(html10);
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ローカルストレージの保存順番ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// let json = JSON.stringify(data, undefined, 1);
// localStorage.setItem('key', json);
// const data10 = {
//     key: value
// };

// localStorage.setItem(date, JSON.stringify(data10)); // JSONに変換
// const values = JSON.parse(localStorage.getItem(date)); // 元に戻す
        //3.ページ読み込み：保存データ取得表示
// 結果の要素の配列を格納する箱を作る
// for(let i=0;i<localStorage.length;i++){
//     // key(i) はローカルストレージの引き出しの何番目ですか？という意味
//     const key =localStorage.key(i);
//     const value=localStorage.getItem(key);
//     const html ='<tr><th>'+key+'</th><td>'+bb[0]+'</td></tr>';
//     $("#list").append(html);
//     }
        
        // let pan = "2021-05-1/9よもぎぱん";
        // let pantotal = pan.substr(3,pan.length);
        // console.log(pantotal);
        // let calculation = [];
        // for(let i=0; i<localStorage.length; i++){
        // const item = localStorage.key(i);
        // const calc = localStorage.getItem(item);
        // const calcn = Number(calc);
        // calculation.push(calcn);
        // }
// 三桁表示の方法
// var num = 1;
// var ret = ( '000' + num ).slice( -3 );
// console.log(ret);
// const data = 'hoge123';
// const res = data.replace(/[^0-9]/g, '');
// console.log(res); // 123
        // ------------------------------------------------------------------------------------------------------
    //     console.log(datemaster[datemaster.length-3]);
    //     let lastdateday =lastdate.substr(0,10);
    //     // console.log(lastdateday);
    //     // console.log(datemaster[1]);
    //     // console.log(datemaster[2]);
    //     // console.log(datemaster[3]);
    //     const date = $("#today").val();
    //    $("#analysis").on("click",function(){
    //     //    今日入力したものの分析
    //     $("#today-data").append(datemaster[datemaster.length-1]);

    //     // 前回結果の分析
    //     if(lastdateday = date){
    //         // もしローカルストレージに入っている最新のデータの日付が今日なら一つ前のものを表示する
    //         let lastone = datemaster[datemaster.length-2];
    //         const html100 =`
    //         <p>${lastone}</p>   
    //             `
    //     $("#yesterday-data").append(html100);

    //     }else{
    //         // それ以外の場合は最新のものを表示する
    //         const html101 =`
    //         <p>${lastdate}</p>   
    //             `
    //     $("#yesterday-data").append(html101);
    //     }
    // })
    // const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>'; 
        // $("#yesterday").append(html);
        // (永久保存)指定した文字数を表示-----------------------------------------------------------------
        let pan = "2021-05-1/9よもぎぱん";
        let pantotal = pan.substr(3,pan.length);
        console.log(pantotal);
        // for(let i=0;i<localStorage.length;i++){
        //     const localkey =localStorage.key(i);
        //     const localvalue=localStorage.getItem(localkey);
        //     const localhtml ='<tr><th>'+localkey+'</th><td>'+localvalue+'</td></tr>';
        //     $("#list").append(localhtml);
        //     //要素追加 
        //     let array = daterow.push(localkey);
        //     }
        //     // 要素を昇順にする
        //     let datemaster = daterow.sort();
        //     console.log(datemaster);
        //     // datemasterが日付の配列
        //     // 最後の日付を取得(lastdate)
        //     let lastdate = datemaster.slice(-1)[0];
        //     console.log(lastdate);
// let resultrow = [];
// for(let i=0;i<localStorage.length;i++){
//     const localkey =localStorage.key(i);
// const localvalue = JSON.parse(localStorage.getItem(localkey)); // 元に戻す
// const html11 =`
//     <tr>
//        <th>${localkey}</th>
//        <td>${localkey[0]}</td>
//        <td>${localkey[1]}</td>   
//     </tr>`
//     $("#list").append(html11);
//     // localStorage.setItem(date, JSON.stringify(data)); // JSONに変換
//     // const values = JSON.parse(localStorage.getItem(data)); // 元に戻す
//     // const localhtml ='<tr><th>'+localkey+'</th><td>'+localvalue+'</td></tr>';
//     // $("#list").append(localhtml);
//     //要素追加 
//     resultrow.push([localkey,localvalue]);
//     }
//     // 要素を昇順にする
//     let resultmaster = resultrow.sort();
//     console.log(resultmaster);
//     // resultmasterが結果の配列
//     // 最後の結果を取得(lastdate)
//     let lastresult = resultmaster.slice(-1)[0];
//     console.log(lastresult);
// // 分析結果を表示していく----------------------------------------------------------------------------------------------------------
// let lastresultmenu = lastresult[1];
// console.log(lastresultmenu);
// console.log(lastresultmenu[2]);
// // let a =lastresultmenu.split(',');
// // console.log(a);
// // let b =a.split(',');
// // console.log(b[0]);
// // console.log(b[1]);
// // str = 'Spring,Summer,Fall,Winter';
// // ary = str.split(',');
// // console.log(ary);
// //=>["Spring", "Summer", "Fall", "Winter"] 
// console.log(lastresultmenu[0]);
//     const yesterdayresult =`
//     <p>${lastresultmenu[0]}</p>
//     <p>${lastresultmenu[1]}</p>
//     `
//     $("#today-data").append(yesterdayresult);    
// // 血糖値の高いものを表示する 血糖値の低いものを表示する
// let keto =[];
// for(let i=0;i<localStorage.length;i++){
//     const ketokey =localStorage.key(i);
//     const ketovalue =localStorage.getItem(ketokey);
//     // const localhtml ='<tr><th>'+localkey+'</th><td>'+localvalue+'</td></tr>';
//     // $("#list").append(localhtml);
//     //要素追加 
//     keto.push(ketovalue[0]);
//     }
// console.log(keto);
// //(参考)(永久保存)----------------------------------------------------------------------------------------------------------------
// //3.ページ読み込み：保存データ取得表示
// // 日付の要素の配列を格納する箱を作る
// // let daterow = [];
// // for(let i=0;i<localStorage.length;i++){
// //     const localkey =localStorage.key(i);
// //     const localvalue=localStorage.getItem(localkey);
// //     const localhtml ='<tr><th>'+localkey+'</th><td>'+localvalue+'</td></tr>';
// //     $("#list").append(localhtml);
// //     //要素追加 
// //     let array = daterow.push(localkey);
// //     }
// //     // 要素を昇順にする
// //     let datemaster = daterow.sort();
// //     console.log(datemaster);
// //     // datemasterが日付の配列
// //     // 最後の日付を取得(lastdate)
// //     let lastdate = datemaster.slice(-1)[0];
// //     console.log(lastdate);
// // ----------------------------------------------------------------------------------------------------------------
// // 昇順にする(参考)---------------------------------------------------------------------------------------------------------------------------
//     // var arr = [
//     //     {date : '2020-02-20', memo : 'あいうえお'}
//     //   , {date : '2020-02-30', memo : 'かきくけこ'}
//     //   , {date : '2020-02-10', memo : 'さしすせそ'}
//     //   , {date : '2020-02-05', memo : 'たちつてと'}
//     //   ];
//     //   arr.sort(function(a, b) {
//     //      if (a.date < b.date) {
//     //          return -1;
//     //      } else {
//     //          return 1;
//     //      }
//     //   });
//     //   console.log(arr);
      // // ----------------------------------------------------------------------------------------------------------------------------------
// => 1, 2, 4, 30
//     // var datalist = {
//     //     data1: "hoge1",
//     //     data2: "hoge2"
//     // }
    //     // localStorage.setItem("datalist", JSON.stringify(datalist));
//     // JSON.parse(localStorage.getItem("datalist"))  // -> {"data1":"hoge1", "data2":"hoge2"}
// もし血糖値が高ければ表示する
// // const ketonumber = document.getElementById("memo");
// // if(ketonumber>300){
// //     console.log("異常値が出ております");
// // }else{
// //     console.log("正常値です");
// // }

// // // ローカルストレージ内の特定の値を取得
// // let yesterday =localStorage.getItem("パン");
// // console.log(yesterday);


// // localStorage.setItem('dummy_key_2', JSON.stringify({ name: 'John', age: 20 }));
// // const item3 = localStorage.getItem('dummy_key_2');

// // const parsed1 = JSON.parse(item3); // {"name":"John","age":20}
// // for (var i = 0; i < data.length; i++) {
// //   for (var key in data[i]) {
// //     console.log(data[i][key]);
// //   }
// //  }

       
// // // ローカルストレージ内の特定のkeyとvalueを取得ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーできた!
// // // 特定のkeyを取得
// // let key10 =localStorage.key(3);
// // // 特定のkeyを取得そのキーに対応するvalueを取得し、数字に変換
// // let value10 = localStorage.getItem(key10);
// // console.log(key10,value10);

// // // 特定のストレージの中身をブラウザ上に表示する

// // 一番最新のストレージ保存されているものを取得
//     // const key11 =localStorage.key(localStorage.length-1);
//     // console.log(key11);

// // 順番に関してはローカルストレージ側で保証されない。


//     // const value11 =localStorage.getItem(key11);
//     // const html1 ='<tr><th>'+key11+'</th><td>'+value11+'</td></tr>';
//     // $("#yesterday-data").append(html1);
    




// // ローカルストレージ内の特定の値を削除ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーできた!
// // localStorage.removeItem("なす");

// //テキストボックスの値を使って、出力するメッセージを生成する
// // const output = "入力された内容は「" + inputValue + "」です。";
// // //出力用のp要素にメッセージを表示
// //       document.getElementById("output-message").innerHTML = output
