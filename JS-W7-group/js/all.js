let data;
//初始化資料
function init(){
  axios.get("https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json")
  .then(function(response){
    data = response.data;
    renderC3();
    });
};

init();
// 渲染c3圖表
function renderC3(){
    let obj={};
    let newData1=[]; 
    obj['已完成']= Math.round((data.length/350)*100)+"%";
    obj['未完成']= Math.round(((350-data.length)/350)*100)+"%";
    console.log(obj); //{已完成: "59%", 未完成: "41%"}
    let progress=Object.keys(obj);
    console.log(progress); //[0:'已完成'][1:'未完成'] 
    progress.forEach(function(item){
        let ary=[];
        ary.push(item);
        // console.log(ary); //
        ary.push(obj[item]);
         console.log(ary);
        newData1.push(ary);
        console.log(newData1);
        return newData1;
    
    }); //progress
    console.log(newData1);
    //c3產生器
    const chart1 = c3.generate({
        bindto: '.chart1', //圖要放在html裡的chart這個class中
        data:{
            columns:newData1,
            type:'pie', //圖的種類是圓餅圖
            onclick:function(d,i){ //點擊圖時的效果
                console.log("onclick",d,i); //各自秀出未完成 、以完成
            },
            onmouseover:function(d,i){ //滑鼠滑進圖的效果
                console.log("onmouseover",d,i); //各自秀出男性20%、女性80%
            },
            onmouseout:function(d,i){ //滑鼠滑出圖的效果
                console.log("onmouseout",d,i);
            }
        }
       
    });;
    
    console.log(chart1)
  
    
} //renderC3
    