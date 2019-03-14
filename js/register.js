// 选项卡

$(".tabs a").on("click", function() {
	$(this).addClass("click")
		.siblings().removeClass("click");
	var index = $(this).index()
	$($(".content")[index]).css("display", "block")
		.siblings().css("display", "none")
})


// 验证手机号

function isPhoneNo(phone) {
	var pattern = /^1[34578]\d{9}$/;
	return pattern.test(phone);
}

function userTel(inputid, spanid) {
	$(inputid).blur(function() {
		if ($.trim($(inputid).val()).length == 0) {
			$(spanid).html("× 手机号没有输入");
		} else {
			if (isPhoneNo($.trim($(inputid).val())) == false) {
				$(spanid).html("× 手机号码不正确");
			}
		}
		$(inputid).focus(function() {
			$(spanid).html("");
		});
	});
};
userTel('#useraccount', "#checkExistPhone");

// 验证密码
function isPhoneNo(phone) {
	var pattern = /^[a-zA-Z0-9]{4,10}$/;
	return pattern.test(phone);
}

function userTel(inputid, spanid) {
	$(inputid).blur(function() {
		if ($.trim($(inputid).val()).length == 0) {
			$(spanid).html("× 密码没有输入");
		} else {
			if (isPhoneNo($.trim($(inputid).val())) == false) {
				$(spanid).html("× 密码不正确");
			}
		}
		$(inputid).focus(function() {
			$(spanid).html("");
		});
	});
};
userTel('#password', "#checkExistMima");


// 验证姓名

function userName(inputid, spanid) {
    $(inputid).blur(function() {
        if ($.trim($(inputid).val()).length == 0) {
            $(spanid).html("× 名称没有输入");
        } else {
            if (isChinaName($.trim($(inputid).val())) == false) {
                $(spanid).html("× 名称不合法");
            }
        }
    });
    $(inputid).focus(function() {
        $(spanid).html("");
    });

};
userName('#realname', "#checkExistname");

// 验证身份证号

function userID(inputid, spanid) {
    $(inputid).blur(function() {
        if ($.trim($(inputid).val()).length == 0) {
            $(spanid).html("× 身份证号码没有输入");
        } else {
            if (isCardNo($.trim($(inputid).val())) == false) {
                $(spanid).html("× 身份证号不正确");
            }
        }
    });
    $(inputid).focus(function() {
        $(spanid).html("");
    });
};
userID('#personid', "#checkExistID");

// 判断用户是否重复

var oForm = document.querySelector("form");
	oForm.onsubmit = function(){
		//验证用户名
		var reg = /^1[34578]\d{9}$/;
		var str = uname.value;
		if( !reg.test( str ) ){
			return false;
		}
		//验证密码
		var reg = /^.{5,}$/;
		var str = upwd.value;
		if( !reg.test( str ) ){
			return false;
		}
		
		return true;
	}













