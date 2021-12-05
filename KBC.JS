   
    var question001 = ["What is 1 + 1?"];
    var choices001 = ["<input onclick=correct001() name=button001 type=radio />2<br /><input onclick=incorrect001() name=button001 type=radio />4<br /><input onclick=incorrect001() name=button001 type=radio />7<br />"];
    
    var question002 = ["What is 2 + 2?"];
    var choices002 = ["<input onclick=incorrect002() name=button002 type=radio />3<br /><input onclick=correct002() name=button002 type=radio />4<br /><input onclick=incorrect002() name=button002 type=radio />5<br />"];

    var question003 = ["What is 3 + 3?"];
    var choices003 = ["<input onclick=incorrect003() name=button003 type=radio />8<br /><input onclick=incorrect003() name=button003 type=radio />5<br /><input onclick=correct003() name=button003 type=radio />6<br />"];
    var a;
    var b;
    var c;
    var z;

    window.onload = function() {
        a = 0;
        message001.innerHTML = question001;
        options001.innerHTML = choices001;
        click001.innerHTML = "<button onclick=set002()>Submit</button>";
    }

    function correct001() {
        a = 1;
    }

    function incorrect001() {
        a = 0;
    }

    function set002() {
        b = 0;
        message001.innerHTML = question002;
        options001.innerHTML = choices002;
        click001.innerHTML = "<button onclick=set003()>Next</button>";
    }

    function correct002() {
        b = 1;
    }

    function incorrect002() {
        b = 0;
    }

    function set003() {
        c = 0;
        message001.innerHTML = question003;
        options001.innerHTML = choices003;
        click001.innerHTML = "<button onclick=result001()>Score</button>";
    }

    function correct003() {
        c = 1;
    }

    function incorrect003() {
        c = 0;
    }

    function result001() {
        z = a + b + c;
        message001.innerHTML = "End of Quiz";
        options001.innerHTML = "";
        comment001.innerHTML = "Your score is: " + z;
        click001.innerHTML = "<button onclick=repeat001()>Repeat</button>";
    }

    function repeat001() {
        location.reload();
    }