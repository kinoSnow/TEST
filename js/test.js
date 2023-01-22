const btn = document.getElementById('input-name');
const btn1 = document.getElementById('input-mail');
const btn2 = document.getElementById('input-tel');
const btn3 = document.getElementById("input-text");
function check(){
    if(btn.value == ""){
        alert("名前を入力してください");
	return false;
    }else if(btn1.value ==""){
        alert("メールアドレスを入力してください");
    return false;
    }else if(btn2.value ==""){
        alert("電話番号を入力してください");
	return false;
    }else if(btn3.value ==""){
        alert("問合内容を入力してください");
	return false;
    }else{
	return true;
    }
}

