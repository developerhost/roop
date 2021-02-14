process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    var N = Number(lines[0].split(" ")[0]); //人数＝3
    var M = Number(lines[0].split(" ")[1]); //書く数字の上限=2
    var K = Number(lines[0].split(" ")[2]); //ポイントとなる数字=1
    
    var ans = [];
    for(let i = 1; i <= N; i++){
        var line = lines[i].split(" "); //[ '2', '2' ][ '1', '2' ][ '1', '1' ]
        var line1 = line.map(Number); //[ 2, 2 ][ 1, 2 ][ 1, 1 ]
        var dep = line1.indexOf(K); //-1,0,0
        
        var index_array = new Array();
        var index = 0;
        
        var index = line1.indexOf(K);
        
        while(index !== -1){
            index_array.push(index);
            index = line1.indexOf(K, index+1);
        } //もしindexが-1でなければindex_arrayに追加→検索開始位置に１を足して再度実行
        console.log(index_array.length)
    }
 
});
