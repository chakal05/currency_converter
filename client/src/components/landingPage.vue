<template>
  <div class="container">
    <div class="center">
      <div class="logo">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>

      <h1>Mandek</h1>

      <div id="errorMessage"></div>

      <form method="POST">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Votre Email "
            name="email"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Votre mot de passe"
            name="password"
          />
        </div>

        <button type="submit" class="btn btn-success" name="submit">Se connecter</button>
      </form>

      <footer>
        <ul>
          <li>
            Mandek Inc
            <i class="far fa-copyright">2019</i>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "landingPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 40px;
  height: 40px;
  margin: 1rem;
}

.center{
 width: 320px;
  border: 1px solid #21398a;
  text-align: center;
  border-radius: 1%;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
h1 {
  color: #21398a;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 1rem;
   font-size: 41px;
}

form {
  color: #fff;
  margin-top: 1rem;
}

.form-control {
  margin: 0 auto;
  text-align: center;
  width: 60%;
  height: 40px;
  font-size: 13px;
  border: 1px solid #21398a;
  margin-top: 2rem;
}

.btn {
  width: 60%;
  border-color: #21398a;
  background-color: #21398a;
  color: #fff;
  margin-top: 3rem;
  height: 40px;
}

footer {
  width: 100%;
  text-align: center;
  color: #21398a;
  padding: 0;
  margin-top: 5rem;
  margin-bottom: 2rem;
}

footer ul {
  list-style-type: none;
}

.fa-copyright {
  font-weight: bold;
}

footer ul li {
  display: block;
  font-size: 13px;
  margin-right: 3%;
  margin-top: 1rem;
  font-weight: bold;
}

footer ul li ul li {
  display: inline-block;
  margin: 3%;
}
footer ul li ul li i {
  color: #21398a;
}
/* For small screen 320px like iphone 5*/

@media (max-width: 320px) {
  .container {
    width: 300px;
    padding: 1%;
    border: 1px solid #21398a;
    text-align: center;
    border-radius: 1%;
    background-color: #fff;
    position: relative;
    top: 0;
    transform: translateY(0);
  }
}
</style>
