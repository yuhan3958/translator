document.getElementById("naverid").addEventListener("click", (event) => {
    location.href = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=d38d7PSWS1ORhJ8PiwvJ&state=tocken&redirect_uri=https%3a%2f%2fpapago1.netlify.app%2floginok"
    location.href = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=d38d7PSWS1ORhJ8PiwvJ&client_secret=BgXLTyrwI2&code=EIc5bFrl4RibFls1&state=9kgsGTfH4j7IyAkg"
  });


setCookie: (cookie_name, value, miuntes) => {
    const exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + miuntes);
    const cookie_value = escape(value) + ((miuntes == null) ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
}

  