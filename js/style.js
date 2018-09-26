var myDate = new Date();
//分
console.log(myDate)
new Vue({
    el:'#app',
    data:{
        num:"新建笔记",
        nums:3,
        text1:"",
        span1:"0字",
        times:"",
        uls:[
            {text:"看电影",delete:"删除",nei:"笔记",span:"13字",time:""},
        ]
    },
    methods:{
        btn:function(index){
            var now=new Date();
            var h=now.getHours();
            h=(h<10)?'0'+h:h;
            var mi=now.getMinutes();
            mi=(mi<10)?'0'+mi:mi;
            var si=now.getSeconds();
            si=(si<10)?'0'+si:si;
            this.times=h+':'+mi+":"+si;
            console.log(this.times)
            this.uls.unshift({
                    text:this.num,
                    delete:"删除",
                    nei:this.text1,
                    span:this.text1.length+"字",
                    time:this.times,
                });

        },
        btn2:function(index){
            this.uls.splice(index,1)
        },
        submit1:function(index){
            
            this.uls[index].span=this.uls[index].nei.length+"字";
        },
        key1:function(){
            this.span1=this.text1.length+"字";
        }
    },
    
})