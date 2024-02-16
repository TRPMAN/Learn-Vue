<template>
  <form @submit.prevent="handleSubmit"> 
    <label>Email :</label>
    <input type='Email' required v-model="email">

    <label>Password :</label>
    <input type='Password' required v-model="password">
    <div v-if="passwordError" class="error">
        {{passwordError}}
    </div> 
     
    <label>Role :</label>
    <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <label>Skills(Enter your skill and press Enter to add it):</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill" >
        <span @click="deleteSkill(skill)">{{skill}}</span>
    </div>

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Accept Terms and Condition</label>
    </div>

    <div class="submit">
        <button>Create an Account</button>
    </div>

  </form>

  <!-- <p>Email : {{email}}</p>
  <p>Password : {{password}}</p>
  <p>Role : {{role}}</p>
  <p>Term Accept : {{terms}}</p>
  <p>Temp Skill : {{tempSkill}}</p> -->

</template>

<script>
export default {
    data(){
        return{
            email : '',
            password : '',
            role : '',
            terms : false,
            tempSkill : '',
            skills : [],
            passwordError : null
        }
    },
    methods : {
        addSkill(e){
            if(e.key === 'Enter' && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item) =>{
                return skill !== item})
        },
        handleSubmit(){
            // validate password
            
            this.passwordError = this.password.length > 5 ? 
            '' : 'Password must be at least 6 chars long'
  
            if(!this.passwordError){
                alert("Create Success")
            }
        }
    }

}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(255, 255, 255);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #000000;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input,select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #808080;
    color: #555;
  }
  input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: rgb(0, 0, 0);
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    color: #ffffff;
    cursor: pointer;
  }
  button{
    background: blue;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit{
    text-align: center;
  }
  .error{
    margin-top: 10px;
    color: red;
    font-weight:bold ;
  }

</style>