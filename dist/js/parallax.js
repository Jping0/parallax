;(function(window,document){
    // 设置默认
    var targetEl =['.parallax_el'];
    var direction = 'down';
    var speed = 0;
    var durations = 0.6;
    
    function parallax(el){
        var self = this;
        if(!el){
            throw new Error("请传入绑定元素");
        }else{
            targetEl = el;
        }
    }
    function scroll_parallax(){
        targetEl.forEach(function(v,i){
            var current_el = document.querySelectorAll(targetEl[i]);//绑定的元素
            // var el_len = document.querySelectorAll(targetEl[i]).length;
            current_el.forEach(function(value,j){
                // 判断滚动方向
                var current_direction = current_el[j].getAttribute('data-direction');
                // console.log(current_el[j].getBoundingClientRect());
                var current_top = current_el[j].getBoundingClientRect().top;
                if(current_direction != null && current_direction != '' &&(current_direction == 'down'||current_direction == 'up')){
                    direction = current_direction;
                }else{
                    direction = 'down';
                }
                
                // 判断速度
                var current_speed = current_el[j].getAttribute('data-speeds');
                if(current_speed != null && current_speed != '' && current_speed>=1){
                    speed = Math.floor(current_speed);
                }else if(0<=current_speed && current_speed<1){
                    speed = 1;
                }else if(current_speed<0){
                    speed = Math.abs(Math.floor(current_speed));
                }
                

                // 判断持续时间
                var current_duration = current_el[j].getAttribute('data-duration');
                if(current_duration != null && current_duration != '' && current_duration >= 0){
                    durations = current_duration;
                }else{
                    durations = Math.abs(current_duration);
                }
                var zf = '';//方向正负值
                var positions = '';//定位
                if(direction == 'down'){
                    zf = '-';
                    positions = 'top:0px;';
                }else if(direction == 'up') {
                    positions = 'bottom:0px;';
                    
                }else{
                    zf = '-';
                    positions = 'top:0px;';
                }
                var space = current_top-document.documentElement.scrollTop-document.documentElement.clientHeight;//元素距离显示区域距离
                if(space<100){
                    var csstexts = 'transition:all '+durations+'s;transform:translateY('+zf+Math.abs(space)/speed+'px);'+positions;
                    current_el[j].setAttribute('style',csstexts);
                }
            })
           
        })
    }
    
    
    window.onload = function(){
        scroll_parallax();
    }
    window.onresize = function(){
        scroll_parallax();
    }
    window.onscroll = function(){
        scroll_parallax();
    }
    window.parallax = parallax;

})(window,document)