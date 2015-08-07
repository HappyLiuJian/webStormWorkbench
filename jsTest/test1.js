/**
 * Created by LiuJian on 2015/7/23.
 */

function superClass(name,age) {
    this.name = name;
    this.age = age;
    this.friends = ["zhangmin","Danny"];
}

superClass.prototype.showName = function() {
    console.log(this.name);
};

function subClass(name,age,job) {
    superClass.call(this,name,age);
    this.job = job;
}

subClass.prototype = new superClass();

subClass.prototype.showjob = function(){
    console.log(this.job);
}

var i1 = new subClass("liujian",20,"学生");
console.log(i1.friends);
console.log(i1.job);
i1.showjob();

var fi = (function f(num){
    if(num<=1){
        return 1;
    } else {
        return num*f(num-1);
    }
});

console.log(fi(4));

var myarr = [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,6,8]];

console.log(myarr[0]);

