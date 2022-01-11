function sendit(){
    
    const expNameText = RegExp(/[가-힣]+$/);
    const expHpText = RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
    const expEmailText = RegExp(/^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/);

    if(!$("#userid").val()){
        alert('아이디를 입력하세요');
        $("#userid").focus();
        return false;
    }

    if($("#userid").val().length < 4 || $("#userid").val().length > 20){
        alert('아이디는 4자이상 20자 이하로 입력하세요');
        $("#userid").focus();
        return false;
    }

    if(!$("#userpw").val()){
        alert('비밀번호를 입력하세요');
        $("#userpw").focus();
        return false;
    }

    if($("#userpw").val().length < 4 || $("#userpw").val().length > 20){
        alert('비밀번호는 4자이상 20자 이하로 입력하세요');
        $("#userpw").focus();
        return false;
    }

    if($("#userpw").val() != $("#userpw_re").val()){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다');
        $("#userpw").focus();
        return false;
    }

    if(!expNameText.test($('#name').val())){
        alert('이름 형식을 확인하세요\n한글만 입력 가능합니다');
        $("#name").val("");
        $("#name").focus();
        return false;
    }

    if(!expHpText.test($('#hp').val())){
        alert('휴대폰번호 형식을 확인하세요\n하이픈(-)을 포함해야 합니다');
        $("#hp").val("");
        $("#hp").focus();
        return false;
    }

    if(!expEmailText.test($('#email').val())){
        alert('이메일 형식을 확인하세요');
        $("#email").val("");
        $("#email").focus();
        return false;
    }

    let isHobby = false;

    for(let i=0; i<$("[name='hobby']").length; i++){
        if($("input:checkbox[name='hobby']").eq(i).is(":checked") == true){
            isHobby = true;
            break;
        }
    }

    if(!isHobby){
        alert('취미는 적어도 한개이상 선택하세요');
        return false;
    }

    if($("#isssn").val() == 'n'){
        alert('주민등록번호 검증버튼을 눌러주세요');
        return false;
    }

    return true;
};


$(function(){
    $("#ssn1").on("keyup", function(){
        if($(this).val().length >= 6){
            $("#ssn2").focus();
        }
    });

    $("#ssnBtn").on("click", function(){

        const ssn = $('#ssn1').val() + $('#ssn2').val();
        const s1 = Number(ssn.substr(0,1))*2;
        const s2 = Number(ssn.substr(1,1))*3;
        const s3 = Number(ssn.substr(2,1))*4;
        const s4 = Number(ssn.substr(3,1))*5;
        const s5 = Number(ssn.substr(4,1))*6;
        const s6 = Number(ssn.substr(5,1))*7;
        const s7 = Number(ssn.substr(6,1))*8;
        const s8 = Number(ssn.substr(7,1))*9;
        const s9 = Number(ssn.substr(8,1))*2;
        const s10 = Number(ssn.substr(9,1))*3;
        const s11 = Number(ssn.substr(10,1))*4;
        const s12 = Number(ssn.substr(11,1))*5;
        const s13 = Number(ssn.substr(12,1));
        
        let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;
        result = result % 11;
        result= 11-result;
        if(result >= 10) result = result % 10;
        if (result==s13) {
            alert("★올바른 주민번호입니다.★");
            $('#isssn').val("y");
            let century = 19;
            if($('#ssn2').val().substr(0,1) == 3 || $('#ssn2').val().substr(0,1) == 4){
                century = 20;
            }
            const year = century + $('#ssn1').val().substr(0,2);
            $("[name='year']").val(year);
            $("[name='month']").val($('#ssn1').val().substr(2,2));
            $("[name='day']").val($('#ssn1').val().substr(4,2));
        } else {
            alert("※올바른 주민번호가 아닙니다.※");
        }
    });
    $("#ssn1").on("keydown", function(){
        $('#isssn').val('n');
    });
    $("#ssn2").on("keydown", function(){
        $('#isssn').val('n');
    });
});