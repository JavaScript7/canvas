let log = console.log;

let arr = [['milk',10],['job',45],['olp',76],['oa',36]];
let map = new Map(arr);//一组键值对（数组）
log(map.get('oa'));//获取数据
log(map.set('po',54));//添加数据（键值对）

let a = [1,2,3,3,'3'];
let s = new Set(a);
log(s.add(4));
s.delete(1);
log(s);

let list = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var r = list.filter((e,i)=>{
    return list.indexOf(e) === i;//如果要检索的字符串值没有出现，则该方法返回 -1。
})
log(r);

let arrs = new Array(1,2,3);
arrs[100]=100;
log(arrs.length);//101