<template>
  <section>
    <div class="container">
      <div class="user singinBx">
        <div class="imgBx"><img src="../assets/background.jpg"></div>
        <div class="formBx">
          <form>
            <h1>Acessar sua conta</h1>
            <input type="email" name="" placeholder="E-mail">
            <input type="password" name="" placeholder="******">
            <input type="submit" class="float-end" name="" value="ENTRAR" @click="login()">
            <p class="signup"><a href="#">Cadastre sua conta!</a></p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/forum');
    }
  }
}

</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

section {
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0db551;
  display: flex;
}

section .container {
  position: relative;
  width: 800px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
}

section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

section .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  transition: 0.5s;
}

section .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
}

section .container .user .formBx h1 {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 60px;
  color: #0db551;
}

section .container .user .formBx input {
  position: relative;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
}

section .container .user .formBx input[type="submit"] {
  max-width: 100px;
  background: #0db551;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
  border-radius: 10px;
  color: #fff;
}

section .container .user .formBx .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 300;
}

section .container .user .formBx .signup a {
  font-weight: 600;
  text-decoration: none;
  color: #0db551;
}

section .container .singupBx {
  pointer-events: none;
}

section .container.active .singupBx {
  pointer-events: initial;
}

section .container .singupBx .formBx {
  left: 100%;
}

section .container.active .singupBx .formBx {
  left: 0;
}

section .container .singupBx .imgBx {
  left: -100%;
}

section .container.active .singupBx .imgBx {
  left: 0;
}

section .container .singinBx .formBx {
  left: 0;
}

section .container.active .singinBx .formBx {
  left: 100%;
}

section .container .singinBx .imgBx {
  left: 0;
}

section .container.active .singinBx .imgBx {
  left: -100%;
}

@media (max-width: 991px) {
  section .container {
    max-width: 400px;
  }

  section .container .imgBx {
    display: none;
  }

  section .container .user .formBx {
    width: 100%;
  }
}
</style>

