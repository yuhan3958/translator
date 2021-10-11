var naver_id_login = new naver_id_login("d38d7PSWS1ORhJ8PiwvJ", "https://papago1.netlify.app/loginok.html");
  	var state = naver_id_login.getUniqState();
  	naver_id_login.setButton("white", 2,40);
  	naver_id_login.setDomain("YOUR_SERVICE_URL");
  	naver_id_login.setState(state);
  	naver_id_login.setPopup();
  	naver_id_login.init_naver_id_login();