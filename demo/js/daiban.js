window.onload = function(){
    var v1 = new Vue({
        el:"#main",
        data:{
            arr:[
                {id:1, title:"吃饭",isF:true},
                {id:2, title:"喝水",isF:true},
                {id:3, title:"睡觉",isF:true},
                {id:4, title:"打游戏",isF:false}
            ],
            arr1:[],
            count:0,
            iscount:0,
        },
        methods:{
            re(isF,id){
                if(!isF){
                    var a = confirm("任务未完成，确定删除吗？")
                    if(a){
                        this.arr = this.arr.filter(item=>{
                            return item.id != id
                        })
                    }else{
                        this.arr = this.arr;  
                    }
                }else{
                    this.arr = this.arr.filter(item=>{
                        return item.id != id
                    })
                }
            },
            adds(){
                var a = prompt("请输入任务名称")
                var obj = {
                    id:this.arr.length,
                    title:a,
                    isF:false
                }
                this.arr.push(obj)
              
            },
            // cla(isF){
            //     // isF = !isF;
            //     // console.log(isF)
            // }
            wwc(){
                this.arr1 = this.arr.filter(item=>{
                    return !item.isF
                })
                return this.arr1
            },
            wc(){
                this.arr1 = this.arr.filter(item=>{
                    return item.isF
                })
                return this.arr1
            },
            db(){
                this.arr1 = this.arr
            }
        },
        watch:{
            arr:{
                immediate:true,
                deep:true,
                handler(a,b){
                    this.count = 0;
                    this.iscount = 0;
                    this.arr1 = this.arr;
                    for(var i = 0; i < a.length; i++){
                        if(a[i].isF){
                            this.count++
                        }else{
                            this.iscount++
                        }
                    }
                }
            }
        },
        computed:{
            fin(){
                return this.arr1
            }
        }
    })
}