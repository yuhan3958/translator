import mysql from 'mysql';

// createConnection : 접속하고 싶은 DB정보 입력

      var connection = mysql.createConnection({
         host: '14.5.232.199',
         user: 'root',
         password: 'kr39588954',
         database:'translator'
      });

      // DB 연결

      connection.connect();




      // DB 종료

      var naverLogin = new naver.LoginWithNaverId(
         {
            clientId: "d38d7PSWS1ORhJ8PiwvJ",
            callbackUrl: "https://papago1.netlify.app/loginok.html",
            isPopup: false,
            callbackHandle: true
         }
      );
      naverLogin.init();

      window.addEventListener('load', function () {
         naverLogin.getLoginStatus(function (status) {

            if (status) {
               var email = naverLogin.user.getEmail();
               var name = naverLogin.user.getName();
               var nickname = naverLogin.user.nickname;
               var phone = naverLogin.user.phone;
               if( email == undefined || email == null ) {
                  alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
                  naverLogin.reprompt();
                  return;
               }
               if( name == undefined || name == null ) {
                  alert("이름은 필수정보입니다. 정보제공을 동의해주세요.");
                  naverLogin.reprompt();
                  return;
               }
                console.log(`이메일: ${email}`); // 로그인 한 이메일 ***@naver.com 이 출력된다.\
                console.log(`이름: ${name}`);
                console.log(`닉네임: ${nickname}`);
               //window.location.replace("http://127.0.0.1/test2.html");
            } else {
               console.log("callback 처리에 실패하였습니다.");
               alert("처리에 실패하였습니다, 다시 로그인을 해주세요")
               location.href("./index.html")
            }
         });
      });
      connection.query(`INSERT INTO user (nickname,name,subscription,email,phone) VALUES('${nickname}','${name}',NOW(),'${email}','${phone}');`);