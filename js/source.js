// 搜索框
(function ($) {
	$.fn.extend({
		Source: function (data_json,request) {
			const source = $(this);
			let r = data_json;
			let input_inner = "";
			for (let i = 0; i < r.length; i++) {
                input_inner += `<li>${r[i]}</li>`
            }

			let str = `
                <div class="el-input el-input--suffix">
                <input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
                <i class='iconfont icon-shanchu'></i>

                <div class="content">
                    <ul>
                       
                    </ul>
                </div>
            </div>`;

			$(source).append(str);

			$(source).find(".el-input__inner").on("keyup", function () {
                let v = $(this).val();
                $(source).find(".content ul").empty();
				for (let i = 0; i < r.length; i++) {
					if (v !== "" && r[i].name.indexOf(v) != -1) {
                        $(source).find(".content ul").append(`<li id='${r[i].id}'>${r[i].name}</li>`)
					}
                }
                if($(source).find(".content ul li").length > 0) {
                    $(source).find(".content,.icon-shanchu").css('display','block');
                }else {
                    $(source).find(".content,.icon-shanchu").css('display','none')
                }
            });
            
            $(source).find(".content").on('click','ul li',function(){
                let text = $(this).text();
                let id = $(this).attr('id');
                
                $(source).find(".el-input__inner").val(text);
                $(source).find(".content").css('display','none');

                request({
                    name:text,
                    id:id
                })
            })

            $(source).on('mouseover',function(){
                if($(source).find(".content ul li").length > 0) {
                    $(source).find(".icon-shanchu").css('display','block');
                }
            })

            $(source).on('mouseout',function(){
                $(source).find(".icon-shanchu").css('display','none');
            })

            $('.icon-shanchu').on('click',function(event){
                event.stopPropagation();
                $(source).find(".el-input__inner").val('');
                $(source).find(".content ul").empty();
                $(source).find(".content,.icon-shanchu").css('display','none');
                request({
                    name:'',
                    id:''
                })
            })

            $(window).on('click',function(){
                $(source).find(".content,.icon-shanchu").css('display','none');
            })
            
            console.log('asd');
            console.log($(source));

            $(source).a = function(){
                console.log('123');

            }

            function b(){
                console.log(123);
            }
         
		},
	});
})(jQuery);
