<template>
  <div class="center">
    <div class="logo">
      <h1>
        Mandek
        <span>
          <i class="far fa-laugh-beam"></i>
        </span>
      </h1>
    </div>

    <div id="errorMessage"></div>

    <form method="POST">
      <div class="form-group">
        <input type="email" class="form-control" id="email" placeholder="Votre Email " name="email" />
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
</template>

<script>
export default {
  name: "landingPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

// small screen
@mixin small {
  @media (max-width: 320px) {
    @content;
  }
}
// tablets
@mixin ipad {
  @media (min-width: 768px) {
    @content;
  }
}
// desktop
@mixin desktop {
  @media (min-width: 1024px) {
    @content;
  }
}

.center {
  width: 300px;
  border: 1px solid #21398a;
  text-align: center;
  border-radius: 1%;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @include small {
    width: 80%;
  }

  @include ipad {
    width: 400px;
  }

   @include desktop {
    width: 500px;
  }

  .logo {
    h1 {
      color: #21398a;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 3rem;
      font-size: 37px;

      @include ipad {
        font-size: 49px;
      }

      @include desktop {
        font-size: 52px;
      }
    }

    i {
      font-size: 15px;
      position: relative;
      left: -0.5rem;
      top: -0.1rem;

       @include ipad {
       top: -.1rem;
       left: -.7rem;
        font-size: 23px;
      }
    }
  }

  form {
    color: #21398a;
    margin-top: 1rem;

    .form-control {
      margin: 0 auto;
      text-align: center;
      width: 60%;
      height: 40px;
      font-size: 13px;
      border: 1px solid #21398a;
      background-color: #fff;
      margin-top: 2rem;

      @include desktop {
        width: 50%;
      }
    }
    .btn {
      width: 60%;
      border-color: #21398a;
      background-color: #21398a;
      color: #fff;
      margin-top: 3rem;
      height: 40px;

      @include desktop {
        width: 50%;
      }
    }
  }

  footer {
    width: 100%;
    text-align: center;
    color: #21398a;
    padding: 0;
    margin-top: 5rem;
    margin-bottom: 2rem;
  
    .fa-copyright {
      font-weight: bold;
    }
    ul {
      list-style-type: none;

      li {
        display: block;
        font-size: 14px;
        margin-right: 3%;
        margin-top: 1rem;
        font-weight: bold;

    a{
      color: #21398a;
    }

      @include ipad {
        font-size: 19px;
      }
        ul {
          li {
            display: inline-block;
            margin: 3%;
          }
        }
      }
    }
  }
}
</style>
