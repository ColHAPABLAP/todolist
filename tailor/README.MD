Working config for eskip with
* default hosted react app (:3000)
* tailor on :8080 with fragments on
  * localhost:3000 (react)
  * localhost:8081 (fragment via node)
* static content linked from react available via static rule

react: Path("/react") -> "http://localhost:3000";
static: Path("/static/*path") -> "http://localhost:3000/static";
fragment: Path("/fragment") -> "http://localhost:8081";
tailor: Path("/index") -> "http://localhost:8080";

Target:
* react hosted static via express while header gets rewritten with
Link tag for css/js
* react static does not contain static/bundle css/js stuff
* route via static rule still present for images/media
* tailor on :8080 with fragments on
  * localhost:5000 (react)
  * localhost:8081 (fragment via node)
  * also check using localhost:9090 routes (skipper)

react: Path("/react") -> "http://localhost:5000";
static: Path("/static/*path") -> "http://localhost:5000/static";
fragment: Path("/fragment") -> "http://localhost:8081";
tailor: Path("/index") -> "http://localhost:8080";
